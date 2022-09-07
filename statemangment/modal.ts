import { UserModel } from "@/authmanger/index";

export interface AlertState {
    message: string,
    type: string | undefined,
    identifier: string,
}

export interface UserState {
    currentuser: UserModel | null;
}
