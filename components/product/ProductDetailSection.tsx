import { ButtonStyle, DescriptionStyle, ExpandedListStyle, LinkButtonStyle, ProductDetailSectionStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { AssetsImages } from '@/utils/index';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Pagination } from 'swiper';
import { AvailableColorSizes, OptionModel, ProductModel, VariantModel } from '@/models/index';
import { CustomColor, CustomQuantity, CustomRating, CustomSize } from '@/components/common';
import StarRatings from 'react-star-ratings';
import { stringIsEmptyOrNull } from '@/helpers/index';
import { useEffect } from 'react';

interface Props {
    product: ProductModel,
}

export function ProductDetailSection({ product }: Props) {

    console.log(product)

    let colors: OptionModel[] = [];
    /*  product.variants.map(e => initColors.push({
          id: e.color.id,
          name: e.color.name,
          hex_color: e.color.hex_color,
          variant: e,
      }));*/

    let sizes: OptionModel[] = [];


    /*
        product.variants.map(e => initSizes.push({
            id: e.unit_size.id,
            name: e.unit_size.name,
            variant: e,
        }));
    */
    product.variants.map(e => {
        if (!stringIsEmptyOrNull(e.size_value) && !sizes.find(d => d.name == `${e.size_value} ${e.unit_size.id}`)) {
            sizes.push({
                id: `${e.size_value}@${e.unit_size.id}`,
                name: `${e.size_value} ${e.unit_size.name}`,
            });
        }
        if (e.color_id != null && !colors.find(d => d.id == e.color_id)) {
            colors.push({
                id: e.color.id,
                name: e.color.name,
                hex_color: e.color.hex_color,
            });
        }
    });

    const [bigSwiper, setBigSwiper] = useState<any>({});
    const [thumbsSwiper, setThumbsSwiper] = useState<any>({});
    const [thumbsActiveIndex, setThumbsActiveIndex] = useState<number>(0);
    const [quantity, setQuantity] = useState(0);
    const [expand, setExpand] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
    const [selectedColors, setSelectedColors] = useState<number[] | any>([colors[0].id]);
    const [selectedSizes, setSelectedSizes] = useState<string[] | any>([sizes[0].id]);
    const [availableColorSizes, setAvailableColorSizes] = useState<AvailableColorSizes>();

    function editProductDetail(key: string, id: string | number | any) {
        console.log(key, id);
        if (key == "color") {
            setSelectedColors([id]);
            if (!availableColorSizes?.color_ids.includes(id)) {
                validateVariant(key, id);
            } else if (selectedSizes.length > 0) {
                let currentSelectedVariant = product.variants.find(d => d.color_id == id && d.unit_size_id == Number(String(selectedSizes[0]).split('@')[1]) && d.size_value == String(selectedSizes[0]).split('@')[0]);
                if (currentSelectedVariant != undefined) {
                    setSelectedVariant(currentSelectedVariant)
                }
            }
        }
        if (key == "size") {
            setSelectedSizes([id]);
            if (!availableColorSizes?.size_ids.includes(id)) {
                validateVariant(key, id);
            } else if (selectedColors.length > 0) {
                let currentSelectedVariant = product.variants.find(d => d.color_id == selectedColors[0] && d.unit_size_id == Number(String(id).split('@')[1]) && d.size_value == String(id).split('@')[0]);
                if (currentSelectedVariant != undefined) {
                    setSelectedVariant(currentSelectedVariant)
                }
            }
        }
        // setSelectedVariant(variant);

    }

    function validateVariant(key: string, id: string | number) {
        let varaintFiltered: VariantModel[] = [];
        if (key == "color") {
            varaintFiltered = product.variants.filter(d => d.color_id == id);
        }
        if (key == "size") {
            varaintFiltered = product.variants.filter(d => d.unit_size_id == Number(String(id).split('@')[1]) && d.size_value == String(id).split('@')[0]);

        }
        if (key == "color" && selectedSizes.length > 0 && !varaintFiltered.find(d => d.unit_size_id == Number(String(selectedSizes[0]).split('@')[1]) && d.size_value == String(selectedSizes[0]).split('@')[0])) {
            setSelectedSizes([]);
        }

        if (key == "size" && selectedColors.length > 0 && !varaintFiltered.find(d => d.color_id == selectedColors[0])) {
            setSelectedColors([]);
        }
        let currentAvailableColorSizes: AvailableColorSizes = availableVaraint(varaintFiltered);
        setAvailableColorSizes(currentAvailableColorSizes);
    }
    //, key: string, id: any)
    function availableVaraint(variant: VariantModel[]): AvailableColorSizes {
        let size_ids: string[] = [];
        let color_ids: number[] = [];
        // if (key == "color") {
        //     color_ids.push(id);
        //     variant.filter(d => d.color_id == id).map(e => {
        //         if (!stringIsEmptyOrNull(e.size_value) && !size_ids.find(d => d == `${e.size_value} ${e.unit_size.id}`)) {
        //             size_ids.push(`${e.size_value}@${e.unit_size.id}`);
        //         }
        //     });
        //     variant.map(e => {
        //         if (size_ids.includes(`${e.size_value}@${e.unit_size.id}`) && !color_ids.includes(e.color_id)) {
        //             color_ids.push(e.color_id);
        //         }
        //     });
        // }
        // if (key == "size") {
        //     size_ids.push(id);
        //     variant.filter(d => d.unit_size_id == Number(String(id).split('@')[1]) && d.size_value == String(id).split('@')[0]).map(e => {
        //         if (e.color_id != null && !color_ids.find(d => d == e.color_id)) {
        //             color_ids.push(e.color.id);
        //         }
        //     });
        //     variant.map(e => {
        //         if (color_ids.includes(e.color_id) && !size_ids.includes(`${e.size_value}@${e.unit_size.id}`)) {
        //             size_ids.push(`${e.size_value}@${e.unit_size.id}`);
        //         }
        //     });
        // }
        variant.map(e => {
            if (!stringIsEmptyOrNull(e.size_value) && !size_ids.find(d => d == `${e.size_value} ${e.unit_size.id}`)) {
                size_ids.push(`${e.size_value}@${e.unit_size.id}`);
            }
            if (e.color_id != null && !color_ids.find(d => d == e.color_id)) {
                color_ids.push(e.color.id);
            }
        });
        return {
            color_ids,
            size_ids,
        }
    }
    useEffect(function () {
        validateVariant("color", product.variants[0].color_id);
    }, [])
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
                    {
                        product.images?.map(image =>
                            <SwiperSlide>
                                <div><Image width={600} height={600} src={image.webp_image} /></div>
                            </SwiperSlide>
                        )
                    }
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
                    {
                        product.images?.map((image, index) =>
                            <SwiperSlide className={`${thumbsActiveIndex == index ? 'my-swiper-slide-active' : ''}`}>
                                <div><Image width={300} height={300} src={image.webp_thumbnail} /></div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div>
                <SectionTitleStyle>{product.name}</SectionTitleStyle>
                <DescriptionStyle className='description'>{product.description}</DescriptionStyle>
                <div className='star'>
                    <StarRatings
                        rating={product.rating.avg_rating}
                        starDimension="18px"
                        starSpacing="3px"
                        starEmptyColor='#F2994A66'
                        starRatedColor='#F2994A'
                        svgIconViewBox="0 0 18.105 18.105"
                        svgIconPath="M7.894.878a1.2,1.2,0,0,1,2.316,0l1.3,4.185a1.27,1.27,0,0,0,.442.635,1.183,1.183,0,0,0,.715.243h4.216a1.282,1.282,0,0,1,.716,2.3l-3.409,2.586a1.27,1.27,0,0,0-.443.635,1.325,1.325,0,0,0,0,.786l1.3,4.185a1.232,1.232,0,0,1-1.875,1.421L9.766,15.27a1.176,1.176,0,0,0-1.431,0L4.926,17.856a1.232,1.232,0,0,1-1.874-1.421l1.3-4.185a1.325,1.325,0,0,0,0-.786,1.27,1.27,0,0,0-.443-.635L.5,8.243a1.282,1.282,0,0,1,.716-2.3H5.434A1.183,1.183,0,0,0,6.149,5.7a1.27,1.27,0,0,0,.443-.635L7.895.879Z"
                    />
                </div><div className='price'>${selectedVariant.price}</div>
                <div className='sizes'><label className='label'>Size</label><CustomSize type={"radio"} editProductDetail={editProductDetail} selectedColor='#0084A7' sizes={sizes} selectedIds={selectedSizes} fromDetails={true} availableColorSizes={availableColorSizes} /></div>
                <div className='quantity'><label className='label'>Quantity</label><CustomQuantity quantity={quantity} setQuantity={setQuantity} /></div>
                <div className='colors'><label className='label'>Colors</label><CustomColor type={"radio"} editProductDetail={editProductDetail} selectedColor={"#486B92"} colors={colors} selectedIds={selectedColors} fromDetails={true} availableColorSizes={availableColorSizes} /></div>
                <ExpandedListStyle className='expand' maxHeight={expand}>
                    <a onClick={() => setExpand(!expand)}>Product Details</a>
                    <ul>
                        <li><label className='label'>Packing:</label>15</li>
                        <li><label className='label'>Brand:</label>{product.brand?.name}</li>
                        <li><label className='label'>Owner:</label>{product.supplier.company_name}</li>
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

