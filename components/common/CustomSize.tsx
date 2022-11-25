import React from 'react'
import { CustomSizeStyle } from '@/styledcomponents/index'
import { OptionModel } from '@/models/OptionModel';

interface Props {
    sizes: OptionModel[],
    setSizes: any,
    selectedColor?: string
}

export function CustomSize({ sizes, setSizes, selectedColor }: Props) {

    function handleClick(index: number) {
        sizes[index].selected = !sizes[index].selected;

        const newSizes = Object.assign([], sizes);

        setSizes(newSizes);
    }

    return (
        <>
            {
                sizes.map((value: OptionModel, index: number) => <CustomSizeStyle selectedColor={selectedColor} key={index} selected={value.selected} onClick={() => handleClick(index)}>{value.value}</CustomSizeStyle>)
            }
        </>
    )
}