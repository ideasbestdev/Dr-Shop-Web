import { BannerSectionStyle, DescriptionStyle, LinkButtonStyle, TitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React from 'react'
import { AssetsImages, PageUrls } from '@/utils/index';
import Image from 'next/image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function BannerSection() {
    return (
        <BannerSectionStyle>
            <section className='content'>
                <TitleStyle>Now You Can Have Your DOWNLOAD APP Done Safely</TitleStyle>
                <LinkButtonStyle>
                    DOWNLOAD APP
                </LinkButtonStyle>
            </section>
            <div className='image_container'>
                <Image src={AssetsImages.homeBanner} alt="homeBanner" />
            </div>
        </BannerSectionStyle>
    )
}