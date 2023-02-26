import { ProductModel, UserModel, SelectModel, FirstRequestModel, CartModel } from '@/models/index';

export interface ServerResModel {
    data: UserModel | ProductModel | FirstRequestModel | CartModel | any;
    success: boolean;
    links?: PageLinksModel[],
    total?: number,
    to?: number,
    from?: number,
    errors?: string[],
    error?: ErrorModel,
}

interface ErrorModel {
    code?: number,
    message?: string,
    reason?: string
}
export interface PageLinksModel {
    url: string | null,
    label: string,
    active: boolean,
}

export interface UserResModel {
    api_token: string,
    id: number,
    uuid: string,
    user: UserModel
}
