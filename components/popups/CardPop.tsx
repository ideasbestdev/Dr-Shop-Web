import { ButtonStyle, CardPopStyle, PopContainerStyle, SectionTitleStyle } from "@/styledcomponents/index";
import { CloseIcon } from '@/components/icons';
import { AddLocationSection } from "../profile/AddLocationSection";
import { AssetsImages } from "@/utils/images";
import Image from "next/image";
import { useState } from 'react';
import { AddCardPop } from './AddCardPop';
import { CardModel } from './../../models/UserModel';
import { useDispatch, useSelector } from "react-redux";
import { getGlobalState, setSelectedCard } from '@/statemangment/slice/globalSlice';

interface Props {
    show?: boolean;
    setShowPop?: React.Dispatch<React.SetStateAction<any>>;
    setCardList?: Function;
    cardList?: CardModel[]
}

export function CardPop({ show, setShowPop, setCardList, cardList }: Props) {
    const [addpop, setAddPop] = useState(false);
    const { selectedCard } = useSelector(getGlobalState);
    const dispatch = useDispatch();

    return (
        <>
            <PopContainerStyle show={show}>
                <div className="wrap">
                    <CardPopStyle>
                        <i className="close" onClick={() => setShowPop ? setShowPop(false) : null}><CloseIcon /></i>
                        <SectionTitleStyle>Payment Method</SectionTitleStyle>
                        <div className="list_wrapper">
                            <ul>
                                {
                                    cardList?.map((item) =>
                                        <li key={item.id} onClick={() => { dispatch(setSelectedCard(item)); setShowPop ? setShowPop(false) : null }} className={`card  credit_card ${selectedCard?.id == item.id ? "is_Active" : ""}`}>
                                            <div className='image_container'>
                                                <Image alt={item.type} src={item.type == "master" ? AssetsImages.master : AssetsImages.visa} />
                                            </div>
                                            <div className="number">
                                                {item.card_number}
                                            </div>
                                            {/* <div className="text">
                                                {item.type == "master" ? "MASTER" : "VISA"}
                                            </div> */}
                                            <div className="circle">

                                            </div>
                                        </li>)
                                }
                                <li></li>
                            </ul>
                        </div>
                        <div className="bottom_section">
                            <div className="Add_Card" onClick={() => setAddPop(true)}>
                                <div className='image_container'>
                                    <Image alt="addCard" src={AssetsImages.card} />
                                </div>
                                <a>Add a Credit Card</a>
                            </div>
                        </div>
                    </CardPopStyle>

                </div>
            </PopContainerStyle>
            <AddCardPop show={addpop} setShowPop={setAddPop} setCardList={setCardList} />

        </>
    )
}