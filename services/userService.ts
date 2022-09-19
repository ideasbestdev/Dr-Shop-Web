import { UserRegisterModel } from '@/models/index';
import http from '@/utils/axios';
import { UserController } from "@/utils/index";

export class UserService {

    async Register(user: UserRegisterModel) {
        console.log(user);

        await http.post(UserController + "register/", user)
            .then((response) => {
            }, (error) => {

            });

    }
}