import { ProductModel } from '@/models/ProductModel'
import { LandscapeProductItemStyle, ProductItemStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AddProductIcon, CartIcon, HeartIcon } from '../icons'
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings'
import { useRouter } from 'next/router'
import { ProductService } from '@/services/index';
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalState, setCartTotal } from '@/statemangment/slice/globalSlice'
import { AlertStateModel } from '@/models/AlertStateModel'
import { INFO_ALERT_TYPE } from '@/utils/constants'
import { setAlert } from '@/statemangment/slice/alertSlice'
import { ServerResModel } from '@/models/ServerResModel'

interface Props {
    product: ProductModel
}

export function LandscapeProductItemComponent({ product }: Props) {
    const route = useRouter();
    const prodcutService = new ProductService();
    const { firstRequest } = useSelector(getGlobalState);
    const [addCart, setAddedCart] = useState<boolean>(false);
    const dispatch = useDispatch();
    async function getCartTotal() {
        const productService: ProductService = new ProductService();
        const response: ServerResModel = await productService.getCart();
        if (response.success) {
            dispatch(setCartTotal(response.data.cart_products.length));
        }
    }
    function handleFav() {
        prodcutService.addRemoveFavProduct(product.id, product.favorite);
    }

    function handleCart() {
        prodcutService.addToCart(product, 1, (firstRequest.user != null && firstRequest.user != undefined)).then(function () {
            setAddedCart(true);
            setTimeout(function () {
                setAddedCart(false)
            }, 2000)
            const customAlert: AlertStateModel = {
                message: "Product has been added to your cart",
                type: INFO_ALERT_TYPE,
                identifier: "1234",
            }
            getCartTotal();
            dispatch(setAlert(customAlert));
        });

    }

    //route.push(`/products/${product.id}`)
    return (
        <LandscapeProductItemStyle onClick={() => { route.push(`/products/${product.id}`) }}>
            <section className='left_section'>
                <div className='image_container'>
                    <Image width={220} height={220} src={product.image ? `${product.image?.base_url}/${product.image?.webp_image}` : ""} alt={product.name} />
                </div>
            </section>
            <section className='right_section'>
                {
                    addCart ?
                        <i className='cart_icon fa fa-check-circle'></i>

                        :
                        <i className='cart_icon'><span onClick={(e) => { e.stopPropagation(); handleCart() }}><CartIcon /></span></i>

                }
                {/* <i className='cart_icon'><CartIcon /></i> */}
                <div className='title_Fav'>
                    <h2>{product.name}</h2>
                </div>
                <div className='ribbon offer_ribbon'>
                    25% OFF
                </div>
                <h3>
                    {product.discounted_price != undefined && product.discounted_price > 0 ?
                        <>
                            <div className='number_container'>
                                <sup className='curreny'>$ </sup><span className='whole_number'>{product.discounted_price?.toFixed(2).split(".")[0]}</span><sup className='decimal_number'>{product.discounted_price?.toFixed(2).split(".")[1]}</sup>
                            </div>
                            <del>$ <span>{product.price?.toFixed(2)}</span></del>
                        </> :
                        <>
                            <div className='number_container'>
                                <sup className='curreny'>$ </sup><span className='whole_number'>{product.price?.toFixed(2).split(".")[0]}</span><sup className='decimal_number'>{product.price?.toFixed(2).split(".")[1]}</sup>
                            </div>
                        </>
                    }
                </h3>
            </section>
        </LandscapeProductItemStyle>
    )
}