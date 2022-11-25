import { ProductItemListStyle } from '@/styledcomponents/index'
import { AssetsImages } from '@/utils/images'
import Image from 'next/image'
import React from 'react'
import { AddProductIcon, RatingIcon } from '../icons'

export function ProductItem() {
    return (
        <ProductItemListStyle>
            <div>
                <Image src={AssetsImages.protexProduct} />
                <i><AddProductIcon /></i>
            </div>
            <div>
                <ul>
                    <li>
                        <RatingIcon />
                    </li>
                    <li>
                        <RatingIcon />
                    </li>
                    <li>
                        <RatingIcon />
                    </li>
                    <li>
                        <RatingIcon />
                    </li>
                    <li>
                        <RatingIcon />
                    </li>
                </ul>
                <h2>Anti bacterial sanitizor</h2>
                <h3>$20</h3>
            </div>
        </ProductItemListStyle>
    )
}