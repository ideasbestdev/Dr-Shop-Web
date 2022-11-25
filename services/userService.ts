import { ServerResModel, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorUserController } from "@/utils/index";
import { UAParser } from 'ua-parser-js';
import { getDeviceId } from '@/helpers/index';



export class UserService {

    async Register(user: UserModel): Promise<ServerResModel> {
        delete user.confirmPassword;
        const parser = new UAParser();
        parser.setUA(navigator.userAgent);
        user.device_id = getDeviceId();
        user.os_type = parser.getOS().name;
        user.os_version = parser.getOS().version;
        localStorage.setItem("hasImage", "true");
        user.phone = user.phone?.split(" ").join("");
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.post(DoctorUserController + "v1/register", user)
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });

        return serverRes;
    }

    verifcate(url: string) {
        http.get(url).then((response: any) => {
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
        await http.post(DoctorUserController + "v1/login?email=" + encodeURIComponent(user.email) + "&password=" + user.password + "&device_id=" + localStorage.getItem("device_id"))
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });

        return serverRes;
    }

    async getUserInfo(): Promise<ServerResModel> {
        let serverRes: ServerResModel = {
            data: {},
            success: false,
        }
        await http.get(DoctorUserController + "v1/info")
            .then((response: any) => {
                serverRes = response.data;
            }, (error) => {
            });
        return serverRes;
    }
}