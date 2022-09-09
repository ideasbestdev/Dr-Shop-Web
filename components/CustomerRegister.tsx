import { ChangeEvent, useState } from "react";
import { emailRegex, generateRandomNumber, passwordRegex, stringIsEmptyOrNull } from "@/helpers/index";
import { AssetsImages, INFO_ALERT_TYPE, ERROR_ALERT_TYPE, PASSWORD_NOT_SAME_MESSAGE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, INVALID_PHONE_MESSAGE, REQUIRED_MESSAGE, FILE_UPLOAD_SUCCESSFULLY, REGISTER_SUCCESS, FORM_VALIDATION_ERROR, TERMS_OF_CONDITION_ERROR } from "@/utils/index";
import { setIdentifier, throwMessage } from "@/statemangment/slice/alertSlice";
import { useDispatch } from "react-redux";
import { UserRegisterModel, UserRegisterErrorsModel, SelectModel, AlertStateModel } from "@/models/index";
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import Image from "next/image";
import { UploadFile, Register, ErrorMessage, Button } from "@/styledcomponents/index";
import CustomSelect from "./CustomSelect";

export default function CustomerRegister() {
    const dispatch = useDispatch();
    const [userPhone, setUserPhone] = useState<string>();
    const generatedIdentifier = generateRandomNumber(4);
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

    const userInitailState: UserRegisterModel = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        confirmPassword: "",
        taxId: "",
        industry: "",
        companyName: "",
        license: "",
        city: "",
        state: "",
        street: "",
        zipCode: "",
        termsOfCondition: false,
    };

    const userErrorsInitailState: UserRegisterErrorsModel = {
        emailError: "",
        passwordError: "",
        firstNameError: "",
        lastNameError: "",
        phoneError: "",
        confirmPasswordError: "",
        taxIdError: "",
        industryError: "",
        companyNameError: "",
        licenseError: "",
        cityError: "",
        stateError: "",
        streetError: "",
        zipCodeError: "",
    };

    const [userError, setUserErrors] = useState<UserRegisterErrorsModel>(userErrorsInitailState);
    const [user, setUser] = useState<UserRegisterModel>(userInitailState);

    function editUser(key: string, value: string): void {
        switch (key) {

            case "firstName":
                user.firstName = value;
                break;

            case "lastName":
                user.lastName = value;
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
                user.taxId = value;
                break;

            case "companyName":
                user.companyName = value;
                break;

            case "industry":
                user.industry = value;
                break;

            case "license":
                user.license = value;
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

            case "termsOfCondition":
                user.termsOfCondition = value == "true";
                break;

            default:
                break;
        }

        const newUser = Object.assign({}, user);

        setUser(newUser);
    }



    function uploadFile(e: ChangeEvent<HTMLInputElement>, value: string) {
        if (e.target.files != null) {

            userError.licenseError = "";
            const newUserError = Object.assign({}, userError);
            setUserErrors(newUserError);
            editUser("license", value);

            var form = new FormData();
            form.append('imgSrc', e.target.files[0]);

            let customAlert: AlertStateModel = {
                message: FILE_UPLOAD_SUCCESSFULLY,
                type: INFO_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
        }
    }

    function initErrors() {
        userError.emailError = "";
        userError.passwordError = "";
        userError.firstNameError = "";
        userError.lastNameError = "";
        userError.phoneError = "";
        userError.confirmPasswordError = "";
        userError.industryError = "";
        userError.companyNameError = "";
        userError.taxIdError = "";
        userError.licenseError = "";
        userError.zipCodeError = "";
        userError.stateError = "";
        userError.streetError = "";
        userError.cityError = "";
    }

    function validateRegisterForm(): boolean {
        let validForm: boolean = true;
        initErrors();

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

        if (stringIsEmptyOrNull(user.firstName)) {
            userError.firstNameError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.lastName)) {
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

        if (stringIsEmptyOrNull(user.taxId)) {
            userError.taxIdError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.companyName)) {
            userError.companyNameError = REQUIRED_MESSAGE;
            validForm = false;
        }

        if (stringIsEmptyOrNull(user.industry)) {
            userError.industryError = REQUIRED_MESSAGE;
            validForm = false;
        }
        if (stringIsEmptyOrNull(user.license)) {
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

        const newUserError = Object.assign({}, userError);

        setUserErrors(newUserError);

        return validForm;
    }



    const register = () => {

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

            /*  createUserWithEmailAndPassword(auth, user.email, user.password)
                  .then((userCredential) => {
                      const user = userCredential.user;
                  })
                  .catch((error) => {
                      const generatedIdentifier = generateRandomNumber(4);
                      let customAlert: AlertState = {
                          message: "Invalid crendials",
                          type: ERROR_ALERT_TYPE,
                          identifier: generatedIdentifier,
                      }
  
                      dispatch(setIdentifier(generatedIdentifier));
  
                      if (customAlert.identifier == currentAlertIdentifier) {
                          dispatch(setAlert(customAlert));
                      }
                  });*/
        } else {
            let customAlert: AlertStateModel = {
                message: FORM_VALIDATION_ERROR,
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }

            dispatch(throwMessage(customAlert));
        }
    }

    return (
        <Register>
            <h1>customer  registration</h1>
            <form noValidate onSubmit={(e) => { e.preventDefault(); register(); }}>
                <ul>
                    <li>
                        <h2>User Info</h2>
                        <ul>
                            <li>
                                <div>
                                    <label>First Name *</label>
                                    <input type={"text"} value={user.firstName} onChange={(e) => { editUser("firstName", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.firstNameError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Last Name *</label>
                                    <input type={"text"} value={user.lastName} onChange={(e) => { editUser("lastName", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.lastNameError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Email</label>
                                    <input type={"email"} value={user.email} onChange={(e) => { editUser("email", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.emailError}</ErrorMessage>
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

                                    <ErrorMessage>{userError.phoneError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Password</label>
                                    <input type={"password"} value={user.password} onChange={(e) => { editUser("password", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.passwordError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Confirm Password</label>
                                    <input type={"password"} value={user.confirmPassword} onChange={(e) => { editUser("confirmPassword", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.confirmPasswordError}</ErrorMessage>
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
                                    <ErrorMessage>{userError.companyNameError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Tax id *</label>
                                    <input type={"text"} value={user.taxId} onChange={(e) => { editUser("taxId", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.taxIdError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Industry</label>
                                    <CustomSelect selectValue={user.industry} data={industryData} property={"industry"} onChange={editUser} />
                                    <ErrorMessage>{userError.industryError}</ErrorMessage>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <UploadFile>
                                        <label>upload license</label>
                                        <input type={"file"} value={user.license} id="license" onChange={(e) => { uploadFile(e, e.currentTarget.value) }} hidden={true} />
                                        <label htmlFor="license" ><Image src={AssetsImages.uploadFileIcon} /></label>
                                        <div>{user.license.split("\\")[user.license.split("\\").length - 1]}</div>
                                    </UploadFile>
                                    <ErrorMessage>{userError.licenseError}</ErrorMessage>
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
                                    <ErrorMessage>{userError.stateError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>City *</label>
                                    <input type={"text"} value={user.city} onChange={(e) => { editUser("city", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.cityError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Street *</label>
                                    <input type={"text"} value={user.street} onChange={(e) => { editUser("street", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.streetError}</ErrorMessage>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <label>Zip Code *</label>
                                    <input type={"text"} value={user.zipCode} onChange={(e) => { editUser("zipCode", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.zipCodeError}</ErrorMessage>
                                </div>
                            </li>

                        </ul>
                    </li>
                </ul>
                <div>
                    <input type={"checkbox"} onChange={(e) => editUser("termsOfCondition", e.currentTarget.checked.toString())} checked={user.termsOfCondition} id="terms" /><label htmlFor="terms">I agree to the Terms & Conditions</label>
                </div>
                <Button backgroundColor="#E7B944" onClick={(e) => e.stopPropagation()}>Register</Button>
            </form>
        </Register>
    )
}

//Register.goToHome = true;
/*                            <li>
                                <div>
                                    <label>Industry</label>
                                    <input type={"text"} value={user.industry} onChange={(e) => { editUser("industry", e.currentTarget.value); }} />
                                    <ErrorMessage>{userError.industryError}</ErrorMessage>
                                </div>
                            </li>*/