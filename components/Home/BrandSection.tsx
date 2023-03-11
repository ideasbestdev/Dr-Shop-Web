import { BrandSectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from "@/styledcomponents/index";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/index';


export function BrandSection() {
    return (
        <BrandSectionStyle>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>Brands</SectionTitleStyle>
                <Link href={""}><a>See All</a></Link>
            </SectionTitleWithLinkStyle>
            <Swiper spaceBetween={16} slidesPerView={"auto"} centerInsufficientSlides={true}>
                <SwiperSlide>
                    <Link href={""}>
                        <a className="image_container">
                            <Image alt="alt" src={AssetsImages.philips} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={""}>
                        <a className="image_container">
                            <Image alt="alt" src={AssetsImages.abbott} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={""}>
                        <a className="image_container">
                            <Image alt="alt" src={AssetsImages.jhonson} />
                        </a>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={""}>
                        <a className="image_container">
                            <Image alt="alt" src={AssetsImages.medtronic} />
                        </a>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </BrandSectionStyle>
    )
}
