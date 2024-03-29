import { ButtonStyle, DescriptionStyle, PopContainerStyle, SectionTitleStyle, VerificatePopStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import ReactInputVerificationCode from "react-input-verification-code";
import Countdown from 'react-countdown';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalState, setVerificationPop } from '@/statemangment/slice/globalSlice';
import { useState, ChangeEvent } from 'react';
import { UserService } from '@/services/userService';
import { generateRandomNumber } from '@/helpers/index';
import { AlertStateModel } from "@/models/AlertStateModel";
import { setAlert } from "@/statemangment/slice/alertSlice";
import { ERROR_ALERT_TYPE } from "@/utils/constants";
import { INFO_ALERT_TYPE } from '@/utils/index';
import { useEffect } from 'react';
import useCountdown from "../customHookes/useCountdown";

interface CountdownProp {
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean,

}

interface Props {
    show?: boolean;
}

export function VerificationPop({ show }: Props) {

    const [disable, setDisable] = useState(false);
    const [value, setValue] = useState("");
    const { showVerificationPop } = useSelector(getGlobalState);
    const [intervalValue, setIntervalValue] = useState<number>(1000)
    const [count, { startCountdown, stopCountdown, resetCountdown }] =
        useCountdown({
            countStart: 120,
            intervalMs: intervalValue,
        })

    const renderer = ({ minutes, seconds, completed }: CountdownProp) => {
        if (completed) {
            setDisable(true);
            return <span className="countdown">00:00</span>
        }
        return <span className="countdown">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>;
    };

    const dispatch = useDispatch();
    useEffect(function () {
        if (showVerificationPop) {
            resetCountdown();
            setDisable(false);
            setValue("");
            startCountdown();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showVerificationPop]);

    async function verify(event: any) {
        event.stopPropagation();
        const userService = new UserService();
        const generatedIdentifier = generateRandomNumber(4);

        if (count == 0) {
            const customAlert: AlertStateModel = {
                message: "Timeout code finished",
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }
            dispatch(setAlert(customAlert));
        }
        if (value.length == 6) {
            const response = await userService.verifcate(value);
            if (response.success) {
                const customAlert: AlertStateModel = {
                    message: response.data,
                    type: INFO_ALERT_TYPE,
                    identifier: generatedIdentifier,
                }
                dispatch(setAlert(customAlert));
                dispatch(setVerificationPop(false))
            } else {
                const customAlert: AlertStateModel = {
                    message: response.error?.message ? response.error.message : "Something went Error",
                    type: INFO_ALERT_TYPE,
                    identifier: generatedIdentifier,
                }
                dispatch(setAlert(customAlert));
            }
        }
    }

    async function Resend(event: any) {
        event.stopPropagation();
        resetCountdown();
        setDisable(false);
        // setValue("");
        startCountdown();
    }


    return (
        <>
            {
                <PopContainerStyle show={show}>
                    <div className="wrap">
                        <VerificatePopStyle>
                            <i className="close" onClick={() => dispatch(setVerificationPop(false))}><CloseIcon /></i>
                            <SectionTitleStyle className="title">Mail verification</SectionTitleStyle>
                            <DescriptionStyle>Please enter the 6 digit verfication code sent to your email. This helps us keep your account safe.</DescriptionStyle>
                            <ReactInputVerificationCode
                                autoFocus
                                placeholder=""
                                length={6}
                                onChange={setValue} value={value}
                            />
                            <DescriptionStyle className="description">OTP code not working? </DescriptionStyle>
                            {/* <Countdown
                                date={Date.now() + 45000}
                                renderer={renderer}
                            /> */}
                            {
                                count == 59 ? <span className="countdown">00:{count.toString().padStart(2, '0')}</span> :
                                    <span className="countdown">{Math.floor(count / 60).toString().padStart(2, '0')}:{(count - Math.floor(count / 60) * 60).toString().padStart(2, '0')}</span>

                            }
                            {
                                count == 0 ? <ButtonStyle onClick={(e) => Resend(e)}>Resend</ButtonStyle> : <ButtonStyle onClick={(e) => verify(e)}>Verify</ButtonStyle>
                            }
                        </VerificatePopStyle>
                    </div>
                </PopContainerStyle>

            }
        </>
    )
}