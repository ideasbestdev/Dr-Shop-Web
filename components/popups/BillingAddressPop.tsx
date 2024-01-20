import { AddressPopStyle, ButtonStyle, DescriptionStyle, PopContainerStyle, SectionTitleStyle, VerificatePopStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import ReactInputVerificationCode from "react-input-verification-code";
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { AddLocationSection } from "../profile/AddLocationSection";
import { AddBillingAddressSection } from "../profile";

interface Props {
    show?: boolean;
    setShowPop?: React.Dispatch<React.SetStateAction<any>>;
    setAddressList?: Function;
}

export function BillingAddressPop({ show, setShowPop, setAddressList }: Props) {

    return (
        <>
            {

                <PopContainerStyle show={show}>
                    <div className="wrap">
                        <AddressPopStyle>
                            <i className="close" onClick={() => setShowPop ? setShowPop(false) : null}><CloseIcon /></i>
                            <AddBillingAddressSection setShowPop={setShowPop} setAddressList={setAddressList} />
                        </AddressPopStyle>
                    </div>
                </PopContainerStyle>
            }
        </>
    )
}