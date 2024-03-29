import { CustomColorStyle, CustomQuantityStyle, CustomSizeStyle, DescriptionStyle, LinkButtonStyle, ProductDetailSectionStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import { INFO_ALERT_TYPE, colorId } from '@/utils/index';
import Image from 'next/image';
import { useState } from 'react';
import { AlertStateModel, PriceModel, ProductModel, ServerResModel, VariantionModel, VariantModel } from '@/models/index';
import { generateRandomNumber } from '@/helpers/index';
import useCounter from '../customHookes/useCounter';
import { HeartIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalState, setCartTotal } from '@/statemangment/slice/globalSlice';
import { ProductService } from '@/services/productService';
import { useRouter } from 'next/router';
import { setAlert } from '@/statemangment/slice/alertSlice';
//nzl opacity lal color
interface Props {
    productItem: ProductModel,
}

export function ProductDetailSection({ productItem }: Props) {
    const [product, setProduct] = useState(productItem);
    const [max, setMax] = useState(product.quantity);
    const { count, setCount, increment, decrement, reset } = useCounter(1, max, 1)
    const [bigSwiper, setBigSwiper] = useState<any>({});
    const [thumbsSwiper, setThumbsSwiper] = useState<any>({});
    const [thumbsActiveIndex, setThumbsActiveIndex] = useState<number>(0);
    const [expand, setExpand] = useState(true);
    const [recommendVaraitions, setRecommendVaraitions] = useState<number[]>([]);
    const [selectedVaraintIds, setselectedVaraintIds] = useState<any>({});
    const [selectedVaraint, setSelectedVaraint] = useState<PriceModel | undefined>(undefined);
    const randomString: string = generateRandomNumber(4);
    const { firstRequest } = useSelector(getGlobalState);
    const prodcutService = new ProductService();
    const dispatch = useDispatch();
    const route = useRouter();
    function selectVaraint(key?: string, id?: number) {
        if (id == undefined || key == undefined || product.prices == undefined) return;
        console.log(key, id);
        let tempVaraintIds: any = {};
        if (!recommendVaraitions?.includes(id)) {
            tempVaraintIds = {};
            tempVaraintIds[key] = id;
            setSelectedVaraint(undefined);
        } else {
            tempVaraintIds = Object.assign({}, selectedVaraintIds);
        }
        tempVaraintIds[key] = id;
        let tempVaraintIdsValues: number[] = Object.values(tempVaraintIds);
        const varaintionIds: number[] = [];
        console.log(product.prices);
        const priceFiltered: PriceModel[] = product.prices.filter(d => d.variations != undefined && tempVaraintIdsValues.every(elem => d.variations?.includes(elem)));
        priceFiltered.map((value: PriceModel) => {
            value.variations?.map((id: number) => {
                if (!varaintionIds.includes(id)) varaintionIds.push(id);
            });

        });



        setselectedVaraintIds(tempVaraintIds);
        setRecommendVaraitions(varaintionIds);
        console.log(product.variants);
        if (tempVaraintIdsValues.length == product.variants?.length) {
            const tempSelectedPrice: PriceModel | undefined = product.prices.find(d => d.variations != undefined && tempVaraintIdsValues.every(elem => d.variations?.includes(elem)));
            setSelectedVaraint(tempSelectedPrice);
        }
    }
    async function getCartTotal() {
        const productService: ProductService = new ProductService();
        const response: ServerResModel = await productService.getCart();
        if (response.success) {
            dispatch(setCartTotal(response.data.cart_products.length));
        }
    }
    function handleCart() {
        let tempVaraintIdsValues: number[] = Object.values(selectedVaraintIds);
        if (tempVaraintIdsValues.length == product.variants?.length || recommendVaraitions.length == 0) {
            prodcutService.addToCart(product, count, (firstRequest.user != null && firstRequest.user != undefined), selectedVaraint?.id, route.query.cart_product_id?.toString()).then(function () {
                getCartTotal();
                const customAlert: AlertStateModel = {
                    message: "Product has been added to your cart",
                    type: INFO_ALERT_TYPE,
                    identifier: "1234",
                }
                dispatch(setAlert(customAlert));
            });
        }
    }
    function handleFav(e: React.MouseEvent) {
        e.stopPropagation();
        if (!firstRequest.user) return;
        prodcutService.addRemoveFavProduct(product.id, !product.is_favorite, firstRequest.user.uuid);
        setProduct({ ...product, is_favorite: !product.is_favorite })
    }
    return (
        <ProductDetailSectionStyle isFav={product.is_favorite && firstRequest.user != null}>
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

                    className="images-swiper"
                >
                    {
                        product.images?.map((image, index) =>
                            <SwiperSlide key={index}>
                                <div>
                                    <Image width={600} height={600} src={`${image?.base_url}/${image?.webp_image}`} alt={image.webp_image} />
                                </div>
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
                            <SwiperSlide key={index} className={`${thumbsActiveIndex == index ? 'my-swiper-slide-active' : ''}`}>
                                <div>
                                    <Image width={300} height={300} src={`${image?.base_url}/${image?.webp_image}`} alt={image.webp_thumbnail} />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div>
                <SectionTitleStyle>{product.name}</SectionTitleStyle>
                <div className='category'>{product.product_categories ? product.product_categories[0]?.name : ""}</div>
                <DescriptionStyle className='description'>
                    <h3>Description</h3>
                    <ul>
                        {product.attributes?.map((item, index) => <li key={index}>{item.value}</li>)}
                    </ul>
                </DescriptionStyle>

                {/* <div className='price'>${selectedVaraint ? selectedVaraint.price : product.price}</div> */}
                <div className='price'>
                    {selectedVaraint ?
                        selectedVaraint.discounted_price != undefined && selectedVaraint.discounted_price > 0 ?
                            <>
                                <div className='number_container'>
                                    <sup className='curreny'>$ </sup><span className='whole_number'>{selectedVaraint.discounted_price?.toFixed(2).split(".")[0]}</span><sup className='decimal_number'>{selectedVaraint.discounted_price?.toFixed(2).split(".")[1]}</sup>
                                </div>
                                <del>$ <span>{selectedVaraint.price?.toFixed(2)}</span></del>
                            </> :
                            <>
                                <div className='number_container'>
                                    <sup className='curreny'>$ </sup><span className='whole_number'>{selectedVaraint.discounted_price?.toFixed(2).split(".")[0]}</span><sup className='decimal_number'>{selectedVaraint.discounted_price?.toFixed(2).split(".")[1]}</sup>
                                </div>
                            </> :
                        product.discounted_price != undefined && product.discounted_price > 0 ?
                            <>
                                <div className='number_container'>
                                    <sup className='curreny'>$ </sup><span className='whole_number'>{product.discounted_price?.toFixed(2).split(".")[0]}</span><sup className='decimal_number'>{product.discounted_price?.toFixed(2).split(".")[1]}</sup>
                                </div>
                                <del>$ <span>{product.price?.toFixed(2)}</span> </del>
                            </> :
                            <>$ {product.price?.toFixed(2)}</>
                    }
                </div>
                <div className='variantion_container'>
                    {
                        product.variants?.map((variant: VariantModel) =>
                            <div className={`${variant.id != colorId ? "sizes" : "color_container"}`} key={`variant_${variant.id}`}>
                                <label className='label'>{variant.name}</label>
                                <>
                                    {variant.variations?.map((variation: VariantionModel) =>
                                        variant.id == colorId ?
                                            <CustomColorStyle color={variation.value} isActive={variation.id != undefined ? recommendVaraitions.length == 0 || recommendVaraitions?.includes(variation.id) : false} key={`variation_${variation.id}`} >
                                                <input checked={Object.values(selectedVaraintIds).includes(variation.id)} type={"radio"} onChange={() => selectVaraint(variant.name, variation.id)} name={`${variant.name}_${randomString}`} id={`size_${randomString}_${variation.id}`} hidden />
                                                <label htmlFor={`size_${randomString}_${variation.id}`}></label>
                                            </CustomColorStyle>
                                            :
                                            <CustomSizeStyle isActive={variation.id != undefined ? recommendVaraitions.length == 0 || recommendVaraitions?.includes(variation.id) : false} key={`variation_${variation.id}`} >
                                                <input checked={Object.values(selectedVaraintIds).includes(variation.id)} type={"radio"} onChange={() => selectVaraint(variant.name, variation.id)} name={`${variant.name}_${randomString}`} id={`size_${randomString}_${variation.id}`} hidden />
                                                <label htmlFor={`size_${randomString}_${variation.id}`}>{variation.name}</label>
                                            </CustomSizeStyle>
                                    )}
                                </>
                            </div>
                        )
                    }
                </div>
                <div className='bottom_section'>
                    <label className='label'>Quantity</label>
                    <div className='container'>
                        <div className='quantity'>
                            <CustomQuantityStyle>
                                <a onClick={decrement}>-</a>
                                <input type={"number"} onFocus={(e) => e.target.select()} min={0} value={count} />
                                <a onClick={increment}>+</a>
                            </CustomQuantityStyle>
                        </div>
                        <div className='buttons'>
                            <LinkButtonStyle onClick={handleCart}>Add to Cart</LinkButtonStyle>
                            <i onClick={(e) => handleFav(e)}><HeartIcon /></i>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailSectionStyle >
    )
}

