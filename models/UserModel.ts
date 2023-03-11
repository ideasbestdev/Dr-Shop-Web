import { ImageModel } from '@/models/index';
export interface UserModel {
    id?: number,
    email?: string,
    password?: string,
    first_name?: string,
    last_name?: string,
    phone?: string,
    device_id?: string,
    os_type?: string,
    os_version?: string,
    brand?: string,
    companyName?: string,
    model?: string,
    api_token?: string,
    firebase_token?: string,
    avatar?: File | ImageModel,
    syndicate_id?: string,
    tax_id?: string,
    industry_id?: number,
    nb_physicians?: number,
    licenseImg?: File | ImageModel,
    is_doctor?: boolean,
    uuid?: string,
    commission?: number,
    role_id?: number,
    account?: AccountModel,
    license?: File,
    country_code?: string,
    how_hear?: string,
    repeat_passowrd?: string,
    accepted_terms?: boolean,
    accepted_privacy?: boolean,
}
export interface AccountModel {
    id?: number,
    uuid?: string,
    account_type_id?: number,
    first_name?: string,
    last_name?: string,
    email?: string,
    phone?: string,
    created_at?: string,
    email_verified?: boolean,
    phone_verified?: boolean,
    verified?: boolean,
    name?: string,
    country_code?: string,

}
export interface ForgotPasswordModel {
    email?: string,
    action_url?: string,
}
export interface ResetPasswordModel {
    email?: string,
    code?: string,
    password?: string,
    password_confirm?: string,
}
export interface VerifyEmailModel {
    expires?: string,
    signature?: string,
    key_hash?: string,
}

export interface AddressModel {
    id?: number,
    name?: string,
    country_id?: number,
    state_id?: number,
    city_id?: number,
    state?: string,
    city?: string,
    street?: string,
    zip_code?: number,
    building_name?: string,
    contact_name?: string,
    floor?: string,
    contact_country_code?: string,
    contact_phone?: string,
    contact_email?: string,
    is_default?: number,
    uuid?: string,
}

export interface CardModel {
    id?: number,
    card_number?: string,
    name_on_card?: string,
    year?: string,
    month?: string,
    cvv?: number,
    type?: string,
    active?: number,
    is_default?: number,

}