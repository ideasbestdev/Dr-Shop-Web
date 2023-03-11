import { AddressPopStyle, ButtonStyle, CardPopStyle, DescriptionStyle, PopContainerStyle, SectionTitleStyle, VerificatePopStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import ReactInputVerificationCode from "react-input-verification-code";
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { AddLocationSection } from "../profile/AddLocationSection";
import { AddCardSection } from '@/components/profile';

interface Props {
    show?: boolean;
    setShowPop?: React.Dispatch<React.SetStateAction<any>>;
    setCardList?: Function;
}

export function AddCardPop({ show, setShowPop, setCardList }: Props) {

    return (
        <>
            {

                <PopContainerStyle show={show}>
                    <div className="wrap">
                        <CardPopStyle>
                            <i className="close" onClick={() => setShowPop ? setShowPop(false) : null}><CloseIcon /></i>
                            <AddCardSection setShowPop={setShowPop} setCardList={setCardList} />
                        </CardPopStyle>
                    </div>
                </PopContainerStyle>
            }
        </>
    )
}