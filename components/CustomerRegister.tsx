import { ChangeEvent, useState, useEffect } from "react";
import { emailRegex, generateRandomNumber, initObject, passwordRegex, stringIsEmptyOrNull } from "@/helpers/index";
import { AssetsImages, INFO_ALERT_TYPE, ERROR_ALERT_TYPE, PASSWORD_NOT_SAME_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, INVALID_PHONE_MESSAGE, REQUIRED_MESSAGE, FILE_UPLOAD_SUCCESSFULLY, REGISTER_SUCCESS, FORM_VALIDATION_ERROR, TERMS_OF_CONDITION_ERROR, auth, EMAIL_VERIFICATION_MESSAGE, baseUrl, DoctorController, TOKEN_KEY_NAME, TOKEN_EXPIRE } from "@/utils/index";
import { setIdentifier, throwMessage } from "@/statemangment/slice/alertSlice";
import { useDispatch } from "react-redux";
import { SelectModel, AlertStateModel, ServerRes, UserModel, UserFormErrorsModel } from "@/models/index";
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import Image from "next/image";
import { UploadFileStyle, RegisterStyle, ErrorMessageStyle, ButtonStyle } from "@/styledcomponents/index";
import { createUserWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { UserService } from '@/services/index';
import verifcate from './../pages/verifcate';
import Cookies from "js-cookie";



export default function CustomerRegister() {
    const dispatch = useDispatch();
    const [userPhone, setUserPhone] = useState<string>();
    const generatedIdentifier = generateRandomNumber(4);
    const userService = new UserService();
    const [licenseName, setLicenseName] = useState<string>();

    dispatch(setIdentifier(generatedIdentifier));

    let industryData: SelectModel[] = [
        {
            key: "clinc",
            value: "Clinc",
        },
        {
            key: "clinc1",
            value: "Clinc1",
        },
        {
            key: "clinc2",
            value: "Clinc2",
        },
        {
            key: "clinc3",
            value: "Clinc3",
        },
        {
            key: "clinc4",
            value: "Clinc4",
        },
    ]

    const [userError, setUserErrors] = useState<UserFormErrorsModel>({});

    const [user, setUser] = useState<UserModel>({
        email: "",
    });

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

            let customAlert: AlertStateModel = {
                message: FILE_UPLOAD_SUCCESSFULLY,
                type: INFO_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
        } else {
            user.license = null;

            const newUser = Object.assign({}, user);

            setUser(newUser);
        }
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

        if (stringIsEmptyOrNull(user.tax_id)) {
            userError.taxIdError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.companyName)) {
            userError.companyNameError = REQUIRED_MESSAGE;
            validForm = false;
        }
        /*
                if (stringIsEmptyOrNull(user.industry)) {
                    userError.industryError = REQUIRED_MESSAGE;
                    validForm = false;
                }*/
        if (stringIsEmptyOrNull(licenseName)) {
            userError.licenseError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.state)) {
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
        }
        if (stringIsEmptyOrNull(user.numberOfPhysicians)) {
            userError.numberOfPhysiciansError = REQUIRED_MESSAGE;
            validForm = false;
        }
        const newUserError = Object.assign({}, userError);

        setUserErrors(newUserError);

        return validForm;
    }

    const register = async () => {
        // SendEmailVerification();
        if (validateRegisterForm() && !user.termsOfCondition) {
            let customAlert: AlertStateModel = {
                message: TERMS_OF_CONDITION_ERROR,
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
            return;
        }

        if (validateRegisterForm()) {
            let customAlert: AlertStateModel = {
                message: REGISTER_SUCCESS,
                type: INFO_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
            user.phone = userPhone;
            const response: ServerRes = await userService.Register(user);
            console.log(response);
            if (response.success) {
                Cookies.set(TOKEN_KEY_NAME, response.data.api_token, { expires: TOKEN_EXPIRE });
                localStorage.setItem("id", response.data.user.id);
                localStorage.setItem("user_uuid", response.data.user.uuid);
                localStorage.setItem("uuid", response.data.uuid);
                SendEmailVerification();

            }
        } else {
            let customAlert: AlertStateModel = {
                message: FORM_VALIDATION_ERROR,
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
        }
    }

    function SendEmailVerification() {
        /*   const url = baseUrl + DoctorController + "/" + localStorage.getItem("id") + "/" + localStorage.getItem("uuid") + "/verify-email?email=" + user.email + "&callback=http://localhost:3000/verifcate" 
           const actionCodeSettings = {
               url: 'http://localhost:3000/verifcate?email=' + user.email,
               handleCodeInApp: true,
           };
           createUserWithEmailAndPassword(
               auth,
               user.email,
               user.password
           )
               .then(async (userCredential) => {
                   let customAlert: AlertStateModel = {
                       message: EMAIL_VERIFICATION_MESSAGE,
                       type: INFO_ALERT_TYPE,
                       identifier: generatedIdentifier,
                   }
   
                   dispatch(throwMessage(customAlert));
   
                   sendEmailVerification(userCredential.user, actionCodeSettings);
   
               })
               .catch(() => {
               });*/
        signInWithEmailAndPassword(auth, "hussein-cheaitou@hotmail.com", "12345678")
            .then(async (userCredential) => {
                const actionCodeSettings = {
                    url: "http://localhost:3000/verifcate",
                    handleCodeInApp: true,
                };
                sendEmailVerification(userCredential.user, actionCodeSettings);

            });
    }



    return (
        <RegisterStyle>
            <h1>customer  registration</h1>
            <form noValidate onSubmit={(e) => { e.preventDefault(); register(); }}>
                <ul>
                    <li>
                        <h2>User Info</h2>
                        <ul>
                            <li>
                                <div>
                                    <label>First Name *</label>
                                    <input type={"text"} value={user.first_name} onChange={(e) => { editUser("firstName", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.firstNameError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Last Name *</label>
                                    <input type={"text"} value={user.last_name} onChange={(e) => { editUser("lastName", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.lastNameError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Email</label>
                                    <input type={"email"} value={user.email} onChange={(e) => { editUser("email", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.emailError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Phone Number *</label>
                                    <PhoneInput
                                        international
                                        placeholder="Enter phone number"
                                        value={userPhone}
                                        country="US"
                                        onChange={setUserPhone} />

                                    <ErrorMessageStyle>{userError.phoneError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Password</label>
                                    <input type={"password"} value={user.password} onChange={(e) => { editUser("password", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.passwordError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Confirm Password</label>
                                    <input type={"password"} value={user.confirmPassword} onChange={(e) => { editUser("confirmPassword", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.confirmPasswordError}</ErrorMessageStyle>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h2>Company</h2>
                        <ul>
                            <li>
                                <div>
                                    <label>Company Name *</label>
                                    <input type={"text"} value={user.companyName} onChange={(e) => { editUser("companyName", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.companyNameError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Tax id *</label>
                                    <input type={"text"} value={user.tax_id} onChange={(e) => { editUser("taxId", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.taxIdError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Number of Physicians *</label>
                                    <input type={"text"} value={user.numberOfPhysicians} onChange={(e) => { editUser("numberOfPhysicians", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.numberOfPhysiciansError}</ErrorMessageStyle>
                                </div>
                            </li>
                            {/*                            <li>
                                <div>
                                    <label>Industry</label>
                                    <CustomSelect selectValue={user.industry} data={industryData} property={"industry"} onChange={editUser} />
                                    <ErrorMessageStyle>{userError.industryError}</ErrorMessageStyle>
                                </div>
    </li>*/}

                            <li>
                                <div>
                                    <UploadFileStyle>
                                        <label>upload license</label>
                                        <input type={"file"} id="license" onChange={(e) => { uploadFile(e) }} hidden={true} />
                                        <label htmlFor="license" ><Image src={AssetsImages.uploadFileIcon} /></label>
                                        <div>{licenseName}</div>
                                    </UploadFileStyle>
                                    <ErrorMessageStyle>{userError.licenseError}</ErrorMessageStyle>
                                </div>
                            </li>

                        </ul>

                    </li>

                    <li>
                        <h2>User Info</h2>
                        <ul>
                            <li>
                                <div>
                                    <label>State*</label>
                                    <input type={"text"} value={user.state} onChange={(e) => { editUser("state", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.stateError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>City *</label>
                                    <input type={"text"} value={user.city} onChange={(e) => { editUser("city", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.cityError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Street *</label>
                                    <input type={"text"} value={user.street} onChange={(e) => { editUser("street", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.streetError}</ErrorMessageStyle>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Zip Code *</label>
                                    <input type={"text"} value={user.zipCode} onChange={(e) => { editUser("zipCode", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.zipCodeError}</ErrorMessageStyle>
                                </div>
                            </li>

                        </ul>
                    </li>
                </ul>
                <div>
                    <input type={"checkbox"} onChange={(e) => editUser("termsOfCondition", e.currentTarget.checked.toString())} checked={user.termsOfCondition} id="terms" /><label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
                <ButtonStyle backgroundColor="#E7B944" onClick={(e) => e.stopPropagation()}>Register</ButtonStyle>
            </form>
        </RegisterStyle>
    )
}

//Register.goToHome = true;
/*                            <li>
                                <div>
                                    <label>Industry</label>
                                    <input type={"text"} value={user.industry} onChange={(e) => { editUser("industry", e.currentTarget.value); }} />
                                    <ErrorMessageStyle>{userError.industryError}</ErrorMessageStyle>
                                </div>
                            </li>*/