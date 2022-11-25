import { UserModel } from "./UserModel";

export interface ServerResModel {
    data: UserResModel | any;
    success: boolean;
}

export interface UserResModel {
    api_token: string,
    id: number,
    uuid: string,
    user: UserModel
}