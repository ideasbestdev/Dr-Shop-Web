import { ProductModel, UserModel } from '@/models/index';

export interface ServerResModel {
    data: UserResModel | ProductModel | any;
    success: boolean;
    links?: PageLinksModel[],
    total?: number,
    to?: number,
    from?: number,
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


