export interface UserLoginErrorsModel {
    emailError: string;
    passwordError: string;
}

export interface UserLoginModel {
    email: string;
    password: string;
}

export interface UserModel {
    email: string | null;
    uid: string;
}