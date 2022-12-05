import { CustomQuantityStyle } from '@/styledcomponents/index'
import Image from 'next/image';
import React from 'react'
import { AssetsImages } from '@/utils/index';
import { stringIsEmptyOrNull } from '@/helpers/index';

interface Props {
    quantity: number,
    setQuantity: any
}

export function CustomQuantity({ quantity, setQuantity }: Props) {
    function changeQuantity(value: number) {
        if (Number(quantity) == NaN && value > 0) {
            setQuantity(1);
            return;
        }
        if (Number(quantity) + Number(value) < 0) return;
        setQuantity(Number(quantity) + Number(value));
    }

    return (
        <CustomQuantityStyle>
            <a onClick={() => changeQuantity(-1)}><Image src={AssetsImages.minus_icon} /></a>
            <input type={"number"} onFocus={(e) => e.target.select()} min={0} value={quantity} onChange={(e) => setQuantity(stringIsEmptyOrNull(e.target.value) ? 0 : Number(e.target.value))} />
            {
                //            <div>{quantity}</div>

            }
            <a onClick={() => changeQuantity(1)}><Image src={AssetsImages.plus_icon} /></a>
        </CustomQuantityStyle>
    )
}