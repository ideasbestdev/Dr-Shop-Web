import { ProductListSectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle, SwiperProductListSectionStyle, TitleStyle } from '@/styledcomponents/index'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductModel } from '@/models/index';
import { ProductItemComponent } from '@/components/product/ProductItemComponent';
import { useEffect } from 'react';
import { ProductService } from '@/services/index';
import Link from 'next/link';


export function NewArrivalProductSection() {

    const [productList, setProductList] = useState<ProductModel[]>([])
    useEffect(() => {
        async function getProducts() {
            const productService: ProductService = new ProductService();
            const response = await productService.getProducts(1, 10);
            if (response.success) {
                setProductList(response.data);
            }
        }
        getProducts();
    }, [])


    return (
        <SwiperProductListSectionStyle>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>New Arrival</SectionTitleStyle>
                <Link href={""}><a>See All</a></Link>
            </SectionTitleWithLinkStyle>
            {
                productList.length > 0 ?
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={"auto"}
                    >
                        {
                            productList.map((value: ProductModel, index: number) => <SwiperSlide key={value.id} ><ProductItemComponent product={value} /></SwiperSlide>)
                        }
                    </Swiper> : <></>
            }

        </SwiperProductListSectionStyle>
    )
}

