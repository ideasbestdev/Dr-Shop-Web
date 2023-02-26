import { ButtonStyle, DescriptionStyle, PopContainerStyle, SectionTitleStyle, VerificatePopStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import ReactInputVerificationCode from "react-input-verification-code";
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { setVerificationPop } from '@/statemangment/slice/globalSlice';
import { useState } from 'react';

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

    const renderer = ({ minutes, seconds, completed }: CountdownProp) => {
        if (completed) {
            setDisable(true);
            return <span className="countdown">00:00</span>;
        }
        return <span className="countdown">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>;
    };

    const dispatch = useDispatch();

    function verify() {
        alert();
    }

    return (
        <>
            {
                show ?
                    <PopContainerStyle show={show}>
                        <div className="wrap">
                            <VerificatePopStyle>
                                <i className="close" onClick={() => dispatch(setVerificationPop(false))}><CloseIcon /></i>
                                <SectionTitleStyle className="title">Mail verification</SectionTitleStyle>
                                <DescriptionStyle>Please enter the 6 digit verfication code sent to your phone. This helps us keep your account safe.</DescriptionStyle>
                                <ReactInputVerificationCode
                                    autoFocus
                                    placeholder=""
                                    length={6}
                                />
                                <DescriptionStyle className="description">OTP code not working? </DescriptionStyle>
                                <Countdown
                                    date={Date.now() + 4500}
                                    renderer={renderer}
                                />
                                <ButtonStyle disabled={disable} onClick={verify}>Verify</ButtonStyle>
                            </VerificatePopStyle>
                        </div>
                    </PopContainerStyle> : null

            }
        </>
    )
}