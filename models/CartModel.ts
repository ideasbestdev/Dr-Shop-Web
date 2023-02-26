import { ProductModel } from '@/models/index';

export interface CartRequestModel {
    cart_key?: string,
    device_id?: string,
    product_id?: number,
    quantity?: number,
}

export interface CartModel {
    cart_key?: string,
    cart_products?: CartProductsModel[],
    created_at?: string,
    discounted_amount?: number,
    id?: number,
    product_counts?: number,
    status?: number,
    total_amount?: number,
    user_id?: string,
    uuid?: string,
}

export interface CartProductsModel {
    cart_id?: number,
    created_at?: string,
    discounted_price?: number,
    id?: number,
    notes?: string,
    price?: number,
    product?: ProductModel,
    product_id?: number,
    product_price?: number,
    product_price_id?: number,
    quantity?: number,
    uuid?: string,
    isChecked?: boolean,
}

export interface CheckouttModel {
    delivery_charge?: number,
    total_amount?: number,
}



export interface OrderModel {
    cart_key?: string,
    address_id?: number,
    currency_id?: 1,
    payment_method_id?: number,
    cart_products_ids?: number[],
}