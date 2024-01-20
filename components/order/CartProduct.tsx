import { CartProductsModel } from '@/models/CartModel';
import React from 'react'
import useCollapse from 'react-collapsed'
import { ArrowDownIcon } from '@/components/icons';

interface Props {
    products: CartProductsModel[],
    name?: string,
}
export function CartProduct({ products, name }: Props) {
    // const productPrice = value.discounted_price && value.discounted_price > 0 ? value.discounted_price : value.price ? value.price : 0;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            {/* <h3 {...getToggleProps()} className={`${isExpanded ? "isExpanded" : ""}`}>{name}<span><ArrowDownIcon /></span></h3> */}
            {/* {...getCollapseProps()} */}
            {products?.map((value: CartProductsModel, index: number) => {
                const productPrice = value.discounted_price && value.discounted_price > 0 ? value.discounted_price : value.price ? value.price : 0;
                return (<tr key={index}>
                    <td className='title'>
                        <h4>{value.product?.name}</h4>
                    </td>
                    <td>{value.quantity}</td>
                    <td>
                        <div>$ {productPrice.toFixed(2)}</div>
                    </td>
                </tr>)

            }
            )}
        </>
    )
}