import { UserFormErrorsModel, UserModel } from '@/models/index';
import { AddLocationSectionStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, LocationDialogStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Image from 'next/image';
import React, { useState } from 'react'
import { CartIcon } from '../icons';
import { AssetsImages } from '@/utils/index';
import { LocationDialogSection } from './LocationDialogSection';

export function AddLocationSection() {
    const [user, setUser] = useState<UserModel>({
        email: "",
    });

    const [show, setShow] = useState(false);

    const [userError, setUserErrors] = useState<UserFormErrorsModel>({});

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

    return (
        <>
            <AddLocationSectionStyle>
                <form>
                    <article>
                        <div>
                            <SectionTitleStyle>Add Location</SectionTitleStyle>
                            <ul>
                                <li>
                                    <InputStyle>
                                        <input type={"text"} placeholder="State" value={user.state} onChange={(e) => editUser("state", e.target.value)} />
                                    </InputStyle>
                                    <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                                </li>
                                <li>
                                    <InputStyle>
                                        <input type={"text"} placeholder="City" value={user.city} onChange={(e) => editUser("city", e.target.value)} />
                                    </InputStyle>
                                    <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                                </li>
                                <li>
                                    <InputStyle>
                                        <input type={"text"} placeholder="Street" value={user.street} onChange={(e) => editUser("street", e.target.value)} />
                                    </InputStyle>
                                    <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                                </li>
                                <li>
                                    <InputStyle>
                                        <input type={"text"} placeholder="Zip Code" value={user.zipCode} onChange={(e) => editUser("zipCode", e.target.value)} />
                                    </InputStyle>
                                    <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <SectionTitleStyle>Saved Addresses</SectionTitleStyle>
                            <ul>
                                <li onClick={(e) => { e.stopPropagation(); setShow(true) }}>
                                    <div>Address 1 (Home)</div>
                                    <span><CartIcon color='#000' /></span>
                                </li>
                                <li onClick={(e) => { e.stopPropagation(); setShow(true) }}>
                                    <div>Address 2 (Hospital)</div>
                                    <span><CartIcon color='#000' /></span>
                                </li>
                                <li onClick={(e) => { e.stopPropagation(); setShow(true) }}>
                                    <div>Address 3 (Clinc)</div>
                                    <span><CartIcon color='#000' /></span>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <button>
                        <LinkButtonStyle>Save</LinkButtonStyle>
                    </button>
                </form>
                <LocationDialogSection setShow={setShow} show={show} />
            </AddLocationSectionStyle>

        </>
    )
}