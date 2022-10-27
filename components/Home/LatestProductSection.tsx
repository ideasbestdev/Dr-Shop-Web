import { LatestProductSectionStyle, ProductItemListStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/images';
import Image from 'next/image';
import { AddProductIcon, RatingIcon } from '../icons';

export function LatestProductSection() {
    return (
        <LatestProductSectionStyle>
            <SectionTitleStyle>Latest Products</SectionTitleStyle>
            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
            >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
        </LatestProductSectionStyle>
    )
}

