import { LatestProductSectionStyle, ProductItemListStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/images';
import Image from 'next/image';
import { AddProductIcon, RatingIcon } from '../icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function LatestProductSection() {
    return (
        <LatestProductSectionStyle>
            <SectionTitleStyle className='wow slideInUp'>Latest Products</SectionTitleStyle>
            <Swiper
                spaceBetween={50}
                slidesPerView={"auto"}
            >
                <SwiperSlide className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="0.3s" className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="0.6s" className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="0.9s" className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="1.2s" className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="1.5s" className='wow slideInUp'>
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
                <SwiperSlide data-wow-delay="1.8s" className='wow slideInUp'>
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

