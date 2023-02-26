import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { OrderCardAdressSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { LocationIcon } from '../icons'
import { AssetsImages } from '@/utils/index';
import Link from 'next/link';
import { CardPop } from '../popups';
import { useState, useEffect } from 'react';
import { CardModel } from '@/models/index';
import { UserService } from '@/services/index';

export function OrderCardAdressSection() {
    const { selectedCard, selectedAddress } = useSelector(getGlobalState);
    const [showPop, setShowPop] = useState(false);
    const [cardList, setCardList] = useState<CardModel[]>([]);

    useEffect(function () {
        async function getCardList() {
            const userService = new UserService();
            const response = await userService.getUserCards();
            if (response.success) {
                setCardList(response.data);
            }
            console.log(response.data);
        }
        getCardList();
    }, [])

    return (
        <>
            <OrderCardAdressSectionStyle>
                <ul>
                    {
                        !selectedCard ? <li className='card selected_card' onClick={() => setShowPop(true)}>
                            <div className='image_container'>
                                <Image src={AssetsImages.card} />
                            </div>
                            <a>Select Payment Method</a>
                        </li> : <li className={`card  credit_card`}>
                            <div className='image_container'>
                                <Image src={selectedCard.type == "master" ? AssetsImages.master : AssetsImages.visa} />
                            </div>
                            <div className="number">
                                {selectedCard.card_number}
                            </div>
                            <div className="text">
                                {selectedCard.type == "master" ? "MASTER" : "VISA"}
                            </div>

                        </li>
                    }
                    <li className='card selected_address'>
                        <div className="content">
                            <i>
                                <LocationIcon color='#000000' />
                            </i>
                            <h4>
                                {selectedAddress?.name}
                            </h4>

                        </div>
                        <Link href={"/address"}>
                            <a>
                                Change Address
                            </a>
                        </Link>
                    </li>
                    <li></li>
                </ul>
            </OrderCardAdressSectionStyle>
            <CardPop show={showPop} setShowPop={setShowPop} cardList={cardList} />
        </>

    )
}

