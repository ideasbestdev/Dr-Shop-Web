import { ServerRes, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorController } from "@/utils/index";
import { UAParser } from 'ua-parser-js';
import { getDeviceId } from '@/helpers/index';



export class UserService {


    async Register(user: UserModel): Promise<ServerRes> {
        delete user.confirmPassword;
        const parser = new UAParser();
        parser.setUA(navigator.userAgent);
        user.device_id = getDeviceId();
        user.syndicate_id = "1234567";
        user.os_type = parser.getOS().name;
        user.os_version = parser.getOS().version;
        localStorage.setItem("hasImage", "true");
        let serverRes: ServerRes = {
            data: {},
            success: false,
        }
        /*     await http.post(DoctorController + "register", user)
                 .then((response: any) => {
                     serverRes = response.data;
                 }, (error) => {
                 });
     */
        return serverRes;
    }

    verifcate(url: string) {

        http.get(url).then((response: any) => {
            console.log(response);
        }, (error) => {
        });
    }

    async Login(user: UserModel) {
        await http.post(DoctorController + "login?email=" + user.email + "&password=" + user.password + "&device_id=" + localStorage.getItem("device_id"))
            .then((response: any) => {
                console.log("login", response);
                // serverRes = response.data;
            }, (error) => {
            });

        //  return serverRes;
    }
}