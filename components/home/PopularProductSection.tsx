import { ProductListSectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle, SwiperProductListSectionStyle, TitleStyle } from '@/styledcomponents/index'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductModel } from '@/models/index';
import { ProductItemComponent } from '@/components/product/ProductItemComponent';
import { useEffect } from 'react';
import { ProductService } from '@/services/index';
import Link from 'next/link';



interface Prop {
    data?: ProductModel[]
}

export function PopularProductSection({ data }: Prop) {

    const [productList, setProductList] = useState<ProductModel[] | undefined>(data);
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

    console.log("product", productList);

    return (
        <SwiperProductListSectionStyle className='home_margin'>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>Popular Products</SectionTitleStyle>
                {/* <Link href={""}><a>See All</a></Link> */}
            </SectionTitleWithLinkStyle>
            {
                productList && productList.length > 0 ?
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

