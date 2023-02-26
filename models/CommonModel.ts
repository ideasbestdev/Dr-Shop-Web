export interface ImageModel {
    id?: number,
    base_url?: string,
    origin?: string,
    thumbnail?: string,
    webp_image?: string,
    webp_thumbnail?: string,
}

export interface LonLatModel {
    type?: string,
    coordinates?: number[],
}

export interface GroupConfigModel {
    width?: number,
    height?: number,
}

export interface SelectModel {
    id: number,
    name: string,
    selected?: boolean,
}

export interface KeyValueModel {
    key?: string,
    value?: number,
}

export interface SelectModel {
    id: number,
    name: string,
    selected?: boolean,
}

export interface GroupOptionModel {
    label?: string,
    options?: OptionModel[],
}

export interface OptionModel {
    value?: string;
    label?: string;
    isParent?: boolean;

}