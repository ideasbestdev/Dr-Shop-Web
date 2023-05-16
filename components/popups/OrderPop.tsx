import { AddressPopStyle, ButtonStyle, CardPopStyle, DescriptionStyle, LinkButtonStyle, OrderPopStyle, PopContainerStyle, SectionTitleStyle, VerificatePopStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import ReactInputVerificationCode from "react-input-verification-code";
import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { AddLocationSection } from "../profile/AddLocationSection";
import { AddCardSection } from '@/components/profile';
import Image from "next/image";
import { AssetsImages } from '@/utils/index';
import Link from "next/link";

interface Props {
    show?: boolean;
    setShowPop?: React.Dispatch<React.SetStateAction<any>>;
    orderId?: number;
}

export function OrderPop({ show, setShowPop, orderId }: Props) {

    return (
        <>
            {

                <PopContainerStyle show={show}>
                    <div className="wrap">
                        <OrderPopStyle>
                            <i className="close" onClick={() => setShowPop ? setShowPop(undefined) : null}><CloseIcon /></i>
                            <div className="image_container">
                                <Image src={AssetsImages.checkboxCircle} alt="checkboxCircle" />
                            </div>
                            <SectionTitleStyle>THANK YOU</SectionTitleStyle>
                            <div>Your Order is Confirmed </div>
                            <div>Order Number: {orderId}</div>
                            <Link href={"/products"}><LinkButtonStyle>Continue Shopping</LinkButtonStyle></Link>
                        </OrderPopStyle>
                    </div>
                </PopContainerStyle>
            }
        </>
    )
}