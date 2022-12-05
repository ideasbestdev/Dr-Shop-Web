import { DiscountSectionStyle } from '@/styledcomponents/index'
import { AssetsImages } from '@/utils/images'
import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function DiscountSection() {
    return (
        <DiscountSectionStyle>
            <div>
                <Image src={AssetsImages.homeDiscount} alt="homeDiscount" />
                <div data-wow-delay="0.3s" className='wow slideInLeft'>
                    <h1>Discount 30%</h1>
                </div>
            </div>
        </DiscountSectionStyle>
    )
}
