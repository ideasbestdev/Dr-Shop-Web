import { BannerSectionStyle, DescriptionStyle, LinkButtonStyle, TitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React from 'react'
import { AssetsImages, PageUrls } from '@/utils/index';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function BannerSection() {
    return (
        <BannerSectionStyle>
            <div>
                <article className='wow slideInLeft'>
                    <TitleStyle>Medical Supply Marketplace</TitleStyle>
                    <DescriptionStyle>One-stop-shop for clinical offices to compare and save on medical supplies and equipment from different manufacturers. Membership free and exclusively for licensed physicians.</DescriptionStyle>
                    <Link href={PageUrls.PRODUCTS + "?page=1"} prefetch={false}>
                        <LinkButtonStyle>
                            Shop Now
                        </LinkButtonStyle>
                    </Link>
                </article>
            </div>
            <div className='wow slideInRight'>
                <Image src={AssetsImages.homeBanner} alt="homeBanner" />
            </div>
        </BannerSectionStyle>
    )
}