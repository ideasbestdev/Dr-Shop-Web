import { ProductModel } from '@/models/ProductModel'
import { ProductItemStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AddProductIcon } from '../icons'
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings'
import { useRouter } from 'next/router'

interface Props {
    product: ProductModel
}

export function ProductItemComponent({ product }: Props) {
    const route = useRouter();
    return (
        <ProductItemStyle onClick={() => route.push(`/products/${product.id}`)}>
            <div>
                <Image width={220} height={220} src={product.images ? product.images[0].webp_image : ""} alt={product.images ? product.images[0].webp_image : ""} />
                <i><AddProductIcon /></i>
            </div>
            <div>
                <div className='star'>
                    <StarRatings
                        rating={product.rating.avg_rating}
                        starDimension="18px"
                        starSpacing="3px"
                        starEmptyColor='#F2994A66'
                        starRatedColor='#F2994A'
                        svgIconViewBox="0 0 18.105 18.105"
                        svgIconPath="M7.894.878a1.2,1.2,0,0,1,2.316,0l1.3,4.185a1.27,1.27,0,0,0,.442.635,1.183,1.183,0,0,0,.715.243h4.216a1.282,1.282,0,0,1,.716,2.3l-3.409,2.586a1.27,1.27,0,0,0-.443.635,1.325,1.325,0,0,0,0,.786l1.3,4.185a1.232,1.232,0,0,1-1.875,1.421L9.766,15.27a1.176,1.176,0,0,0-1.431,0L4.926,17.856a1.232,1.232,0,0,1-1.874-1.421l1.3-4.185a1.325,1.325,0,0,0,0-.786,1.27,1.27,0,0,0-.443-.635L.5,8.243a1.282,1.282,0,0,1,.716-2.3H5.434A1.183,1.183,0,0,0,6.149,5.7a1.27,1.27,0,0,0,.443-.635L7.895.879Z"
                    />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.variants[0].discounted_price > 0 ? <><del>${product.variants[0].price}</del><span>${product.variants[0].discounted_price}</span></> : <span>${product.variants[0].price}</span>} </h3>
            </div>
        </ProductItemStyle>
    )
}