export interface UserLoginErrorsModel {
    emailError: string;
    passwordError: string;
}

export interface UserLoginModel {
    email: string;
    password: string;
}

export interface UserRegisterErrorsModel {
    emailError: string;
    passwordError: string;
    firstNameError: string;
    lastNameError: string;
    phoneError: string;
    confirmPasswordError: string;
    companyNameError: string;
    taxIdError: string;
    industryError: string;
    licenseError: string;
    stateError: string;
    cityError: string;
    streetError: string;
    zipCodeError: string;
}

export interface UserRegisterModel {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    confirmPassword: string;
    companyName: string;
    taxId: string;
    industry: string;
    license: string;
    state: string;
    city: string;
    street: string;
    zipCode: string;
    termsOfCondition: boolean;
}

export interface UserModel {
    email: string | null;
    uid: string;
}