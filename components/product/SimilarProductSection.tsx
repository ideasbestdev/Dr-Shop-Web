import { LatestProductSectionStyle, SectionTitleStyle, SimilarProductSectionStyle } from '@/styledcomponents/index'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductItemComponent } from './ProductItemComponent';

export function SimilarProductSection() {
    return (
        <SimilarProductSectionStyle>
            <SectionTitleStyle>Latest Products</SectionTitleStyle>
            {/* <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
            >
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItemComponent />
                </SwiperSlide>
            </Swiper> */}
        </SimilarProductSectionStyle>
    )
}