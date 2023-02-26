import { VariantModel } from "./ProductModel";

export interface OptionModel {
    name: string,
    selected?: boolean,
    id: number | string,
    hex_color?: string,
    variant?: VariantModel,
}