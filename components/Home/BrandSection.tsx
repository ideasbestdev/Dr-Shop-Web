import { BrandSectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from "@/styledcomponents/index";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/index';
import { BrandModel } from '@/models/index';
import { useState, useEffect } from 'react';
import { ComboService } from '@/services/index';


interface Prop {
    data?: BrandModel[]
}

export function BrandSection({ data }: Prop) {
    const [brands, setBrands] = useState<BrandModel[]>([]);
    useEffect(function () {
        async function getBrands() {
            const comboService = new ComboService();
            const response = await comboService.GetAllBrand();
            setBrands(response);
        }
        if (data) {
            setBrands(data)
        } else {
            getBrands();
        }
    }, [])
    return (
        <BrandSectionStyle>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>Brands</SectionTitleStyle>
            </SectionTitleWithLinkStyle>
            <Swiper spaceBetween={16} slidesPerView={3} centerInsufficientSlides={true}>
                {
                    brands && brands.length > 0 ?
                        brands.map((item, index) => <SwiperSlide key={index}>
                            <Link href={"/products?brand_ids[0]=" + item.id}>
                                <a className="image_container">
                                    <Image width={200} height={200} src={`${item?.image?.base_url}/${item?.image?.webp_image}`} alt={item?.name} />
                                </a>
                            </Link>
                        </SwiperSlide>)
                        : null
                }
            </Swiper>
        </BrandSectionStyle>
    )
}
