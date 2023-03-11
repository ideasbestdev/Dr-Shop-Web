import { AddressModel, CardModel, ServerResModel, UserModel, AccountModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorConfigController, AccountController, DEVICEID_KEY_NAME, AddressController, CardController, apiversion } from "@/utils/index";
import { UAParser } from 'ua-parser-js';
import { getDeviceId } from '@/helpers/index';
import { AxiosError } from 'axios';
import queryString from 'query-string';



export class UserService {

    async Register(user: UserModel): Promise<ServerResModel> {
        const parser = new UAParser();
        parser.setUA(navigator.userAgent);
        user.device_id = getDeviceId();
        user.os_type = parser.getOS().name;
        user.os_version = parser.getOS().version;
        delete user.accepted_privacy;
        delete user.accepted_terms;
        delete user.repeat_passowrd;
        delete user.how_hear;
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(AccountController + apiversion + "/register", user)
            .then((response: any) => {
                serverRes = response.data;
            }, (error: any) => {
                serverRes.errors = error.response?.data.error.errors;
            });

        return serverRes;
    }

    async sendEmailVerifcate(): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(AccountController + apiversion + "/verify/email").then((response: any) => {
            serverRes = response.data;
        }, (error) => {
        });

        return serverRes;
    }

    async verifcate(code: string): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.get(AccountController + apiversion + "/verify/email?code=" + code).then((response: any) => {
            serverRes = response.data;
        }, (error) => {
        });

        return serverRes;
    }

    async Login(user: UserModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        if (user.email == undefined) return serverRes;
        await http.post(AccountController + apiversion + "/login?email=" + encodeURIComponent(user.email) + "&password=" + user.password + "&device_id=" + getDeviceId())
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
                serverRes.error = error.response?.data.error;
            });

        return serverRes;
    }

    async EditProfile(user: AccountModel): Promise<ServerResModel> {
        user.phone = user.phone?.split(" ").join("");
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(AccountController + apiversion + "/profile/" + user.id, user)
            .then((response: any) => {
                serverRes = response.data;
                console.log(serverRes);
            }, (error) => {
            });

        return serverRes;
    }

    async getUserInfo(): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.get(DoctorConfigController + apiversion + "/all")
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }

    async getUserAddress(): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.get(AddressController + apiversion + "/list?page=1&per_page=100")
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }

    async AddAddress(data: AddressModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(AddressController + apiversion, data)
            .then((response: any) => {
                serverRes = response.data;
                console.log(serverRes);
            }, (error) => {
            });
        return serverRes;
    }

    async EditAddress(data: AddressModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        const datatoUpdate: AddressModel = {
            name: data.name,
            contact_country_code: data.contact_country_code,
            contact_phone: data.contact_phone,
            country_id: data.country_id,
            building_name: data.building_name,
            street: data.street,
            state_id: data.state_id,
            floor: data.floor,
            zip_code: data.zip_code,
            city_id: data.city_id,
            is_default: data.is_default,
        }
        await http.put(AddressController + apiversion + "/" + data.id + "?uuid=" + data.uuid, queryString.stringify(datatoUpdate), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }

    async AddCard(data: CardModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(CardController + apiversion, data)
            .then((response: any) => {
                serverRes = response.data;
                console.log(serverRes);
            }, (error) => {
            });
        return serverRes;
    }


    async getUserCards(): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.get(CardController + apiversion + "/list?page=1&per_page=100&active=1")
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }
}

/* companyName, taxId, industry, syndicateId, license */