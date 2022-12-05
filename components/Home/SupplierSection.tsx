import { SectionTitleStyle, SupplierSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { AssetsImages } from '@/utils/index';
import { Swiper, SwiperSlide } from 'swiper/react';

export function SupplierSection() {
    return (
        <SupplierSectionStyle>
            <SectionTitleStyle className='wow slideInUp'>Suppliers</SectionTitleStyle>
            <Swiper
                spaceBetween={55}
                slidesPerView={"auto"}
            >
                <SwiperSlide className='wow slideInUp'>
                    <Image src={AssetsImages.pfizer} alt="pfizer" />
                </SwiperSlide>
                <SwiperSlide data-wow-delay="0.3s" className='wow slideInUp'>
                    <Image src={AssetsImages.astrazeneca} alt="astrazeneca" />
                </SwiperSlide>
                <SwiperSlide data-wow-delay="0.6s" className='wow slideInUp'>
                    <Image src={AssetsImages.abbott} alt="abbott" />
                </SwiperSlide>
                <SwiperSlide data-wow-delay="0.9s" className='wow slideInUp'>
                    <Image src={AssetsImages.essilor} alt="essilor" />
                </SwiperSlide>
                <SwiperSlide data-wow-delay="1.2s" className='wow slideInUp'>
                    <Image src={AssetsImages.novartis} alt="novartis" />
                </SwiperSlide>
            </Swiper>
        </SupplierSectionStyle>
    )
}
