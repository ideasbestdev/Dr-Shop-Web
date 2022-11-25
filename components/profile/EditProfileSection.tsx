import { ButtonStyle, EditProfileSectionStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, SectionTitleStyle } from '@/styledcomponents/index'
import React, { ChangeEvent } from 'react'
import { CartIcon } from '../icons'
import { useState } from 'react';
import Image from 'next/image';
import { stringIsEmptyOrNull } from '@/helpers/index';
import { UserFormErrorsModel, UserModel } from '@/models/index';
import IntlTelInput from 'react-intl-tel-input';
import { useSelector } from 'react-redux';
import { getUserState } from '@/statemangment/slice/userSlice';

export function EditProfileSection() {
    const { currentuser } = useSelector(getUserState);

    const [blobImage, setBlobImage] = useState<string>("");
    const [userPhone, setUserPhone] = useState<string>(currentuser.phone ? currentuser.phone : "+961 ");
    const [userError, setUserErrors] = useState<UserFormErrorsModel>({});
    const [user, setUser] = useState<UserModel>(currentuser);

    function editUser(key: string, value: string): void {
        switch (key) {
            case "firstName":
                user.first_name = value;
                break;

            case "lastName":
                user.last_name = value;
                break;

            case "email":
                user.email = value;
                break;

            case "password":
                user.password = value;
                break;

            case "confirmPassword":
                user.confirmPassword = value;
                break;

            case "taxId":
                user.tax_id = value;
                break;

            case "companyName":
                user.companyName = value;
                break;

            case "industry":
                user.industry = value;
                break;

            case "state":
                user.state = value;
                break;

            case "street":
                user.street = value;
                break;

            case "city":
                user.city = value;
                break;

            case "zipCode":
                user.zipCode = value;
                break;

            case "numberOfPhysicians":
                user.numberOfPhysicians = value;
                break;

            case "termsOfCondition":
                user.termsOfCondition = value == "true";
                break;

            default:
                break;
        }

        const newUser = Object.assign({}, user);

        setUser(newUser);
    }

    function uploadFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files != null) {
            setBlobImage(URL.createObjectURL(e.target.files[0]));
        } else {
            setBlobImage("");
        }
    }

    return (
        <EditProfileSectionStyle>
            <form>
                <div>{stringIsEmptyOrNull(blobImage) ? null : <Image src={blobImage} layout={"fill"} />}<input onChange={(e) => { uploadFile(e) }} type={"file"} hidden id="userProfile" accept="image/*" /><label htmlFor='userProfile'><CartIcon color='#000' /></label></div>
                <SectionTitleStyle>Dr Walid Shahrour</SectionTitleStyle>
                <article>
                    <ul>
                        <li>
                            <InputStyle>
                                <input type={"text"} placeholder="First Name" value={user.first_name} onChange={(e) => editUser("firstName", e.target.value)} />
                            </InputStyle>
                            <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                        </li>
                        <li>
                            <InputStyle>
                                <input type={"text"} placeholder="Last Name" value={user.last_name} onChange={(e) => editUser("lastName", e.target.value)} />
                            </InputStyle>
                            <ErrorMessageStyle>{userError.lastNameError}</ErrorMessageStyle>
                        </li>
                        <li>
                            <InputStyle>
                                <IntlTelInput value={userPhone} defaultCountry='lb' onPhoneNumberChange={(isValid, value, selectedCountryData, fullNumber, extension) => setUserPhone(fullNumber)} onSelectFlag={(currentNumber, selectedCountryData, fullNumber, isValid) => setUserPhone(selectedCountryData.dialCode == undefined ? "" : "+" + selectedCountryData.dialCode + " ")} />
                            </InputStyle>
                            <ErrorMessageStyle>{userError.phoneError}</ErrorMessageStyle>
                        </li>
                        <li>
                            <InputStyle>
                                <input type={"email"} placeholder="Email" value={user.email} onChange={(e) => editUser("email", e.target.value)} />
                            </InputStyle>
                            <ErrorMessageStyle>{userError.emailError}</ErrorMessageStyle>
                        </li>
                    </ul>
                    <button><LinkButtonStyle>Save Changes</LinkButtonStyle></button>
                </article>
            </form>
        </EditProfileSectionStyle>
    )
}
