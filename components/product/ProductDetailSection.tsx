import { ButtonStyle, DescriptionStyle, ExpandedListStyle, LinkButtonStyle, ProductDetailSectionStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/index';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Pagination } from 'swiper';
import { OptionModel } from '@/models/index';
import { CustomColor, CustomQuantity, CustomRating, CustomSize } from '@/components/common';


export function ProductDetailSection() {
    const initialSize: OptionModel[] = [
        {
            value: "XXS",
            selected: false
        },
        {
            value: "XS",
            selected: false
        },
        {
            value: "S",
            selected: false
        },
        {
            value: "M",
            selected: false
        },
        {
            value: "L",
            selected: false
        },
        {
            value: "XL",
            selected: false
        }
    ];
    const initialColor: OptionModel[] = [
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        }
    ];

    const [bigSwiper, setBigSwiper] = useState<any>({});
    const [thumbsSwiper, setThumbsSwiper] = useState<any>({});
    const [thumbsActiveIndex, setThumbsActiveIndex] = useState<number>(0);
    const [colors, setColors] = useState(initialColor);
    const [sizes, setSizes] = useState(initialSize);
    const [quantity, setQuantity] = useState(0);
    const [expand, setExpand] = useState(true);

    return (
        <ProductDetailSectionStyle>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={"auto"}
                    onActiveIndexChange={(swiper) => {
                        setThumbsActiveIndex(swiper.activeIndex);
                    }}
                    onInit={(swiper) => {
                        setBigSwiper(swiper);
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="images-swiper"
                >
                    <SwiperSlide>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={"auto"}
                    onClick={(swiper) => {
                        bigSwiper.slideTo(swiper.clickedIndex);
                        setThumbsActiveIndex(swiper.clickedIndex);
                    }}
                    onInit={(swiper) => {
                        setThumbsSwiper(swiper);
                    }}
                    className="thumbnails"
                >
                    <SwiperSlide className={`${thumbsActiveIndex == 0 ? 'my-swiper-slide-active' : ''}`}>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide className={`${thumbsActiveIndex == 1 ? 'my-swiper-slide-active' : ''}`}>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide className={`${thumbsActiveIndex == 2 ? 'my-swiper-slide-active' : ''}`}>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                    <SwiperSlide className={`${thumbsActiveIndex == 3 ? 'my-swiper-slide-active' : ''}`}>
                        <div><Image src={AssetsImages.mask} /></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <SectionTitleStyle>3m Mask Steriled with 3 layers</SectionTitleStyle>
                <DescriptionStyle className='description'>China Disposable Nonwoven PP Ce Bfe99 ISO 13485 3ply Medical Surgeon Surgical Hospital</DescriptionStyle>
                <CustomRating rate={5} />
                <div className='price'>$20</div>
                <div className='sizes'><label>Size</label><CustomSize selectedColor='#0084A7' setSizes={setSizes} sizes={sizes} /></div>
                <div className='quantity'><label>Quantity</label><CustomQuantity quantity={quantity} setQuantity={setQuantity} /></div>
                <div className='colors'><label>Colors</label><CustomColor selectedColor={"#486B92"} colors={colors} setColors={setColors} /></div>
                <ExpandedListStyle className='expand' maxHeight={expand}>
                    <a onClick={() => setExpand(!expand)}>Product Details</a>
                    <ul>
                        <li><label>Packing:</label>15</li>
                        <li><label>Brand:</label>Sup-X</li>
                        <li><label>Owner:</label>Supplier Name</li>
                    </ul>
                </ExpandedListStyle>
                <div className='buttons'>
                    <LinkButtonStyle white={true}>Add to Wishlist</LinkButtonStyle>
                    <LinkButtonStyle>Add to Cart</LinkButtonStyle>
                </div>
            </div>
        </ProductDetailSectionStyle>
    )
}

