import { LatestProductSectionStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductModel } from '@/models/index';
import { ProductItemComponent } from '@/components/product/ProductItemComponent';
import { useEffect } from 'react';
import { ProductService } from '@/services/index';


export function LatestProductSection() {

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
        <LatestProductSectionStyle>
            <SectionTitleStyle >Latest Products</SectionTitleStyle>
            {
                productList.length > 0 ?
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={"auto"}
                    >
                        {
                            productList.map((value: ProductModel, index: number) => <SwiperSlide key={value.id} data-wow-delay={index * 0.3 + "s"} ><ProductItemComponent product={value} /></SwiperSlide>)
                        }
                    </Swiper> : <></>
            }

        </LatestProductSectionStyle>
    )
}

