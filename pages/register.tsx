import React, { ChangeEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { emailRegex, generateRandomNumber, initObject, passwordRegex, stringIsEmptyOrNull } from '@/helpers/index';
import { setIdentifier, throwMessage } from '@/statemangment/slice/alertSlice';
import { ComboService, UserService } from '@/services/index';
import { AlertStateModel, SelectModel, ServerResModel, UserFormErrorsModel, UserModel, UserResModel } from '@/models/index';
import { AssetsImages, baseUrl, DoctorUserController, ERROR_ALERT_TYPE, fontUrl, FORM_VALIDATION_ERROR, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, INVALID_PHONE_MESSAGE, PASSWORD_NOT_SAME_MESSAGE, REGISTER_SUCCESS, REQUIRED_MESSAGE, TOKEN_EXPIRE, TOKEN_KEY_NAME } from '@/utils/index';
import { INFO_ALERT_TYPE } from '@/utils/index';
import { isValidPhoneNumber } from 'react-phone-number-input';
import Cookies from 'js-cookie';
import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/index';
import { InputStyle, LinkButtonStyle, RegisterStyle, SectionTitleStyle, UploadFileStyle } from '@/styledcomponents/index';
import Image from 'next/image';
import IntlTelInput from 'react-intl-tel-input';
import { CustomSelect } from '@/components/common';
import { ErrorMessageStyle } from '@/styledcomponents/index';
import { CloseIcon, RightArrowIcon } from '@/components/icons';
import { useEffect } from 'react';

function Register() {

    const dispatch = useDispatch();
    const fileRef = useRef<HTMLInputElement>(null);
    const [userPhone, setUserPhone] = useState<string>("+961 ");
    const generatedIdentifier = generateRandomNumber(4);
    const userService = new UserService();
    const [licenseName, setLicenseName] = useState<string>();
    const [userError, setUserErrors] = useState<UserFormErrorsModel>({});
    const [industryData, setIndustryData] = useState<SelectModel[]>([])

    const [user, setUser] = useState<UserModel>({
        email: "",
        companyName: "",
        numberOfPhysicians: "",
        tax_id: "",
        first_name: "",
        last_name: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    const [step, setStep] = useState<number>(1);


    useEffect(function () {
        async function getPageData() {
            const comboService = new ComboService();
            setIndustryData(await comboService.GetAllIndustry());
        }
        getPageData();
        dispatch(setIdentifier(generatedIdentifier));
    }, [])

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
            userError.licenseError = "";
            const newUserError = Object.assign({}, userError);
            setUserErrors(newUserError);
            setLicenseName(e.target.files[0].name);

            user.license = e.target.files[0];

            const newUser = Object.assign({}, user);

            setUser(newUser);

        } else {
            user.license = null;

            const newUser = Object.assign({}, user);

            setUser(newUser);
        }
    }

    function deleteFile() {
        user.license = null;
        const newUser = Object.assign({}, user);
        setUser(newUser);
        if (fileRef.current) {
            fileRef.current.value = ""
        };
        setTimeout(function () {
            setLicenseName("");
        }, 10);
    }

    function validateRegisterForm(): boolean {
        let validForm: boolean = true;
        initObject(userError);

        if (!emailRegex(user.email)) {
            userError.emailError = INVALID_EMAIL_MESSAGE;
            validForm = false;
        }

        if (!passwordRegex(user.password)) {
            userError.passwordError = INVALID_PASSWORD_MESSAGE;
            validForm = false;
        }

        if (user.password != user.confirmPassword) {
            userError.confirmPasswordError = PASSWORD_NOT_SAME_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.first_name)) {
            userError.firstNameError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.last_name)) {
            userError.lastNameError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(userPhone)) {
            userError.phoneError = INVALID_PHONE_MESSAGE;
            validForm = false;
        }

        if (userPhone != undefined && !isValidPhoneNumber(userPhone)) {
            userError.phoneError = INVALID_PHONE_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.tax_id) && step == 2) {
            userError.taxIdError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.companyName) && step == 2) {
            userError.companyNameError = REQUIRED_MESSAGE;
            validForm = false;
        }
        /*
                if (stringIsEmptyOrNull(user.industry)) {
                    userError.industryError = REQUIRED_MESSAGE;
                    validForm = false;
                }*/
        if (stringIsEmptyOrNull(licenseName) && step == 2) {
            userError.licenseError = REQUIRED_MESSAGE;
            validForm = false;
        }

        /*if (stringIsEmptyOrNull(user.state) && step == 2) {
            userError.stateError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.street)) {
            userError.streetError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.city)) {
            userError.cityError = REQUIRED_MESSAGE;
            validForm = false;
        }
        if (stringIsEmptyOrNull(user.zipCode)) {
            userError.zipCodeError = REQUIRED_MESSAGE;
            validForm = false;
        }*/
        if (stringIsEmptyOrNull(user.numberOfPhysicians) && step == 2) {
            userError.numberOfPhysiciansError = REQUIRED_MESSAGE;
            validForm = false;
        }
        const newUserError = Object.assign({}, userError);
        console.log(newUserError);
        setUserErrors(newUserError);

        return validForm;
    }

    const register = async () => {
        if (validateRegisterForm() && step == 1) {
            setStep(step + 1);
            return;
        }
        /*    if (validateRegisterForm() && !user.termsOfCondition) {
                let customAlert: AlertStateModel = {
                    message: TERMS_OF_CONDITION_ERROR,
                    type: ERROR_ALERT_TYPE,
                    identifier: generatedIdentifier,
                }
    
                dispatch(throwMessage(customAlert));
                return;
            }*/

        if (validateRegisterForm()) {
            let customAlert: AlertStateModel = {
                message: REGISTER_SUCCESS,
                type: INFO_ALERT_TYPE,
                identifier: generatedIdentifier,
            }
            setStep(step + 1);

            dispatch(throwMessage(customAlert));
            user.phone = userPhone;
            const response: ServerResModel = await userService.Register(user);

            if (!response.success) return;

            const userRes: UserResModel = response.data;
            Cookies.set(TOKEN_KEY_NAME, response.data.api_token, { expires: TOKEN_EXPIRE });
            SendEmailVerification(userRes);

        } else {
            let customAlert: AlertStateModel = {
                message: FORM_VALIDATION_ERROR,
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
        }
    }

    function SendEmailVerification(userResponse: UserResModel) {
        if (user.password == undefined || user.email == undefined) return;
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCredential) => {
                const url = baseUrl + DoctorUserController + "v1/" + userResponse.id + "/" + userResponse.uuid + "/verify-email?email=" + user.email + "&callback=" + fontUrl;
                const actionCodeSettings = {
                    url: url,
                    handleCodeInApp: true,
                };
                sendEmailVerification(userCredential.user, actionCodeSettings);
            });
    }

    return (
        <RegisterStyle progress={step}>
            <Image src={AssetsImages.stethoscope} />
            <div>
                {
                    step != 3 ?
                        <form noValidate onSubmit={(e) => { e.preventDefault(); register() }}>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul>
                                {
                                    step == 1 ?
                                        (<>
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
                                                    <input type={"email"} value={user.email} placeholder="Email" onChange={(e) => editUser("email", e.target.value)} />
                                                </InputStyle>
                                                <ErrorMessageStyle>{userError.emailError}</ErrorMessageStyle>
                                            </li>
                                            <li>
                                                <InputStyle>
                                                    <input type={"password"} placeholder="Password" value={user.password} onChange={(e) => editUser("password", e.target.value)} />
                                                </InputStyle>
                                                <ErrorMessageStyle>{userError.passwordError}</ErrorMessageStyle>
                                            </li>
                                            <li>
                                                <InputStyle>
                                                    <input type={"password"} placeholder="Confirm Password" value={user.confirmPassword} onChange={(e) => editUser("confirmPassword", e.target.value)} />
                                                </InputStyle>
                                                <ErrorMessageStyle>{userError.confirmPasswordError}</ErrorMessageStyle>
                                            </li>
                                        </>
                                        ) : step == 2 ?
                                            (
                                                <>
                                                    <li>
                                                        <InputStyle>
                                                            <input type={"text"} placeholder="Company Name" value={user.companyName} onChange={(e) => editUser("companyName", e.target.value)} />
                                                        </InputStyle>
                                                        <ErrorMessageStyle>{userError.companyNameError}</ErrorMessageStyle>
                                                    </li>
                                                    <li>
                                                        <InputStyle>
                                                            <input type={"number"} placeholder="Number of Physicians" value={user.numberOfPhysicians} onChange={(e) => editUser("numberOfPhysicians", e.target.value)} />
                                                        </InputStyle>
                                                        <ErrorMessageStyle>{userError.numberOfPhysiciansError}</ErrorMessageStyle>
                                                    </li>
                                                    <li>
                                                        <InputStyle>
                                                            <input type={"text"} placeholder="Tax ID" value={user.tax_id} onChange={(e) => editUser("taxId", e.target.value)} />
                                                        </InputStyle>
                                                        <ErrorMessageStyle>{userError.taxIdError}</ErrorMessageStyle>
                                                    </li>
                                                    <li>
                                                        <CustomSelect selectValue={user.industry} data={industryData} property={"industry"} onChange={editUser} />
                                                        <ErrorMessageStyle>{userError.industryError}</ErrorMessageStyle>
                                                    </li>
                                                    <li>
                                                        <UploadFileStyle>
                                                            <label>{stringIsEmptyOrNull(licenseName) ? "License" : licenseName}</label>
                                                            <input ref={fileRef} type={"file"} id="license" onChange={(e) => { uploadFile(e) }} hidden={true} />
                                                            {
                                                                stringIsEmptyOrNull(licenseName) ?
                                                                    <label htmlFor="license" >
                                                                        <Image src={AssetsImages.uploadFileIcon} />
                                                                    </label> : <label onClick={() => deleteFile()}><CloseIcon /></label>}

                                                        </UploadFileStyle>
                                                        <ErrorMessageStyle>{userError.licenseError}</ErrorMessageStyle>
                                                    </li>
                                                </>
                                            ) : null
                                }
                            </ul>
                            <button>
                                {
                                    step == 1 ? <>Continue <RightArrowIcon color='#003177' /></> : <LinkButtonStyle>Register</LinkButtonStyle>
                                }
                            </button>
                        </form> : <form className='completed'>
                            <div>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <div>
                                    <Image src={AssetsImages.complete_icon} />
                                </div>
                                <SectionTitleStyle>Completed!</SectionTitleStyle>
                            </div>
                        </form>
                }
            </div>
        </RegisterStyle>
    )
}

export default Register