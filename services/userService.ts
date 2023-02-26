import { AddressModel, CardModel, ServerResModel, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorConfigController, AccountController, DEVICEID_KEY_NAME, AddressController, CardController } from "@/utils/index";
import { UAParser } from 'ua-parser-js';
import { getDeviceId } from '@/helpers/index';
import { AxiosError } from 'axios';



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
        await http.post(AccountController + "v1/register", user)
            .then((response: any) => {
                serverRes = response.data;
            }, (error: any) => {
                serverRes.errors = error.response?.data.error.errors;
            });

        return serverRes;
    }

    verifcate() {
        http.post(AccountController + "v1/verify/email").then((response: any) => {
            console.log(response);
        }, (error) => {
        });
    }

    async Login(user: UserModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        if (user.email == undefined) return serverRes;
        await http.post(AccountController + "v1/login?email=" + encodeURIComponent(user.email) + "&password=" + user.password + "&device_id=" + getDeviceId())
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
                serverRes.error = error.response?.data.error;
            });

        return serverRes;
    }

    async EditProfile(user: UserModel): Promise<ServerResModel> {
        user.phone = user.phone?.split(" ").join("");
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(AccountController + "v1/profile/" + user.id, user)
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
        await http.get(DoctorConfigController + "v1/all")
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
        await http.get(AddressController + "v1/list?page=1&per_page=100")
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
        await http.post(AddressController + "v1", data)
            .then((response: any) => {
                serverRes = response.data;
                console.log(serverRes);
            }, (error) => {
            });
        return serverRes;
    }


    async AddCard(data: CardModel): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        delete data.yearsMonth;
        await http.post(CardController + "v1", data)
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
        await http.get(CardController + "v1/list?page=1&per_page=100&active=1")
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }
}

/* companyName, taxId, industry, syndicateId, license */