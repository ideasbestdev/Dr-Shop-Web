import { useState } from "react";
import { emailRegex, generateRandomNumber, passwordRegex } from "@/helpers/index";
import { auth, ERROR_ALERT_TYPE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, PageUrls } from "@/utils/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { currentAlertIdentifier, getAlertState, setAlert, setIdentifier } from "@/statemangment/slice/alertSlice";
import { AlertStateModel, UserLoginErrorsModel, UserLoginModel } from "@/models/index";

export default function Login() {

    const { identifier } = useSelector(getAlertState);
    const dispatch = useDispatch();

    const userInitailState: UserLoginModel = {
        email: "",
        password: ""
    };

    const userErrorsInitailState: UserLoginErrorsModel = {
        emailError: "",
        passwordError: ""
    };

    const [userError, setUserErrors] = useState<UserLoginErrorsModel>(userErrorsInitailState);
    const [user, setUser] = useState<UserLoginModel>(userInitailState);
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

    const login = () => {
        if (validateLoginForm()) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    route.push(PageUrls.HOME);
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
    )
}

Login.goToHome = true;
