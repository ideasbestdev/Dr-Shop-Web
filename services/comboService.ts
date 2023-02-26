import { FilterProductModel, SelectModel, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { ComboController } from '../utils';
import { convertObjectToQueryString } from './../helpers/helpers';



export class ComboService {
    async GetAllIndustry(): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];
        await http.get(ComboController + "industry/v1/all")
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
        await http.get(ComboController + "brand/v1/list?" + convertObjectToQueryString(filter))
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
        await http.get(ComboController + "category/v1/list?" + convertObjectToQueryString(filter))
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }

    async GetAllStates(country_id: number): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];

        await http.get(ComboController + "state/v1/all?country_id=" + country_id)
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }


    async GetAllCities(state_id: number): Promise<SelectModel[]> {
        let comboList: SelectModel[] = [];

        await http.get(ComboController + "city/v1/all?state_id=" + state_id)
            .then((response: any) => {
                comboList = response.data.data;
            }, (error) => {
            });

        return comboList;
    }
}