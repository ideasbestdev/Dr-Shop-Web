import { useState } from "react";
import { emailRegex, generateRandomNumber, passwordRegex } from "@/helpers/index";
import { AssetsImages, auth, baseUrl, DoctorUserController, EMAIL_VERIFICATION_MESSAGE, EMAIL_VERIFICATION_MESSAGE_TIMEOUT, ERROR_ALERT_TYPE, fontUrl, INFO_ALERT_TYPE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, PageUrls, TOKEN_EXPIRE, TOKEN_KEY_NAME } from "@/utils/index";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { currentAlertIdentifier, getAlertState, setAlert, setIdentifier } from "@/statemangment/slice/alertSlice";
import { AlertStateModel, ServerResModel, UserFormErrorsModel, UserModel, UserResModel } from "@/models/index";
import { UserService } from '@/services/index';
import { CheckboxStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, LoginStyle, SectionTitleStyle } from "@/styledcomponents/index";
import Image from "next/image";
import Cookies from "js-cookie";

export default function Login() {

    const { identifier } = useSelector(getAlertState);
    const dispatch = useDispatch();

    const userInitailState: UserModel = {
        email: "",
        password: ""
    };

    const userErrorsInitailState: UserFormErrorsModel = {
        emailError: "",
        passwordError: ""
    };

    const [userError, setUserErrors] = useState<UserFormErrorsModel>(userErrorsInitailState);
    const [user, setUser] = useState<UserModel>(userInitailState);
    const route = useRouter();

    function editUser(key: string, value: string): void {
        switch (key) {
            case "email":
                user.email = value;
                break;

            case "password":
                user.password = value;
                break;

            default:
                break;
        }

        const newUser = Object.assign({}, user);

        setUser(newUser);
    }

    function validateLoginForm(): boolean {

        let validForm: boolean = true;
        userError.emailError = "";
        userError.passwordError = "";

        if (!emailRegex(user.email)) {
            userError.emailError = INVALID_EMAIL_MESSAGE;
            validForm = false;
        }

        if (!passwordRegex(user.password)) {
            userError.passwordError = INVALID_PASSWORD_MESSAGE;
            validForm = false;
        }

        const newUserError = Object.assign({}, userError);

        setUserErrors(newUserError);

        return validForm;
    }

    const login = async () => {
        if (validateLoginForm()) {
            if (user.password == undefined || user.email == undefined) return;
            const userServce = new UserService();
            const response: ServerResModel = await userServce.Login(user);
            if (!response.success) return;
            const userResponse: UserResModel = response.data;
            Cookies.set(TOKEN_KEY_NAME, userResponse.api_token, { expires: TOKEN_EXPIRE });
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user.emailVerified) {
                        route.push(PageUrls.HOME);
                    } else {

                        if (Cookies.get("verification_email")) {
                            const generatedIdentifier = generateRandomNumber(4);
                            let customAlert: AlertStateModel = {
                                message: EMAIL_VERIFICATION_MESSAGE_TIMEOUT,
                                type: ERROR_ALERT_TYPE,
                                identifier: generatedIdentifier,
                            }
                            dispatch(setAlert(customAlert));
                        } else {
                            const generatedIdentifier = generateRandomNumber(4);
                            let customAlert: AlertStateModel = {
                                message: EMAIL_VERIFICATION_MESSAGE,
                                type: INFO_ALERT_TYPE,
                                identifier: generatedIdentifier,
                            }
                            dispatch(setAlert(customAlert));
                            Cookies.set("verification_email", "true", { expires: 0.00138889 });
                            const url = baseUrl + DoctorUserController + "v1/" + userResponse.id + "/" + userResponse.uuid + "/verify-email?email=" + user.email + "&callback=" + fontUrl;
                            const actionCodeSettings = {
                                url: url,
                                handleCodeInApp: true,
                            };
                            sendEmailVerification(userCredential.user, actionCodeSettings);
                        }

                    }

                })
                .catch((error) => {
                    const generatedIdentifier = generateRandomNumber(4);
                    let customAlert: AlertStateModel = {
                        message: "Invalid crendials",
                        type: ERROR_ALERT_TYPE,
                        identifier: generatedIdentifier,
                    }

                    dispatch(setIdentifier(generatedIdentifier));

                    if (customAlert.identifier == currentAlertIdentifier) {
                        dispatch(setAlert(customAlert));
                    }
                });
        }
    }

    return (
        <>
            <LoginStyle>
                <Image src={AssetsImages.stethoscope} />
                <div>
                    <form noValidate onSubmit={(e) => { e.preventDefault(); login() }}>
                        <SectionTitleStyle>Login your account</SectionTitleStyle>
                        <ul>
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
                            <li><CheckboxStyle><input type={"checkbox"} /><label>Remember me</label></CheckboxStyle><a>Forget password?</a></li>
                            <li><button type={"submit"}><LinkButtonStyle>Login</LinkButtonStyle></button></li>
                            <li>Don't have account yet? <a>Sign up</a></li>
                        </ul>
                    </form>
                </div>
            </LoginStyle>
        </>
    )
}

Login.goToHome = true;

{
    /*
            <div>
            <form noValidate onSubmit={(e) => { e.preventDefault(); login(); }}>
                <div>
                    Email
                </div>
                <input type={"email"} value={user.email} onChange={(e) => { editUser("email", e.currentTarget.value); }} />
                <div>{userError.emailError}</div>
                <div>Password</div>
                <input type={"password"} value={user.password} onChange={(e) => { editUser("password", e.currentTarget.value); }} />
                <div>{userError.passwordError}</div>
                <button onClick={(e) => e.stopPropagation()}>Login</button>
            </form>
        </div>
    */
}