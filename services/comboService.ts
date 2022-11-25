import { SelectModel, ServerRes, UserModel } from '@/models/index';
import http from '@/utils/axios';
import { DoctorIndustryComboController } from "@/utils/index";



export class ComboService {
    async GetAllIndustry(): Promise<SelectModel[]> {
        let industryList: SelectModel[] = [];
        await http.get(DoctorIndustryComboController + "v1/all")
            .then((response: any) => {
                industryList = response.data.data;
            }, (error) => {
            });

        return industryList;
    }
}