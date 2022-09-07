import { useState } from "react";
import { UserLoginErrorsModel, UserLoginModel } from "@/authmanger/index";
import { emailRegex, generateRandomNumber, passwordRegex } from "@/helpers/index";
import { auth, ERROR_ALERT_TYPE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE } from "@/utils/index";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AlertState } from "@/statemangment/modal";
import { currentAlertIdentifier, setAlert, setIdentifier } from "@/statemangment/slice/alertSlice";
import { useDispatch } from "react-redux";

export default function Register() {
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

    function validateRegisterForm(): boolean {

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

    const register = () => {
        if (validateRegisterForm()) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
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
                });
        }
    }

    return (
        <div>
            <form noValidate onSubmit={(e) => { e.preventDefault(); register(); }}>
                <div>
                    Email
                </div>
                <input type={"email"} value={user.email} onChange={(e) => { editUser("email", e.currentTarget.value); }} />
                <div>{userError.emailError}</div>
                <div>Password</div>
                <input type={"password"} value={user.password} onChange={(e) => { editUser("password", e.currentTarget.value); }} />
                <div>{userError.passwordError}</div>
                <button onClick={(e) => e.stopPropagation()}>Register</button>
            </form>
        </div>
    )
}

Register.goToHome = true;