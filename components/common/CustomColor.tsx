import React, { useId, useState } from 'react'
import { CustomColorStyle } from '@/styledcomponents/index'
import { generateRandomNumber } from '@/helpers/index';
import { AvailableColorSizes, ColorCategoryModel, ColorModel } from '@/models/index';
import { useEffect } from 'react';

interface Props {
    colors: ColorCategoryModel[] | undefined,
    selectedColor?: string,
    editFilterProduct?: Function,
    selectedIds?: number[] | string[] | any,
    type?: string,
    editProductDetail?: Function,
    selectedVariantId?: number,
    availableColorSizes?: AvailableColorSizes,
    fromDetails?: boolean,
}

export function CustomColor({ colors, selectedColor, editFilterProduct, selectedIds, editProductDetail, selectedVariantId, type = "checkbox", fromDetails = false, availableColorSizes }: Props) {
    const randomString = useId();

    return (
        <>
            {
                colors?.map((parentValue: ColorCategoryModel) =>
                    parentValue.colors?.map((value: ColorModel, index: number) =>
                        <CustomColorStyle isActive={fromDetails ? availableColorSizes?.color_ids.includes(value.id) : true} selectedColor={selectedColor} key={index} color={value.hex_color}>
                            <input name={`color_${randomString}`} checked={selectedIds ? selectedIds.includes(value.id) : selectedVariantId == value?.id} type={type} id={`color_${randomString}_${value.id}`} onChange={(e) => editFilterProduct ? editFilterProduct("color_ids", value.id, e.target.checked) : editProductDetail ? editProductDetail("color", value.id) : null} hidden />
                            <label htmlFor={`color_${randomString}_${value.id}`}></label>
                        </CustomColorStyle>
                    )
                )
            }
        </>
    )
}

{/* <CustomColorStyle isActive={fromDetails ? availableColorSizes?.color_ids.includes(value.id) : true} selectedColor={selectedColor} key={index} color={value.hex_color}>
<input name={`color_${randomString}`} checked={selectedIds ? selectedIds.includes(value.id) : selectedVariantId == value.variant?.id} type={type} id={`color_${randomString}_${value.id}${value.variant ? "_" + value.variant.id : ""}`} onChange={(e) => editFilterProduct ? editFilterProduct("color_ids", value.id, e.target.checked) : editProductDetail ? editProductDetail("color", value.id) : null} hidden />
<label htmlFor={`color_${randomString}_${value.id}${value.variant ? "_" + value.variant.id : ""}`}></label>
</CustomColorStyle> */}