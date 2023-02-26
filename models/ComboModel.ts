import { GroupConfigModel, ImageModel, LonLatModel } from '@/models/index';

export interface BrandModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
    image?: ImageModel,
}

export interface CategoryModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    is_published?: boolean,
    is_special?: boolean,
    created_at?: string,
    image?: ImageModel,
    sub_categories?: SubCategoryModel[],
}


export interface SubCategoryModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    is_published?: boolean,
    is_special?: boolean,
    created_at?: string,
    image?: ImageModel,
}

export interface NationalityModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
}


export interface StateModel {
    id?: number,
    uuid?: string,
    name?: string,
    country_id?: number,
    tax?: number,
    latitude?: number,
    longitude?: number,
    lonlat?: LonLatModel,
    sort_order?: number,
    created_at?: string,
}

export interface CityModel {
    id?: number,
    uuid?: string,
    name?: string,
    state_id?: number,
    latitude?: number,
    longitude?: number,
    lonlat?: LonLatModel,
    sort_order?: number,
    created_at?: string,
}

export interface TimezoneModel {
    id?: number,
    uuid?: string,
    name?: string,
    country_code?: string,
    offset?: string,
    offset1?: number,
    offset2?: number,
    sort_order?: number,
    created_at?: string,
}

export interface LocaleModel {
    id?: number,
    uuid?: string,
    name?: string,
    code?: string,
    is_rtl?: boolean,
    is_published?: boolean,
    sort_order?: number,
    created_at?: string,
}


export interface CountryModel {
    id?: number,
    uuid?: string,
    name?: string,
    iso2?: string,
    iso3?: string,
    phone_code?: string,
    capital?: string,
    currency?: string,
    currency_name?: string,
    currency_symbol?: string,
    native?: string,
    region?: string,
    sub_region?: string,
    latitude?: number,
    longitude?: number,
    lonlat?: LonLatModel,
    active?: boolean,
    sort_order?: number,
    created_at?: string,
}

export interface CurrencyModel {
    id?: number,
    uuid?: string,
    name?: string,
    currency?: string,
    symbol?: string,
    rate?: number,
    active?: boolean,
    is_default?: boolean,
    sort_order?: number,
    created_at?: string,
}

export interface ColorCategoryModel {
    id?: number,
    uuid?: string,
    name?: string,
    hex_color?: string,
    hex_color2?: string,
    sort_order?: number,
    created_at?: string,
    colors?: ColorModel[],
}

export interface ColorModel {
    id?: number,
    uuid?: string,
    name?: string,
    color_category_id?: number,
    hex_color?: string,
    hex_color2?: string,
    sort_order?: number,
    created_at?: string,
}

export interface UnitCategoryModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
}

export interface UnitSizeModel {
    id?: number,
    uuid?: string,
    name?: string,
    unit_category_id?: number,
    sort_order?: number,
    created_at?: string,
}

export interface RibbonModel {
    id?: number,
    uuid?: string,
    name?: string,
    hex_color?: string,
    hex_color2?: string,
    created_at?: string,
}


export interface MediaGroupModel {
    id?: number,
    uuid?: string,
    name?: string,
    media_key?: string,
    group_config?: GroupConfigModel,
    created_at?: string,
}

export interface ClinicTypeModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
}

export interface IndustryModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
}

export interface VariantionModel {
    id?: number,
    uuid?: string,
    name?: string,
    value?: string,
    sort_order?: number,
    created_at?: string,
}

export interface VariantModel {
    id?: number,
    uuid?: string,
    name?: string,
    sort_order?: number,
    created_at?: string,
    variations?: VariantModel[],
}
