import React from 'react'
import { CustomSizeStyle } from '@/styledcomponents/index'
import { OptionModel } from '@/models/OptionModel';
import { generateRandomNumber } from '@/helpers/index';
import { AvailableColorSizes } from '@/models/index';

interface Props {
    sizes: OptionModel[],
    selectedColor?: string,
    editFilterProduct?: Function,
    selectedIds?: number[] | string[] | any,
    editProductDetail?: Function,
    selectedVariantId?: number,
    availableColorSizes?: AvailableColorSizes,
    fromDetails?: boolean,
    type?: string,
}

export function CustomSize({ sizes, selectedColor, editFilterProduct, selectedIds, editProductDetail, selectedVariantId, type = "checkbox", fromDetails = false, availableColorSizes }: Props) {
    let randomString: string = generateRandomNumber(4);
    return (
        <>
            {
                sizes.map((value: OptionModel, index: number) =>
                    <CustomSizeStyle isActive={fromDetails ? availableColorSizes?.size_ids.includes(value.id) : true} selectedColor={selectedColor} key={index} >
                        <input checked={selectedIds ? selectedIds.includes(value.id) : selectedVariantId == value.variant?.id} onChange={(e) => editFilterProduct ? editFilterProduct("unit_size_ids", value.id, e.target.checked) : editProductDetail ? editProductDetail("size", value.id) : null} type={type} id={`size_${randomString}_${value.id}${value.variant ? "_" + value.variant.id : ""}`} hidden />
                        <label htmlFor={`size_${randomString}_${value.id}${value.variant ? "_" + value.variant.id : ""}`}>{value.name}</label>
                    </CustomSizeStyle>)
            }
        </>
    )
}