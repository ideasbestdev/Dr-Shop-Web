import { ProductModel } from '@/models/ProductModel'
import { LandscapeProductItemStyle, ProductItemStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AddProductIcon, CartIcon, HeartIcon } from '../icons'
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings'
import { useRouter } from 'next/router'
import { ProductService } from '@/services/index';
import { useSelector } from 'react-redux'
import { getGlobalState } from '@/statemangment/slice/globalSlice'

interface Props {
    product: ProductModel
}

export function LandscapeProductItemComponent({ product }: Props) {
    const route = useRouter();
    const prodcutService = new ProductService();
    const { firstRequest } = useSelector(getGlobalState);

    function handleFav() {
        prodcutService.addRemoveFavProduct(product.id, product.favorite);
    }

    function handleCart() {
        prodcutService.addToCart(product, 1, (firstRequest.user != null && firstRequest.user != undefined));

    }

    //route.push(`/products/${product.id}`)
    return (
        <LandscapeProductItemStyle onClick={() => { }}>
            <section className='left_section'>
                <div className='image_container'>
                    <Image width={220} height={220} src={product.image ? `${product.image?.base_url}/${product.image?.webp_image}` : ""} alt={product.name} />
                </div>
            </section>
            <section className='right_section'>
                <i className='cart_icon'><CartIcon /></i>
                <div className='title_Fav'>
                    <h2>{product.name}</h2>
                </div>
                <div className='ribbon offer_ribbon'>
                    25% OFF
                </div>
                <h3>
                    {product.discounted_price != undefined && product.discounted_price > 0 ?
                        <>
                            {product.discounted_price?.toFixed(2)} USD
                            <del><span>{product.price?.toFixed(2)}</span> USD</del>
                        </> :
                        <>{product.price?.toFixed(2)} USD</>
                    }
                </h3>
            </section>
        </LandscapeProductItemStyle>
    )
}