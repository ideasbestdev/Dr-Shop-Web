import { SectionTitleStyle, SectionTitleWithLinkStyle, SwiperProductListSectionStyle } from '@/styledcomponents/index'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductModel } from '@/models/index';
import { LandscapeProductItemComponent } from '@/components/product';
import { useEffect } from 'react';
import { ProductService } from '@/services/index';
import Link from 'next/link';

interface Prop {
    data?: ProductModel[]
}
export function HotSaleProductSection({ data }: Prop) {
    const [productList, setProductList] = useState<ProductModel[] | undefined>(data)

    useEffect(() => {
        setProductList(data);
        //     async function getProducts() {
        //         const productService: ProductService = new ProductService();
        //         const response = await productService.getProducts(1, 10);
        //         if (response.success) {
        //             setProductList(response.data);
        //         }
        //     }
        //     getProducts();
    }, [])


    return (
        <SwiperProductListSectionStyle className='home_margin bigger_active'>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>Hot Sales</SectionTitleStyle>
                {/* <Link href={""}><a>See All</a></Link> */}
            </SectionTitleWithLinkStyle>
            {
                productList && productList.length > 0 ?
                    <Swiper
                        slidesPerView={"auto"}
                        watchSlidesProgress={true}
                        centeredSlides={true}
                        initialSlide={2}
                        autoHeight={true}
                        loop={true}
                    >
                        {
                            productList.map((value: ProductModel, index: number) => <SwiperSlide key={value.id} ><LandscapeProductItemComponent product={value} /></SwiperSlide>)
                        }
                    </Swiper> : <></>
            }

        </SwiperProductListSectionStyle>
    )
}

