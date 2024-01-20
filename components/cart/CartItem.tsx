import { CartProductsModel } from '@/models/CartModel'
import { ProductService } from '@/services/productService'
import { CheckboxStyle, CustomQuantityStyle } from '@/styledcomponents/index'
import { colorId } from '@/utils/config'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useId, useRef } from 'react'
import useCounter from '../customHookes/useCounter'
import { CloseIcon } from '../icons'

interface Props {
    value: CartProductsModel,
    changeTotal: Function,
    index: number,
    removeAddProductChecked: Function,
}

export function CartItem({ value, changeTotal, index, removeAddProductChecked }: Props) {
    const { count, setCount, reset, min, max } = useCounter(value.quantity, value.product?.quantity, 1)
    const productPrice = value.discounted_price && value.discounted_price > 0 ? value.discounted_price : value.price ? value.price : 0;
    const [checked, setChecked] = useState(true);
    const ref = useRef<HTMLDivElement | null>(null);
    const id = useId();
    const route = useRouter();
    let productStatus = {
        value: "",
        isInStock: false,
    }
    function changeQuantity(quantity: number) {
        var currentQuantity = count + quantity;

        if (min != undefined && currentQuantity >= min && max != undefined && currentQuantity <= max) {
            setCount(currentQuantity);
            changeTotal(quantity * productPrice, currentQuantity, value);
        }
    }

    function status() {
        if (value.product_price) {
            if (value.product_price?.quantity && count > value.product_price.quantity) {
                productStatus.value = "Out Of Stock";
                value.isChecked = false;
                return;
            }
        } else {
            if (value.product?.quantity && count > value.product.quantity) {
                productStatus.value = "Out Of Stock";
                value.isChecked = false;
                return;
            }
        }
        productStatus.value = "In Stock";
        productStatus.isInStock = true;
    }
    status();
    function RemoveItem() {
        var confirmMessage = confirm("Are you sure you want to remove this product from cart?");
        if (confirmMessage) {
            changeTotal(-count * productPrice, 0, value, index);
        }
    }

    return (
        <li className={`${productStatus.isInStock ? "" : " outOfStock"}`}>
            <div ref={ref} onClick={(e) => { e.stopPropagation(); route.push("/products/" + value.product_id + "/?cart_product_id=" + value.id) }} >
                <div className='flex'>
                    <i className='close' onClick={(e) => { e.stopPropagation(); RemoveItem() }}><CloseIcon /></i>
                    <div className='image_container'>
                        <Image layout='fill' src={`${value.product?.image?.base_url}/${value.product?.image?.webp_image}`} alt={value.product?.name} />
                    </div>
                </div>
            </div>
            <div className='product_title'>
                {value.product?.name}
                {
                    value.product_price ? <div className='variations'>
                        {
                            value.product_price.variations?.map((value) =>
                                <div key={value.id} className={`${value.variant_id == colorId ? "color_variant" : ""}`} style={{ "background": value.variant_id == colorId ? value.name : "" }}>
                                    {value.variant_id == colorId ? "" : value.name}
                                </div>)

                        }
                    </div> : null
                }
            </div>
            <div className={`inStock`}>{productStatus.value}</div>
            {/* <div>$ {productPrice}</div> */}
            <div>
                <div className={`price ${value.discounted_price != undefined && value.discounted_price > 0 ? "hasDis" : ""}`}>
                    {value.discounted_price != undefined && value.discounted_price > 0 ?
                        <>
                            $ {value.discounted_price?.toFixed(2)}
                            <del>$ <span>{value.price?.toFixed(2)}</span></del>
                        </> :
                        <>$ {value.price?.toFixed(2)}</>
                    }
                </div>
            </div>
            <div>
                <div className='quantity'>
                    <CustomQuantityStyle>
                        <a onClick={(e) => { e.stopPropagation(); changeQuantity(-1); }}>-</a>
                        <input type={"number"} value={count} />
                        <a onClick={(e) => { e.stopPropagation(); changeQuantity(+1); }}>+</a>
                    </CustomQuantityStyle>
                </div>
            </div>
            <div>$ {count * productPrice}</div>
            <div className='checkbox'>
                <CheckboxStyle className='v3'>
                    <input type={"checkbox"} id={"cart_" + id} onChange={() => { removeAddProductChecked(count * productPrice, value, !value.isChecked, index); }} checked={value.isChecked} />
                    <label htmlFor={"cart_" + id}></label>
                </CheckboxStyle>
            </div>
        </li>
    )
}

// <input type={"number"}
// onChange={(e) => {
//     if (value.product?.quantity && Number(e.target.value) <= value.product.quantity) {
//         changeTotal((Number(e.target.value) - count) * productPrice);
//         setCount(Number(e.target.value));
//     }
// }}
// onFocus={(e) => e.target.select()} min={0} value={count} />