import { CategorySectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { CategoryModel } from '@/models/index';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


interface Prop {
    data?: CategoryModel[]
}

export function CategorySection({ data }: Prop) {
    console.log("cat", data)
    return (
        <CategorySectionStyle>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>All Categories</SectionTitleStyle>
            </SectionTitleWithLinkStyle>
            <Swiper spaceBetween={16} slidesPerView={"auto"} centerInsufficientSlides={true}>
                {
                    data && data?.length > 0 ?
                        data.map(item =>
                            <SwiperSlide key={item.id}>
                                <Link href={"/products?category_ids[0]=" + item.id}>
                                    <a>
                                        <div className='image_container'>
                                            <Image layout='fill' src={`${item?.image?.base_url}/${item?.image?.webp_image}`} alt={item?.name} />
                                        </div>
                                        <h3>{item.name}</h3>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        )
                        : null
                }
            </Swiper>
            {/* <ul>
                {
                    data && data?.length > 0 ?
                        data.map(item =>
                            <li>
                                <Link href={"/products?category_ids[0]=" + item.id}>
                                    <a>
                                        <div className='image_container'>
                                            <Image layout='fill' src={`${item?.image?.base_url}/${item?.image?.webp_image}`} alt={item?.name} />
                                        </div>
                                        <h3>{item.name}</h3>
                                    </a>
                                </Link>
                            </li>
                        )
                        : null
                }
            </ul> */}
        </CategorySectionStyle>
    )
}
