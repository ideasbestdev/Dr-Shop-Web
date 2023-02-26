import { CartRequestModel, FilterProductModel, ProductModel, ServerResModel, CartModel, CartProductsModel } from '@/models/index';
import http from '@/utils/axios';
import { CartController, DEVICEID_KEY_NAME, OrderController, ProductController, PRODUCT_LIST_PER_PAGE, TOKEN_KEY_NAME } from "@/utils/index";
import { convertObjectToQueryString } from '@/helpers/index';
import { CancelToken } from 'axios';
import Cookies from 'js-cookie';
import { getDeviceId } from '@/helpers/index';



export class ProductService {

    async getProducts(pageNb: number, per_page: number, isDesc: boolean = true): Promise<ServerResModel> {
        const filter: FilterProductModel = {
            page: pageNb,
            per_page: per_page,
            descending: isDesc,
        };
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.get(ProductController + "v1/list?" + convertObjectToQueryString(filter));
        serRes = response.data;
        return serRes;
    }


    async getFavProducts(): Promise<ServerResModel> {
        const filter: FilterProductModel = {
            page: 1,
            per_page: 100,
            descending: true,
            my_favorites: true,
        };
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.get(ProductController + "v1/list?" + convertObjectToQueryString(filter));
        serRes = response.data;
        return serRes;
    }

    async getQueryProducts(query: string): Promise<ServerResModel> {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };

        const response = await http.get(ProductController + "v1/list" + query);
        serRes = response.data;
        return serRes;
    }

    async getProductById(id: number): Promise<ServerResModel> {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.get(ProductController + "v1/" + id);
        serRes = response.data;
        return serRes;
    }

    async addRemoveFavProduct(product_id?: number, isFav?: boolean, uuid?: string): Promise<ServerResModel> {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        if (product_id && uuid) {
            if (isFav) {
                const response = await http.post(ProductController + "favorite/v1", { product_id });
                console.log("add", response);
            } else {
                const response = await http.post(ProductController + "favorite/v1", { product_id });
                console.log("delete", response);
            }
        }
        return serRes;
    }


    async addToCart(product?: ProductModel, quantity?: number, isAuth?: boolean): Promise<ServerResModel> {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        //  const cart_key = localStorage.getItem("cart_key");
        //  const device_id = localStorage.getItem(DEVICEID_KEY_NAME);
        const data: CartRequestModel = {
            product_id: product?.id,
            quantity: quantity,
            cart_key: isAuth ? Cookies.get(TOKEN_KEY_NAME) : getDeviceId(),
        }
        const response = await http.post(CartController + "v1/", data);
        serRes = response.data;
        return serRes;
    }

    async getCart(isAuth?: boolean) {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const cart_key = isAuth ? Cookies.get(TOKEN_KEY_NAME) : getDeviceId();
        if (cart_key) {
            const response = await http.get(CartController + "v1/?cart_key=" + cart_key);
            serRes = response.data;
        }
        return serRes;
    }

    async moveCart() {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const cartInfo: CartModel = (await this.getCart()).data;
        if (cartInfo.cart_key && cartInfo.uuid && cartInfo.id) {
            const response = await http.post(CartController + "v1/" + cartInfo.id + "/add-user?cart_key=" + cartInfo.cart_key + "&cart_uuid=" + cartInfo.uuid);
        }
        return serRes;
    }

    async updateCart(quantity: number, cart_uuid: string, cart_product: CartProductsModel) {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.put(CartController + "v1/" + cart_product.cart_id + "/" + cart_product.id + "/quantity?quantity=" + quantity + "&cart_uuid=" + cart_uuid + "&cart_product_uuid=" + cart_product.uuid);
        serRes = response.data;
        return serRes;
    }


    async checkout(url: string, isAuth?: boolean) {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const cart_key = isAuth ? Cookies.get(TOKEN_KEY_NAME) : getDeviceId();
        if (cart_key) {
            const response = await http.post(CartController + "v1/checkout?cart_key=" + cart_key + url);
            serRes = response.data;
        }
        return serRes;
    }


    async createOrder(data: any) {
        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.post(OrderController + "v1", data);
        serRes = response.data;
        console.log(serRes)
        return serRes;
    }
}