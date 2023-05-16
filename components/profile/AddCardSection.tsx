import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    generateRandomNumber
} from '@/helpers/helpers'
import { cardsRegex } from '@/helpers/Regex'
import { CardModel } from '@/models/UserModel'
import { AddCardSectionStyle, AddLocationSectionStyle, ButtonStyle, CheckboxStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, SectionTitleStyle, SelectStyle } from '@/styledcomponents/index'
import { expiryRegexPattern, masterCardRegexPattern, visaOrMasterRegexPattern, visaRegexPattern } from '@/utils/config'
import { ERROR_ALERT_TYPE, REQUIRED_MESSAGE } from '@/utils/constants'
import React, { useRef, useState } from 'react'
import Card from 'react-credit-cards'
import { SubmitHandler, useForm } from 'react-hook-form'
import Payment from 'payment'
import { UserService } from '@/services/userService'
import { AlertStateModel } from '@/models/AlertStateModel'
import { setAlert } from '@/statemangment/slice/alertSlice'
import { useDispatch } from 'react-redux'
import { ArrowDownIcon } from '../icons'
import { useEffect } from 'react';


interface Props {
    setShowPop?: Function,
    setCardList?: Function
    setSelectedCard?: Function,
    selectedCard?: CardModel,
}

export function AddCardSection({ setShowPop, setCardList, setSelectedCard, selectedCard }: Props) {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<CardModel>({

    });
    const buttonRef = useRef<HTMLButtonElement>(null);
    async function getCards() {
        const userService = new UserService();
        const response = await userService.getUserCards();
        if (response.success && setCardList) {
            const cardList: CardModel[] = response.data;
            setCardList(cardList);
        }
    }
    const onSubmit: SubmitHandler<CardModel> = async (data, e) => {

        if (data.card_number) {
            buttonRef.current?.classList.add("loading");
            data.card_number = data.card_number.replaceAll(" ", "");
            data.is_default = 0;
            data.type = cardsRegex(data.card_number);

            if (data.active) {
                data.active = 1;
            } else {
                data.active = 0;
            }
            const userService = new UserService();
            let response;
            if (selectedCard?.id) {
                response = await userService.EditCard(data);
            } else {
                response = await userService.AddCard(data);
            }
            // const response = await userService.AddCard(data);
            if (response.success) {
                if (e) {
                    e.target.reset();
                }
                if (setShowPop) {
                    setShowPop(false);
                }
                getCards();
                if (setSelectedCard) {
                    setSelectedCard(undefined);
                }
            } else {
                const generatedIdentifier = generateRandomNumber(4);
                const customAlert: AlertStateModel = {
                    message: response.errors ? response.errors[0] : "Something went Error",
                    type: ERROR_ALERT_TYPE,
                    identifier: generatedIdentifier,
                }
                dispatch(setAlert(customAlert));
            }
        }
        buttonRef.current?.classList.remove("loading");

    };
    const currentYear = new Date().getFullYear();
    useEffect(function () {
        async function prepareFormData() {
            if (selectedCard) {
                reset(selectedCard);
            }

        }
        if (selectedCard) {
            prepareFormData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <AddCardSectionStyle onSubmit={handleSubmit(onSubmit)}>
                <form noValidate >
                    <SectionTitleStyle>Add New Card</SectionTitleStyle>
                    <section className="content">
                        <ul>
                            <li>
                                <label>Card Number</label>
                                <InputStyle>
                                    <input type={"number"} placeholder="xxxx xxxx xxxx xxxx" maxLength={19}  {...register("card_number", { required: REQUIRED_MESSAGE, validate: (card_number) => cardsRegex(card_number) != "" ? true : "Card must be master or visa" })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.card_number?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Month Expiration</label>
                                <SelectStyle>
                                    <select {...register("month", { required: REQUIRED_MESSAGE })}>
                                        <option value={""}>month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <i>
                                        <ArrowDownIcon />

                                    </i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.month?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Year Expiration</label>
                                <SelectStyle>
                                    <select {...register("year", { required: REQUIRED_MESSAGE })}>
                                        <option value={""}>year</option>
                                        {
                                            Array(20).fill(0).map((value, index) => <option key={index} value={currentYear - 1 + index}>{currentYear - 1 + index}</option>)
                                        }
                                    </select>
                                    <i>
                                        <ArrowDownIcon />

                                    </i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.month?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Security Code (CVV)</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="xxx" {...register("cvv", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.cvv?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Card Holder Name</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Name" {...register("name_on_card", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.name_on_card?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <CheckboxStyle className='v3'>
                                    <input type={"checkbox"} id={"is_active"} {...register("active")} />
                                    <label htmlFor="is_active">Set as active payment card</label>
                                </CheckboxStyle>
                            </li>
                        </ul>

                    </section>
                    <section className="bottom_section">
                        <ButtonStyle ref={buttonRef} type={"submit"}>
                            <span>Save</span>
                        </ButtonStyle>
                    </section>
                </form>

            </AddCardSectionStyle>

        </>
    )
}