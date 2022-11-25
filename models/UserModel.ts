export interface UserFormErrorsModel {
    emailError?: string;
    passwordError?: string;
    firstNameError?: string;
    lastNameError?: string;
    phoneError?: string;
    confirmPasswordError?: string;
    companyNameError?: string;
    taxIdError?: string;
    industryError?: string;
    licenseError?: string;
    stateError?: string;
    cityError?: string;
    streetError?: string;
    zipCodeError?: string;
    numberOfPhysiciansError?: string
}
export interface UserModel {
    id?: number;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    confirmPassword?: string;
    companyName?: string;
    tax_id?: string;
    industry?: string;
    license?: any;
    syndicate_id?: string;
    state?: string;
    city?: string;
    street?: string;
    zipCode?: string;
    numberOfPhysicians?: string;
    device_id?: string;
    os_type?: string;
    os_version?: string;
    brand?: string;
    model?: string;
    termsOfCondition?: boolean;
    addresses?: AddressModel[];
}

interface AddressModel {
    state: string,
    city: string,
    street: string,
    zip_code: string,
    name: string,
}
export interface UserStateModel {
    currentuser: UserModel | null;
    isAuthenticated: boolean;
}













/*
export interface UserRegisterModel {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    confirmPassword?: string;
    companyName?: string;
    tax_id?: string;
    industry?: string;
    // licenseName: string;
    license?: any;
    syndicate_id?: string;
    state?: string;
    city?: string;
    street?: string;
    zipCode?: string;
    numberOfPhysicians?: string;
    device_id?: string;
    os_type?: string;
    os_version?: Number;
    brand?: string;
    model?: string;
    termsOfCondition?: boolean;
}

export interface UserModel {
    email: string | null;
    uid: string;
    first_name?: string;
    last_name?: string;
    email_verified_at?: string;
    user_type_id?: Number;
}
*/
/*export interface UserLoginErrorsModel {
    emailError: string;
    passwordError: string;
}

export interface UserLoginModel {
    email: string;
    password: string;
}

export interface UserRegisterErrorsModel {
    emailError?: string;
    passwordError?: string;
    firstNameError?: string;
    lastNameError?: string;
    phoneError?: string;
    confirmPasswordError?: string;
    companyNameError?: string;
    taxIdError?: string;
    industryError?: string;
    licenseError?: string;
    stateError?: string;
    cityError?: string;
    streetError?: string;
    zipCodeError?: string;
    numberOfPhysiciansError?: string
}
*/