
import { useEffect, useState } from 'react';
import { AlertStateModel, CardModel } from '@/models/index';
import { UserService } from '@/services/userService';
import { CardListStyle, SectionTitleStyle } from '@/styledcomponents/index';
import Image from 'next/image';
import { AssetsImages } from '@/utils/images';
import { AddCardSection } from './AddCardSection';
import { INFO_ALERT_TYPE } from '@/utils/constants';
import { generateRandomNumber } from '@/helpers/helpers';
import { useDispatch } from 'react-redux';
import { setAlert } from '@/statemangment/slice/alertSlice';

export default function CardList() {
    const [cardList, setCardList] = useState<CardModel[]>([]);
    const [selectedCard, setSelectedCard] = useState<CardModel | undefined>(undefined);
    const userService = new UserService();
    const dispatch = useDispatch();

    useEffect(function () {
        async function getCardList() {
            const response = await userService.getUserCards();
            if (response.success) {
                setCardList(response.data);
            }
        }
        getCardList();
    }, []);

    function addEditCard(card: CardModel) {
        delete card.card_number;
        delete card.cvv;
        setSelectedCard(card);
    }

    async function deleteCard(card: CardModel) {
        const response = await userService.DeleteCard(card);
        const generatedIdentifier = generateRandomNumber(4);
        const customAlert: AlertStateModel = {
            message: response.data,
            type: INFO_ALERT_TYPE,
            identifier: generatedIdentifier,
        }
        dispatch(setAlert(customAlert));
        setCardList(cardList.filter(d => d.id != card.id));
    }

    return (
        <>{
            selectedCard ?
                <AddCardSection setCardList={setCardList} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                :
                <CardListStyle>
                    <SectionTitleStyle>
                        Payment Method
                    </SectionTitleStyle>

                    <div className='address_container'>
                        <ul className="list_wrapper v2">
                            {
                                cardList.map((item) =>
                                    <li key={item.id} className={`card  credit_card `} >
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
                                        {/* 
                                        <div className="text">
                                            {item.type == "master" ? "MASTER" : "VISA"}
                                        </div> */}
                                        <div className='edit'>
                                            <div className='remove_button' onClick={() => deleteCard(item)}>
                                                Remove
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                            <li className='card plus_card' onClick={() => addEditCard({})}>
                                <a className='plus'>+</a>
                                <h4>Add New Card</h4>
                            </li>

                        </ul>
                    </div>
                </CardListStyle>
        }

        </>
    )
}