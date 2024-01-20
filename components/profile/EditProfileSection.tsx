import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { ButtonStyle, EditProfileSectionStyle, ErrorMessageStyle, InputStyle, SectionTitleStyle, SelectStyle } from '@/styledcomponents/index'
import React from 'react'
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AccountModel } from '@/models/index';
import { emailRegexPattern, INVALID_EMAIL_MESSAGE, INVALID_PHONE_MESSAGE, REQUIRED_MESSAGE, usPhoneRegexPattern } from '@/utils/index';
import { ArrowDownIcon } from '@/components/icons';
import { useEffect, useRef } from 'react';
import { UserService } from '@/services/index';
import { formatPhoneNumber } from '@/helpers/helpers';
export function EditProfileSection() {

    const { firstRequest } = useSelector(getGlobalState);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const userService = new UserService();
    async function saveProfile() {
        buttonRef.current?.classList.add("loading");
        buttonRef.current?.classList.remove("loading");

        //        if (!user) return;
        // const response = await userService.EditProfile(user);
        // if (response.success) {
        //     const userResponse: UserResModel = response.data;
        //     const returnedUser = userResponse.user;
        //     setUser(returnedUser);
        //     dispatch(setCurrentUser(returnedUser));
        //     if (returnedUser.avatar) {
        //         const avatarImage: ImageModel = returnedUser.avatar;
        //         setBlobImage(avatarImage.webp_image)
        //     }
        // }
    }

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<AccountModel>({
    });
    const onSubmit: SubmitHandler<AccountModel> = async (data, e) => {
        buttonRef.current?.classList.add("loading");
        const response = await userService.EditProfile(data);
        buttonRef.current?.classList.remove("loading");
    };
    useEffect(function () {
        if (firstRequest.user?.account) {
            let myAccount: AccountModel = Object.assign({}, firstRequest.user.account);
            if (myAccount.phone) myAccount.phone = formatPhoneNumber(myAccount.phone);;
            // reset(firstRequest.user.account);
            reset(myAccount);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRequest])

    return (
        <EditProfileSectionStyle>
            <section className="container">
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <SectionTitleStyle>Profile</SectionTitleStyle>
                    <section className="content">
                        <ul>
                            <li>
                                <label>First Name</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="First Name" {...register("first_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.first_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Last Name</label>
                                <InputStyle>
                                    <input type={"text"} placeholder="Last Name" {...register("last_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.last_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Email</label>
                                <InputStyle>
                                    <input type={"email"} placeholder="Email Address"  {...register("email", { required: REQUIRED_MESSAGE, pattern: { value: emailRegexPattern, message: INVALID_EMAIL_MESSAGE } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <label>Phone Number</label>
                                <InputStyle className="phone_input">
                                    <input type={"text"} disabled={false} className="country_code" {...register("country_code")} />

                                    {/* <SelectStyle>
                                        <select {...register("country_code")}>
                                            {
                                                firstRequest?.countries?.map(item => <option key={item.id} value={item.phone_code}>{item.phone_code}</option>)
                                            }
                                        </select>
                                        <i><ArrowDownIcon /></i>
                                    </SelectStyle> */}
                                    <input type={"text"} maxLength={14} placeholder="(xxx) xxx-xxxx" {...register("phone", { required: REQUIRED_MESSAGE, pattern: { value: usPhoneRegexPattern, message: INVALID_PHONE_MESSAGE }, onChange: (e) => { e.target.value = formatPhoneNumber(e.target.value) } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.phone?.message}</ErrorMessageStyle>
                            </li>
                            <li></li>
                        </ul>
                    </section>
                    <section className="bottom_section">
                        <ButtonStyle ref={buttonRef} type={"submit"}>
                            <span>Save</span>
                        </ButtonStyle>
                    </section>
                </form>
            </section>
        </EditProfileSectionStyle >
    )
}
