import { LinkButtonStyle, TitleStyle } from "@/styledcomponents/index";
import React from "react";
import { AssetsImages } from '@/utils/index';
import Image from 'next/image';
import { BannerSectionStyle } from './../../styledcomponents/home/BannerSectionStyle';

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