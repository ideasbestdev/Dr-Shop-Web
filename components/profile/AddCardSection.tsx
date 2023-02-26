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


interface Props {
    setShowPop?: Function,
    setAddressList?: Function
}

export function AddCardSection({ setShowPop, setAddressList }: Props) {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CardModel>({

    });
    const buttonRef = useRef<HTMLButtonElement>(null);



    const handleInputChange = (target: any) => {
        if (target.name === 'card_number') {
            target.value = formatCreditCardNumber(target.value)
        } else if (target.name === 'yearsMonth') {
            target.value = formatExpirationDate(target.value)
        } else if (target.name === 'cvv') {
            target.value = formatCVC(target.value)
        }
    }
    const onSubmit: SubmitHandler<CardModel> = async (data, e) => {

        if (data.card_number) {
            buttonRef.current?.classList.add("loading");
            data.card_number = data.card_number.replaceAll(" ", "");
            const issuer = cardsRegex(data.card_number);
            data.active = 1;
            data.type = "master";
            data.month = data.yearsMonth?.split('/')[0];
            data.year = "20" + data.yearsMonth?.split('/')[1];
            if (data.is_default) {
                data.is_default = 1;
            } else {
                data.is_default = 0;
            }
            const userService = new UserService();
            userService.AddCard(data);
            const response = await userService.AddAddress(data);
            if (response.success) {
                if (e) {
                    e.target.reset();
                }
                if (setShowPop) {
                    setShowPop(false);
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
                                    <input type={"text"} placeholder="xxxx xxxx xxxx xxxx" maxLength={19}  {...register("card_number", { required: REQUIRED_MESSAGE, onChange: (e) => { handleInputChange(e.target) } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.card_number?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Expiration Date</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="MM / YY" {...register("yearsMonth", { required: REQUIRED_MESSAGE, pattern: { value: expiryRegexPattern, message: "Date must be MM/YY" }, onChange: (e) => { handleInputChange(e.target) } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.yearsMonth?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Security Code (CVV)</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="xxx" {...register("cvv", { required: REQUIRED_MESSAGE, onChange: (e) => { handleInputChange(e.target) } })} />
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
                                    <input type={"checkbox"} id={"is_default"} {...register("is_default")} />
                                    <label htmlFor="is_default">Set as default payment card</label>

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