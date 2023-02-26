import { CustomQuantityStyle } from '@/styledcomponents/index'
import Image from 'next/image';
import React from 'react'
import { AssetsImages } from '@/utils/index';
import { stringIsEmptyOrNull } from '@/helpers/index';

interface Props {
    quantity: number,
    setQuantity: any,
}

export function CustomQuantity({ quantity, setQuantity }: Props) {
    function changeQuantity(value: number) {
        if (value > 0) {
            setQuantity(1);
            return;
        }
        if (quantity + Number(value) < 0) return;
        setQuantity(quantity + Number(value));
    }

    return (
        <CustomQuantityStyle>
            <a onClick={() => changeQuantity(-1)}><Image src={""} alt="minus_icon" /></a>
            <input type={"number"} onFocus={(e) => e.target.select()} min={0} value={quantity} onChange={(e) => setQuantity(stringIsEmptyOrNull(e.target.value) ? 0 : Number(e.target.value))} />
            {
                //AssetsImages.minus_icon
                //            <div>{quantity}</div>
                //AssetsImages.plus_icon
            }
            <a onClick={() => changeQuantity(1)}><Image src={""} alt="plus_icon" /></a>
        </CustomQuantityStyle>
    )
}