import { CartProductsModel } from '@/models/CartModel';
import React from 'react'
import useCollapse from 'react-collapsed'
import { ArrowDownIcon } from '@/components/icons';

interface Props {
    products: CartProductsModel[],
    name: string,
}
export function CartProduct({ name, products }: Props) {
    // const productPrice = value.discounted_price && value.discounted_price > 0 ? value.discounted_price : value.price ? value.price : 0;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            <h3 {...getToggleProps()} className={`${isExpanded ? "isExpanded" : ""}`}>{name}<span><ArrowDownIcon /></span></h3>
            <ul {...getCollapseProps()} className="collapseList">
                {products?.map((value: CartProductsModel, index: number) => {
                    const productPrice = value.discounted_price && value.discounted_price > 0 ? value.discounted_price : value.price ? value.price : 0;
                    return (<li key={index}>
                        <div className='order_product'>
                            <div className='title'>
                                <h4>{value.quantity}*{value.product?.name}</h4>
                            </div>
                            <div>{productPrice.toFixed(2)}USD</div>
                        </div>
                    </li>)

                }
                )}
            </ul>
        </>
    )
}