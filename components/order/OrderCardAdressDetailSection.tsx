import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { OrderCardAdressSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { LocationIcon } from '../icons'
import { AssetsImages, orderStatus } from '@/utils/index';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AddressModel, CardModel, OrderDetailModel } from '@/models/index';
import { UserService } from '@/services/index';
import { useRouter } from 'next/router';

interface Props {
    selectedAddress?: AddressModel,
    selectedCard?: CardModel,
    order?: OrderDetailModel
}

export function OrderCardAdressDetailSection({ selectedAddress, selectedCard, order }: Props) {
    const [id, setId] = useState<string>();
    const router = useRouter();
    useEffect(() => {
        setId(router.query.id?.toString());
    }, [])

    return (
        <>
            <OrderCardAdressSectionStyle className='v2'>
                <div className='order_number'>
                    <h4>Order {order != undefined && order.status != undefined ? orderStatus[order.status] : ""} </h4>
                    {/* <h5>Order number: {id}</h5> */}
                </div>
                <ul>
                    {
                        !selectedCard ? <li className='card selected_card'>
                            <div className='image_container'>
                                <Image alt='master' src={AssetsImages.card} />
                            </div>
                        </li> : <li className={`card  credit_card`} >
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
                    </li>
                    <li></li>
                </ul>
            </OrderCardAdressSectionStyle>
        </>

    )
}

