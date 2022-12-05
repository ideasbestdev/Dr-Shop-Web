import { FilterProductModel, ServerResModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorProductController, PRODUCT_LIST_PER_PAGE } from "@/utils/index";
import { convertObjectToQueryString } from '@/helpers/index';



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
        const response = await http.get(DoctorProductController + "v1/list?" + convertObjectToQueryString(filter));
        serRes = response.data;
        return serRes;
    }

    async getQueryProducts(query: string): Promise<ServerResModel> {

        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.get(DoctorProductController + "v1/list?" + query + "&per_page=" + PRODUCT_LIST_PER_PAGE);
        serRes = response.data;
        return serRes;
    }


    async getProductById(id: number): Promise<ServerResModel> {

        let serRes: ServerResModel = {
            data: {},
            success: false,
        };
        const response = await http.get(DoctorProductController + "v1/" + id + "?uuid=c9e78136-cd48-4932-8900-23c3a935eb17");
        serRes = response.data;
        return serRes;
    }
}