import { UserModel, ImageModel, SelectModel, OptionModel } from '@/models/index';
export interface ProductModel {
    barcodes?: BarcodeModel[],
    brand?: BrandModel,
    brand_id?: number,
    categories?: CategoryModel[],
    description: string,
    id: number,
    images?: ImageModel[],
    is_approved: boolean,
    name: string,
    rating: RatingModel,
    supplier: ProductSupplier,
    supplier_id: number,
    tags?: Tags[],
    uuid: string,
    variants: VariantModel[],
}


interface BarcodeModel {
    barcode: string,
    id: number,
    product_id: number,
    uuid: string,
}

export interface BrandModel {
    id: number,
    image: ImageModel,
    product_id: number,
    name: string,
    sort_order: number,
    uuid: string,
}

export interface CategoryModel {
    id: number,
    image: ImageModel,
    is_published: boolean,
    name: string,
    parent_id?: number,
    sort_order: number,
    uuid: string,
}

interface Tags {
    id: number,
    product_id: number,
    tag: string,
    uuid: string,
}

export interface VariantModel {
    color: ColorModel,
    color_id: number,
    discounted_price: number,
    id: number,
    pack?: any,
    price: number,
    product_id: number,
    quantity: number,
    size_value: string,
    unit_size: SizeModel,
    unit_size_id: number,
    uuid: string,
    variant_prices: VariantPriceModel[]
}

interface VariantPriceModel {
    discounted_price: number,
    from_quantity: number,
    id: number,
    price: number,
    product_variant_id: number,
    to_quantity: number,
    uuid: string
}
interface RatingModel {
    avg_rating: number,
    id: number,
    nb_star1: number,
    nb_star2: number,
    nb_star3: number,
    nb_star4: number,
    nb_star5: number,
    nb_stars: number,
    product_id: number,
    uuid: string,
}

interface ProductSupplier {
    company_name: string,
    id: number,
    is_published: true,
    parent_id?: number,
    role_id?: number,
    tax_id: string,
    user: UserModel,
    uuid: string,
}

export interface ColorModel {
    hex_color: string,
    hex_color2: string,
    id: number,
    name: string,
    sort_order: number,
    uuid: string,
}

export interface SizeModel {
    id: number,
    name: string,
    sort_order: number,
    uuid: string,
}
export interface FilterProductModel {
    page: number,
    per_page?: number,
    sort?: string,
    descending: boolean,
    search?: string,
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




export interface FilterDataModel {
    catgories: SelectModel[],
    brands: SelectModel[],
    colors: OptionModel[],
    sizes: OptionModel[],
}


export interface AvailableColorSizes {
    color_ids: number[] | any,
    size_ids: number[] | string[] | any,
}