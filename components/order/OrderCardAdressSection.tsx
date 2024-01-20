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
                                <Image alt='master' src={AssetsImages.card} />
                            </div>
                            <a>Select Payment Method</a>
                        </li> : <li className={`card  credit_card`} onClick={() => setShowPop(true)}>
                            <div className='image_container'>
                                <Image alt='visa' src={selectedCard.type == "master" ? AssetsImages.master : AssetsImages.visa} />
                            </div>
                            <div className="number">
                                {selectedCard.card_number}
                                <div className='title'>
                                    {selectedCard.name_on_card}
                                </div>
                                <div className='expirary_date'>
                                    {selectedCard.month?.toString().padStart(2, '0')}/{selectedCard.year}
                                </div>
                            </div>
                            {/* <div className="text">
                                {selectedCard.type == "master" ? "MASTER" : "VISA"}
                            </div> */}
                            <div className='edit' >
                                <Link href={"/card"}>
                                    <a>
                                        Change Card
                                    </a>
                                </Link>
                            </div>

                        </li>
                    }
                    <li className='card selected_address address_card'>
                        <div className="content">
                            <i>
                                <LocationIcon color='#000000' />
                            </i>
                            <h4>
                                {selectedAddress?.name}
                                <h3>
                                    {selectedAddress?.country?.name}, {selectedAddress?.state?.name}, {selectedAddress?.city?.name}<br /> {selectedAddress?.street} <br /> Phone Number: {selectedAddress?.contact_phone}
                                </h3>
                            </h4>

                        </div>

                        <div className='edit' >
                            <Link href={"/address"}>
                                <a>
                                    Change Address
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </OrderCardAdressSectionStyle>
            {/* <CardPop show={showPop} setShowPop={setShowPop} cardList={cardList} setCardList={setCardList} /> */}
        </>

    )
}

