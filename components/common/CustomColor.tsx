import React, { useState } from 'react'
import { CustomColorStyle } from '@/styledcomponents/index'
import { OptionModel } from '@/models/OptionModel';

interface Props {
    colors: OptionModel[],
    setColors: any,
    selectedColor?: string,
}

export function CustomColor({ colors, setColors, selectedColor }: Props) {

    function handleClick(index: number) {
        colors[index].selected = !colors[index].selected;
        const newColors = Object.assign([], colors);
        setColors(newColors);
    }

    return (
        <>
            {
                colors.map((value: OptionModel, index: number) => <CustomColorStyle selectedColor={selectedColor} key={index} color={value.value} selected={value.selected} onClick={() => handleClick(index)}></CustomColorStyle>)
            }
        </>
    )
}