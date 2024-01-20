import { useEffect, useState } from "react";
import { CardModel } from "../models";
import { UserService } from "../services";
import { CardListStyle } from './../styledcomponents/profile/CardListStyle';
import { LinkButtonStyle, SectionTitleStyle } from '@/styledcomponents/index';
import Image from "next/image";
import { AssetsImages } from '@/utils/index';
import { Instructionline } from "@/components/common";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalState, setSelectedCard } from "@/statemangment/slice/globalSlice";
import { CardPop } from "@/components/popups";
import { AddCardPop } from "@/components/popups/AddCardPop";
import Link from "next/link";


export default function Card() {
    const { selectedCard } = useSelector(getGlobalState);
    const dispatch = useDispatch();
    const [cardList, setCardList] = useState<CardModel[]>([]);
    const [addpop, setAddPop] = useState(false);

    useEffect(function () {
        async function getCardList() {
            const userService = new UserService();
            const response = await userService.getUserCards();
            if (response.success) {
                setCardList(response.data);
            }
        }
        getCardList();
        console.log(selectedCard)
    }, [])

    // useEffect(function () {
    //     async function getCardList() {
    //         const userService = new UserService();
    //         const response = await userService.getUserCards();
    //         if (response.success) {
    //             setCardList(response.data);
    //         }
    //     }
    //     getCardList();
    // }, []);

    return (
        <>
            <CardListStyle className="v2">
                <Instructionline index={4} />
                <SectionTitleStyle>
                    Payment Method
                </SectionTitleStyle>

                <div className='address_container'>
                    <ul className="list_wrapper v2 from_cart">
                        {
                            cardList.map((item) =>
                                <li key={item.id} className={`card  credit_card ${selectedCard?.id == item.id ? "is_Active" : ""}`} onClick={() => { dispatch(setSelectedCard(item)); }}>
                                    <div className='image_container'>
                                        <Image alt={item.type} src={item.type == "master" ? AssetsImages.master : AssetsImages.visa} />
                                    </div>
                                    <div className="number">
                                        {item.card_number}
                                        <div className='title'>
                                            {item.name_on_card}
                                        </div>
                                        <div className='expirary_date'>
                                            {item.month?.toString().padStart(2, '0')}/{item.year}
                                        </div>
                                    </div>
                                    {/* <div className="text">
                                        {item.type == "master" ? "MASTER" : "VISA"}
                                    </div> */}
                                    <div className="circle"></div>
                                </li>
                            )
                        }
                        <li className='card plus_card' onClick={() => setAddPop(true)}>
                            <a className='plus'>+</a>
                            <h4>Add New Card</h4>
                        </li>

                    </ul>
                    <div className='buttons_group'>
                        <Link href={"/address"} >
                            <LinkButtonStyle>Back</LinkButtonStyle>
                        </Link>
                        <Link href={"/billingaddress"} >
                            <LinkButtonStyle className={selectedCard == undefined ? "myDisable" : ""}>Next</LinkButtonStyle>
                        </Link>
                    </div>

                </div>
            </CardListStyle>
            <AddCardPop show={addpop} setShowPop={setAddPop} setCardList={setCardList} />
        </>
    )
}