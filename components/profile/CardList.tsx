
import { useEffect, useState } from 'react';
import { CardModel } from '@/models/index';
import { UserService } from '@/services/userService';
import { CardListStyle, SectionTitleStyle } from '@/styledcomponents/index';
import Image from 'next/image';
import { AssetsImages } from '@/utils/images';
import { AddCardSection } from './AddCardSection';
export default function CardList() {
    const [cardList, setCardList] = useState<CardModel[]>([]);
    const [selectedCard, setSelectedCard] = useState<CardModel | undefined>(undefined);

    useEffect(function () {
        async function getCardList() {
            const userService = new UserService();
            const response = await userService.getUserCards();
            if (response.success) {
                setCardList(response.data);
            }
        }
        getCardList();
    }, []);

    function addEditCard(card: CardModel) {
        setSelectedCard(card);
    }
    return (
        <>{
            selectedCard ?
                <AddCardSection setCardList={setCardList} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                :
                <CardListStyle>
                    <SectionTitleStyle>
                        Cards
                    </SectionTitleStyle>

                    <div className='address_container'>
                        <ul className="list_wrapper v2">
                            {
                                cardList.map((item) =>
                                    <li key={item.id} className={`card  credit_card `} onClick={() => addEditCard(item)}>
                                        <div className='image_container'>
                                            <Image alt={item.type} src={item.type == "master" ? AssetsImages.master : AssetsImages.visa} />
                                        </div>
                                        <div className="number">
                                            {item.card_number}
                                        </div>
                                        <div className="text">
                                            {item.type == "master" ? "MASTER" : "VISA"}
                                        </div>
                                    </li>
                                )
                            }
                            <li className='card' onClick={() => addEditCard({})}>
                                <a className='plus'>+</a>
                                <h4>Add new card</h4>
                            </li>

                        </ul>
                    </div>
                </CardListStyle>
        }

        </>
    )
}