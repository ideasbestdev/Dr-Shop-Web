import { CustomQuantityStyle } from '@/styledcomponents/index'
import React from 'react'

interface Props {
    quantity: number,
    setQuantity: any
}

export function CustomQuantity({ quantity, setQuantity }: Props) {
    function changeQuantity(value: number) {
        if (quantity + value < 0) return;
        setQuantity(quantity + value);
    }

    return (
        <CustomQuantityStyle>
            <a onClick={() => changeQuantity(-1)}>-</a>
            <div>{quantity}</div>
            {
                //<input type={"number"} value={quantity} onChange={(e) => setQuantity(e.target.value)} />   
            }
            <a onClick={() => changeQuantity(1)}>+</a>
        </CustomQuantityStyle>
    )
}