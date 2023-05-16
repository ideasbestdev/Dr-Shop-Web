import { ProductModel } from '@/models/ProductModel'
import { ProductItemStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React, { useState } from 'react'
import { AddProductIcon, CartIcon, HeartIcon } from '../icons'
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings'
import { useRouter } from 'next/router'
import { ProductService } from '@/services/index';
import { useDispatch, useSelector } from 'react-redux'
import { getGlobalState } from '@/statemangment/slice/globalSlice'
import { AlertStateModel } from '@/models/AlertStateModel'
import { INFO_ALERT_TYPE } from '@/utils/constants'
import { setAlert } from '@/statemangment/slice/alertSlice'

interface Props {
    product: ProductModel
}

export function ProductItemComponent({ product }: Props) {
    const route = useRouter();
    const prodcutService = new ProductService();
    const { firstRequest } = useSelector(getGlobalState);
    const [productItem, setProductItem] = useState<ProductModel>(product);
    const dispatch = useDispatch();

    function handleFav(e: React.MouseEvent) {
        e.stopPropagation();
        if (!firstRequest.user) return;
        prodcutService.addRemoveFavProduct(productItem.id, !productItem.is_favorite, firstRequest.user.uuid).then((response) => {
            if (!productItem.is_favorite) {
                const customAlert: AlertStateModel = {
                    message: "Product has been added to your favorite",
                    type: INFO_ALERT_TYPE,
                    identifier: "1234",
                }
                dispatch(setAlert(customAlert));
            } else {
                const customAlert: AlertStateModel = {
                    message: "Product has been removed from your favorite",
                    type: INFO_ALERT_TYPE,
                    identifier: "1234",
                }
                dispatch(setAlert(customAlert));
            }
        });
        setProductItem({ ...productItem, is_favorite: !productItem.is_favorite });
    }

    function handleCart() {
        prodcutService.addToCart(productItem, 1, (firstRequest.user != null && firstRequest.user != undefined)).then((response) => {
            const customAlert: AlertStateModel = {
                message: "Product has been added to your cart",
                type: INFO_ALERT_TYPE,
                identifier: "1234",
            }
            dispatch(setAlert(customAlert));
        });

    }


    //route.push(`/products/${product.id}`)
    return (
        <ProductItemStyle onClick={() => { route.push(`/products/${productItem.id}`) }} isFav={productItem.is_favorite && firstRequest.user != null}>
            <section className='top_section'>
                <div className='image_container'>
                    <Image width={220} height={220} src={productItem.image ? `${productItem.image?.base_url}/${productItem.image?.webp_image}` : ""} alt={productItem.name} />
                </div>
                <i className='cart_icon' onClick={(e) => { e.stopPropagation(); handleCart() }}><CartIcon /></i>
                {/* <div className='ribbon new_ribbon'>
                    new
                </div> */}
                <div className='ribbon offer_ribbon'>
                    25% OFF
                </div>
            </section>
            <section className='bottom_section'>
                <div className='title_Fav'>
                    <h2>{productItem.name}</h2>
                    <i className='fav_icon' onClick={(e) => handleFav(e)}><HeartIcon /></i>
                </div>
                <h3 className='price'>
                    {productItem.discounted_price != undefined && productItem.discounted_price > 0 ?
                        <>
                            {productItem.discounted_price?.toFixed(2)} USD
                            <del><span>{productItem.price?.toFixed(2)}</span> USD</del>
                        </> :
                        <>{productItem.price?.toFixed(2)} USD</>
                    }
                </h3>
            </section>
        </ProductItemStyle>
    )
}