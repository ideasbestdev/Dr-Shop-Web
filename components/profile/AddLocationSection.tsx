import { AddressModel, AlertStateModel, CityModel, StateModel, UserModel } from '@/models/index';
import { UserService } from '@/services/userService';
import { AddLocationSectionStyle, ButtonStyle, CheckboxStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, SectionTitleStyle, SelectStyle } from '@/styledcomponents/index'
import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LocationDialogSection } from './LocationDialogSection';
import { ERROR_ALERT_TYPE, REQUIRED_MESSAGE } from '@/utils/index';
import { useSelector, useDispatch } from 'react-redux';
import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { ArrowDownIcon } from '../icons';
import { useEffect } from 'react';
import { ComboService } from '@/services/index';
import { generateRandomNumber } from '@/helpers/index';
import { setAlert } from '@/statemangment/slice/alertSlice';

interface Props {
    setShowPop?: Function,
    setAddressList?: Function,
    selectedAddress?: AddressModel,
    setSelectedAddress?: Function,
}

export function AddLocationSection({ setShowPop, setAddressList, selectedAddress, setSelectedAddress }: Props) {
    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<AddressModel>({
        defaultValues: {
            contact_country_code: "+93"
        }
    });
    const { firstRequest } = useSelector(getGlobalState);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [cities, setCities] = useState<CityModel[]>();
    const [states, setStates] = useState<StateModel[]>();

    const buttonRef = useRef<HTMLButtonElement>(null);
    const comboService: ComboService = new ComboService();
    async function getAddress() {
        const userService = new UserService();
        const response = await userService.getUserAddress();
        if (response.success && setAddressList) {
            const addressList: AddressModel[] = response.data;
            setAddressList(addressList);
        }
    }
    const onSubmit: SubmitHandler<AddressModel> = async (data, e) => {
        buttonRef.current?.classList.add("loading");
        const userService = new UserService();
        if (data.is_default) {
            data.is_default = 1;
        } else {
            data.is_default = 0;
        }
        let response;
        if (selectedAddress?.id) {
            response = await userService.EditAddress(data);
        } else {
            response = await userService.AddAddress(data);
        }
        if (response.success) {
            if (e) {
                e.target.reset();
            }
            if (setShowPop) {
                setShowPop(false);
            }

            getAddress();
            if (setSelectedAddress) {
                setSelectedAddress(undefined);
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

        buttonRef.current?.classList.remove("loading");
    };

    async function countryChanged(id: number) {
        const response = await comboService.GetAllStates(id);
        setStates(response);
        setCities([]);
        setValue("city", "", { shouldValidate: true });
        setValue("state", "", { shouldValidate: true })

    }

    async function stateChanged(id: number) {
        const response = await comboService.GetAllCities(id);
        setCities(response);
        setValue("city", "", { shouldValidate: true });
    }

    useEffect(function () {
        async function prepareFormData() {
            if (selectedAddress) {
                if (selectedAddress.country_id) {
                    const response = await comboService.GetAllStates(selectedAddress.country_id);
                    setStates(response);
                }
                if (selectedAddress.state_id) {
                    const response = await comboService.GetAllCities(selectedAddress.state_id);
                    setCities(response);
                }
                reset(selectedAddress);
            }

        }
        if (selectedAddress) {
            prepareFormData()
        }
    }, [])

    return (
        <>
            <AddLocationSectionStyle>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <SectionTitleStyle>Add New Shipping Address</SectionTitleStyle>
                    <section className="content">
                        <ul>
                            <li>
                                <label>Address Name</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Address Name" {...register("name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Phone Number</label>
                                <InputStyle className="phone_input">
                                    <SelectStyle>
                                        <select {...register("contact_country_code")}>
                                            {
                                                firstRequest?.countries?.map(item => <option key={item.id} value={item.phone_code}>{item.phone_code}</option>)
                                            }
                                        </select>
                                        <i><ArrowDownIcon /></i>
                                    </SelectStyle>
                                    <input type={"text"} placeholder="Phone Number" {...register("contact_phone", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.contact_phone?.message}</ErrorMessageStyle>
                            </li>

                            <li>
                                <label>State / Province / County</label>
                                <SelectStyle>
                                    <select {...register("country_id", { required: REQUIRED_MESSAGE, onChange: (e) => { countryChanged(e.target.value) } })}>
                                        <option value={""}>State / Province / County</option>
                                        {
                                            firstRequest?.countries?.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                    <i><ArrowDownIcon /></i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.country_id?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Apt, Unit, etc. (optional)</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Apt, Suite, Unit, etc. (optional)" {...register("building_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.building_name?.message}</ErrorMessageStyle>
                            </li>

                            <li>
                                <label>Street Address</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Street Address" {...register("street", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.street?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>State</label>
                                <SelectStyle>
                                    <select {...register("state_id", { required: REQUIRED_MESSAGE, onChange: (e) => { stateChanged(e.target.value) } })}>
                                        <option value={""}>State</option>
                                        {
                                            states?.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                    <i><ArrowDownIcon /></i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.state?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Floor</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Floor" {...register("floor", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.floor?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Zip / Postal Code</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Zip / Postal Code" {...register("zip_code", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.zip_code?.message}</ErrorMessageStyle>
                            </li>

                            <li>
                                <label>City</label>
                                <SelectStyle>
                                    <select {...register("city_id", { required: REQUIRED_MESSAGE })}>
                                        <option value={""}>City</option>
                                        {
                                            cities?.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                    <i><ArrowDownIcon /></i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.city?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <CheckboxStyle className='v3'>
                                    <input type={"checkbox"} id={"is_default"} {...register("is_default")} />
                                    <label htmlFor="is_default">Set as default shipping address</label>
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
                <LocationDialogSection setShow={setShow} show={show} />
            </AddLocationSectionStyle>

        </>
    )
}