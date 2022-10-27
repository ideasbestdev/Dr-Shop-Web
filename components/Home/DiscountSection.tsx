import { DiscountSectionStyle } from '@/styledcomponents/index'
import { AssetsImages } from '@/utils/images'
import Image from 'next/image'
import React from 'react'

export function DiscountSection() {
    return (
        <DiscountSectionStyle>
            <div>
                <Image src={AssetsImages.homeDiscount} />
                <div>
                    <h1>Discount 30%</h1>
                </div>
            </div>
        </DiscountSectionStyle>
    )
}
