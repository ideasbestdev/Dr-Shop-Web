import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { ButtonStyle, EditProfileSectionStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, SectionTitleStyle, SelectStyle } from '@/styledcomponents/index'
import React from 'react'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { UserModel, AccountModel } from '@/models/index';
import { emailRegexPattern, INVALID_EMAIL_MESSAGE, REQUIRED_MESSAGE } from '@/utils/index';
import { ArrowDownIcon } from '@/components/icons';
import { useEffect } from 'react';
export function EditProfileSection() {

    const { firstRequest } = useSelector(getGlobalState);

    async function saveProfile() {
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
    useEffect(function () {
        if (firstRequest.user?.account) {
            reset(firstRequest.user.account);
        }
    }, [firstRequest])

    return (
        <EditProfileSectionStyle>
            <section className="container">
                <form noValidate>
                    <SectionTitleStyle>Profile</SectionTitleStyle>
                    <section className="content">
                        <ul>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="First Name" {...register("first_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.first_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="Last Name" {...register("last_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.last_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"email"} placeholder="Email Address"  {...register("email", { required: REQUIRED_MESSAGE, pattern: { value: emailRegexPattern, message: INVALID_EMAIL_MESSAGE } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle className="phone_input">
                                    <SelectStyle>
                                        <select {...register("country_code")}>
                                            {
                                                firstRequest?.countries?.map(item => <option key={item.id} value={item.phone_code}>{item.phone_code}</option>)
                                            }
                                        </select>
                                        <i><ArrowDownIcon /></i>
                                    </SelectStyle>
                                    <input type={"text"} placeholder="Phone" {...register("phone", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.phone?.message}</ErrorMessageStyle>
                            </li>

                        </ul>
                    </section>
                    <section className="bottom_section">
                        <ButtonStyle type={"submit"}>
                            <span>Sign Up</span>
                        </ButtonStyle>
                    </section>
                </form>
            </section>
        </EditProfileSectionStyle >
    )
}
