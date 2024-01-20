import { BrandModel, CurrencyModel, LocaleModel, CategoryModel, UnitSizeModel, UnitCategoryModel, ClinicTypeModel, ColorCategoryModel, ColorModel, IndustryModel, UserModel, VariantModel, VariantionModel, CountryModel, CartProductsModel, AddressModel, CardModel } from '@/models/index';

export interface AppConfigModel {
    firstRequest: FirstRequestModel,
    breadcrumb?: BreadcrumbModel,
    currentPage?: string,
    showVerificationPop?: boolean,
    selectedProducts?: CartProductsModel[],
    selectedAddress?: AddressModel,
    selectedBillingAddress?: AddressModel,
    selectedCard?: CardModel,
    cartTotal: number,
}

interface BreadcrumbModel {
    title?: string,
    link?: string
}

export interface FirstRequestModel {
    user?: UserModel | null,
    industries?: IndustryModel[],
    clinicTypes?: ClinicTypeModel[],
    categories?: CategoryModel[],
    brands?: BrandModel[],
    color_categories?: ColorCategoryModel[],
    unit_categories?: UnitCategoryModel[],
    unit_sizes?: UnitSizeModel[],
    variants?: VariantModel[],
    variations?: VariantionModel[],
    locales?: LocaleModel[],
    currencies?: CurrencyModel[],
    config?: ConfigModel[],
    sort?: SortModel[],
    filter?: FilterModel[],
    privacyPolicyUrl?: string,
    termsCondUrl?: string,
    countries?: CountryModel[],
}

export interface ConfigModel {
    id?: number,
    uuid?: string,
    name?: string,
    key?: string,
    created_at?: string,
    data?: ConfigDataModel,
}

interface ConfigDataModel {
    engine?: string,
    value?: number,
    min?: number,
    max?: number,
    name?: string,
    support_phone?: string,
    support_email?: string,
}

export interface SortModel {
    id?: number,
    name?: string,
}

interface FilterModel {
    id?: number,
    name?: string,
}