import { FilterProductModel, OptionModel, SelectModel, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorComboController } from "@/utils/index";
import { convertObjectToQueryString } from './../helpers/helpers';



export class ComboService {
    async GetAllIndustry(): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];
        await http.get(DoctorComboController + "industry/v1/all")
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }

    async GetAllBrand(): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];
        const filter: FilterProductModel = {
            page: 1,
            per_page: 7,
            descending: true,
        };
        await http.get(DoctorComboController + "brand/v1/list?" + convertObjectToQueryString(filter))
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }

    async GetAllCategory(): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];
        const filter: FilterProductModel = {
            page: 1,
            per_page: 7,
            descending: true,
        };
        await http.get(DoctorComboController + "category/v1/list?" + convertObjectToQueryString(filter))
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }

    async GetAllColor(): Promise<OptionModel[]> {
        let comboList: OptionModel[] = [];
        await http.get(DoctorComboController + "color/v1/all")
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }

    async GetAllSizes(): Promise<OptionModel[]> {
        let comboList: OptionModel[] = [];
        await http.get(DoctorComboController + "unitSize/v1/all")
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }
}