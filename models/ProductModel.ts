import { UserModel, ImageModel, SelectModel, PageLinksModel, CategoryModel, AccountModel, VariantModel, KeyValueModel, CartProductsModel, AddressModel, CardModel } from '@/models/index';
export interface ProductModel {
    id?: number,
    uuid?: string,
    name?: string,
    description?: string,
    supplier_id?: number,
    brand_id?: number,
    ribbon_id?: number,
    price?: number,
    discounted_price?: number,
    quantity?: number,
    quantity_threshold?: number,
    status?: number,
    nb_views?: number,
    video_url?: string,
    created_at?: string,
    for_doctor_only?: boolean,
    related?: ProductModel[],
    supplier?: UserModel[],
    barcodes?: string[],
    tags?: string[],
    rating?: RatingModel,
    attributes?: AttributeModel[],
    product_categories?: CategoryModel[],
    prices?: PriceModel[],
    reviews?: ReviewModel[],
    is_favorite?: boolean,
    review?: boolean,
    favorite?: boolean,
    images?: ImageModel[],
    image?: ImageModel,
    supplier_name?: string,
    brand_name?: string,
    has_review?: boolean,
    variants?: VariantModel[],
}


interface ReviewModel {
    id?: number,
    uuid?: string,
    rating?: number,
    review?: string,
    account?: AccountModel,
}

export interface PriceModel {
    id?: number,
    quantity?: number,
    price?: number,
    discounted_price?: number,
    created_at?: string,
    price_range?: PriceRangeModel[],
    variations?: number[],

}

export interface PriceRangeModel {
    from_quantity?: number,
    to_quantity?: number,
    price?: number,
    discounted_price?: number,
    created_at?: string,
}
interface AttributeModel {
    title?: string,
    value?: string,
}
interface RatingModel {
    avg_rating?: number,
    nb_star1?: number,
    nb_star2?: number,
    nb_star3?: number,
    nb_star4?: number,
    nb_star5?: number,
    nb_stars?: number,
    created_at?: string,
}

export interface RecommendedVariantModel {
    keyValue?: KeyValueModel[],

}

export interface FilterProductModel {
    page?: number,
    per_page?: number,
    sort_by?: number,
    descending?: boolean,
    search?: string,
    min_price?: number,
    max_price?: number,
    name?: string,
    description?: string,
    approved?: boolean,
    supplier?: string,
    supplier_id?: number,
    brand?: string,
    brand_ids?: number[],
    my_favorites?: boolean,
    has_favorites?: boolean,
    my_review?: boolean,
    has_reviewers?: boolean,
    category_ids?: number[],
    category?: string,
    tag?: string,
    barcode?: string,
    color_ids?: number[],
    unit_size_ids?: number[],
}

export interface FilterState {
    productFilter: FilterProductModel,
}

export interface AvailableColorSizes {
    color_ids: number[] | any,
    size_ids: number[] | string[] | any,
    firstTime: boolean,
}

export interface ProductDetailPageModel {
    productList: ProductModel[],
    linksState: PageLinksModel[],
    total: number,
    to: number,
    from: number,
    loading: boolean,
}


export interface ProductSupplierModel {
    [key: string]: CartProductsModel[];
}


export interface OrderDetailModel {
    id?: number,
    address?: AddressModel,
    payment_method?: CardModel,
    order_products?: CartProductsModel[],
    final_amount?: number,
    delivery_charge?: number,
    status?: number,
    tax_amount?: number,
}