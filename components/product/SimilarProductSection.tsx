import { LatestProductSectionStyle, SectionTitleStyle, SimilarProductSectionStyle } from '@/styledcomponents/index'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductItem } from './ProductItem';

export function SimilarProductSection() {
    return (
        <SimilarProductSectionStyle>
            <SectionTitleStyle>Latest Products</SectionTitleStyle>
            <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
            >
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </Swiper>
        </SimilarProductSectionStyle>
    )
}