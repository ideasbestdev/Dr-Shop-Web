import { ButtonStyle, CheckboxStyle, ExpandedListStyle, ProductFilterSectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from '@/styledcomponents/index'
import React, { useEffect, useState } from 'react'
import { CustomColor, CustomRange } from '@/components/common';
import { BrandModel, CategoryModel, ConfigModel, FilterProductModel, ProductModel } from '@/models/index';
import { useRouter } from 'next/router';
import { priceRegex, clean } from '@/helpers/index';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { priceRangeId } from '@/utils/config';
import queryString from 'query-string';
import { PageUrls } from '@/utils/index';
import { ProductService } from '@/services/index';
import Link from 'next/link';
import Image from 'next/image';
import { getFilterState, setBrandsFilter, setCategoriesFilter, setColorsFilter, setPriceFilter, setProductFilter } from '@/statemangment/slice/filterSlice';

interface Props {
    width?: number,

}

export function ProductFilterSection({ width }: Props) {
    const STEP = 1;

    const [productList, setProductList] = useState<ProductModel[]>([])
    const dispatch = useDispatch();
    const { firstRequest } = useSelector(getGlobalState);
    const { productFilter } = useSelector(getFilterState);
    // const [productFilter, setProductFilter] = useState<FilterProductModel>({
    //     descending: true,
    //     page: 1,
    //     category_ids: [],
    //     brand_ids: [],
    //     color_ids: [],
    //     unit_size_ids: [],
    // });

    const priceRangeObject: ConfigModel | undefined = firstRequest.config?.find(d => d.id == priceRangeId);
    const route = useRouter();
    const searchedObject: FilterProductModel = queryString.parse(location.search);
    const MIN = priceRangeObject && priceRangeObject.data?.min ? priceRangeObject.data.min : 0;
    const MAX = priceRangeObject && priceRangeObject.data?.max ? priceRangeObject.data.max : 5000;
    let rangeValues = [MIN, MAX, -1];

    if (priceRangeObject && priceRangeObject.data?.min && priceRangeObject && priceRangeObject.data?.max) {
        rangeValues = [MIN, MAX];
    }

    if (searchedObject.max_price && searchedObject.min_price) {
        rangeValues = [searchedObject.min_price, searchedObject.max_price];
    }

    const [scrolled, setScrolled] = useState(false);
    const [values, setValues] = useState(rangeValues);

    const [expand, setExpand] = useState({
        category: false,
        price: false,
        brand: false,
        color: false,
        size: false,
        sortBy: false,
    });

    function editExpand(key: string): void {
        switch (key) {
            case "category":
                expand.category = !expand.category;
                break;

            case "price":
                expand.price = !expand.price;
                break;

            case "brand":
                expand.brand = !expand.brand;
                break;

            case "color":
                expand.color = !expand.color;
                break;

            case "size":
                expand.size = !expand.size;
                break;

            case "sortBy":
                expand.sortBy = !expand.sortBy;
                break;

            default:
                break;
        }

        const newExpand = Object.assign({}, expand);

        setExpand(newExpand);
    }

    function changeRange(value?: string, index?: number) {
        if (value == undefined || index == undefined) return;
        if (Number(value.replace("$", "")) > MAX) return;
        if (value.length == 1) {
            if (index == 0) {
                const newValue: number[] = [Number(MIN), values[1]];
                setValues(newValue);
            }
            if (index == 1) {
                const newValue: number[] = [values[0], Number(MIN)];
                setValues(newValue);
            }
        }

        if (priceRegex(value)) {
            if (index == 0) {
                const newValue: number[] = [Number(value.replace("$", "")), values[1]];
                setValues(newValue);
            }
            if (index == 1) {
                const newValue: number[] = [values[0], Number(value.replace("$", ""))];
                setValues(newValue);
            }
        }

        editFilterProduct("price");
    }

    useEffect(function () {
        if (priceRangeObject && values.length > 2) {
            setValues([MIN, MAX]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRequest])

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 70) {
                !scrolled ? setScrolled(true) : null;
            }
            else if (window.scrollY <= 70) {
                scrolled ? setScrolled(false) : null;
            }
        }
        const cloneSearched = searchedObject as any;
        const newProductFilter: FilterProductModel = {
            descending: true,
            page: 1,
            category_ids: [],
            brand_ids: [],
            color_ids: [],
            unit_size_ids: [],
        };
        Object.keys(cloneSearched).map(function (key, index) {
            if (key.includes("category_ids")) {
                newProductFilter.category_ids?.push(Number(cloneSearched[key]));
            }

            if (key.includes("brand_ids")) {
                newProductFilter.brand_ids?.push(Number(cloneSearched[key]));
            }

            if (key.includes("color_ids")) {
                newProductFilter.color_ids?.push(Number(cloneSearched[key]));
            }

            if (key.includes("unit_size_ids")) {
                newProductFilter.unit_size_ids?.push(Number(cloneSearched[key]));
            }
        });
        if (searchedObject.descending) {
            newProductFilter.descending = Boolean(searchedObject.descending);
        }
        if (searchedObject.page) {
            newProductFilter.page = Number(searchedObject.page);
        }

        if (searchedObject.per_page) {
            newProductFilter.per_page = Number(searchedObject.per_page);
        }

        if (searchedObject.search) {
            newProductFilter.search = searchedObject.search;
        }

        if (searchedObject.sort_by) {
            newProductFilter.sort_by = Number(searchedObject.sort_by);
        }

        //   let newProductFilter = Object.assign({}, productFilter);
        ///setProductFilter(newProductFilter);
        dispatch(setProductFilter(newProductFilter));
        window.addEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function getProducts() {
            const productService: ProductService = new ProductService();
            const response = await productService.getProducts(1, 5);
            if (response.success) {
                setProductList(response.data);
            }
        }
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function editFilterProduct(key: string, id: number = -1, checked: boolean = false) {


        switch (key) {
            case "category_ids":
                if (checked == false) {
                    if (productFilter.category_ids) {
                        dispatch(setCategoriesFilter({ ...productFilter, category_ids: productFilter.category_ids.filter(d => d != id) }));
                    }
                } else {
                    if (productFilter.category_ids && !productFilter.category_ids?.includes(id)) {
                        dispatch(setCategoriesFilter({ ...productFilter, category_ids: [...productFilter.category_ids, id] }));
                    }
                }
                break;
            case "brand_ids":
                if (checked == false) {
                    if (productFilter.brand_ids) {
                        dispatch(setBrandsFilter({ ...productFilter, brand_ids: productFilter.brand_ids.filter(d => d != id) }));
                    }
                } else {
                    if (productFilter.brand_ids && !productFilter.brand_ids?.includes(id)) {
                        dispatch(setBrandsFilter({ ...productFilter, brand_ids: [...productFilter.brand_ids, id] }));
                    }
                }
                break;

            case "price":
                dispatch(setPriceFilter({ ...productFilter, min_price: values[0], max_price: values[1] }));
                break;

            case "color_ids":
                if (checked == false) {
                    if (productFilter.color_ids) {
                        dispatch(setColorsFilter({ ...productFilter, color_ids: productFilter.color_ids.filter(d => d != id) }));
                    }
                } else {
                    if (productFilter.color_ids && !productFilter.color_ids?.includes(id)) {
                        dispatch(setColorsFilter({ ...productFilter, color_ids: [...productFilter.color_ids, id] }));
                    }
                }
                break;
            default:
                break;
        }


    }

    function result() {
        document.getElementById('result_loader')?.classList.add("loading");
        let searchedQueryString = queryString.stringify(productFilter, { arrayFormat: 'index' });
        let searchedObjQuery: any = clean(queryString.parse(searchedQueryString));
        if (searchedObjQuery) {
            route.push('/products', {
                query: searchedObjQuery,
            }, { shallow: true })
        }
    }

    return (

        <>
            <ProductFilterSectionStyle scrolled={scrolled} width={width}>
                <SectionTitleWithLinkStyle>
                    <SectionTitleStyle>Filters</SectionTitleStyle>
                </SectionTitleWithLinkStyle>
                <ul className='filter_content'>
                    <li>
                        <ExpandedListStyle maxHeight={expand.brand}>
                            <a>Brand</a>
                            <ul>
                                {firstRequest.brands?.map((value: BrandModel, index: number) =>
                                    <li key={`brand_li_${value.id}`}>
                                        <CheckboxStyle className='v2' >
                                            <input checked={value.id ? productFilter.brand_ids?.includes(value.id) : false} onChange={(e) => value.id ? editFilterProduct("brand_ids", value.id, e.target.checked) : null} id={`brand_${value.id}`} type="checkbox" name='brand' hidden />
                                            <label htmlFor={`brand_${value.id}`}>{value.name}</label>
                                        </CheckboxStyle>
                                    </li>
                                )}
                            </ul>
                            <span hidden={expand.brand} onClick={() => editExpand("brand")}>+ Show more</span>
                            <span hidden={!expand.brand} onClick={() => editExpand("brand")}>- Show less</span>
                        </ExpandedListStyle>
                    </li>

                    <li>
                        <ExpandedListStyle maxHeight={expand.category}>
                            <a>
                                Category
                            </a>
                            <ul>
                                {firstRequest.categories?.map((value: CategoryModel, index: number) =>
                                    <li key={`cat_li_${value.id}`}>
                                        <CheckboxStyle className='v2'>
                                            <input onChange={(e) => {
                                                value.id ? editFilterProduct("category_ids", value.id, e.target.checked) : null;
                                            }} id={`cat_${value.id}`} type="checkbox" name='cat' checked={value.id ? productFilter.category_ids?.includes(value.id) : false} hidden />
                                            <label htmlFor={`cat_${value.id}`}>{value.name}</label>
                                        </CheckboxStyle>
                                    </li>
                                )}
                            </ul>
                            <span hidden={expand.category} onClick={() => editExpand("category")}>+ Show more</span>
                            <span hidden={!expand.category} onClick={() => editExpand("category")}>- Show less</span>
                        </ExpandedListStyle>
                    </li>

                    <li>
                        <ExpandedListStyle maxHeight={expand.color}>
                            <a>Color</a>
                            <ul>
                                <li className='colors_container'>
                                    <CustomColor selectedIds={productFilter.color_ids} editFilterProduct={editFilterProduct} colors={firstRequest.color_categories} />
                                </li>
                            </ul>
                            <span hidden={expand.color} onClick={() => editExpand("color")}>+ Show more</span>
                            <span hidden={!expand.color} onClick={() => editExpand("color")}>- Show less</span>
                        </ExpandedListStyle>
                    </li>

                    {
                        values.length == 2 ?
                            <li className='price_range'>
                                <a>Price</a>
                                <ul>
                                    <li>
                                        <CustomRange values={values} setValues={setValues} MAX={MAX} MIN={MIN} STEP={STEP} priceChanged={() => editFilterProduct("price")} />
                                    </li>
                                    {/* <li>
                                        <DebounceInput debounceTimeout={300} type={"tel"} value={"$" + values[0]} onChange={(e) => { changeRange(e.target.value, 0) }} />
                                        <DebounceInput debounceTimeout={300} type={"tel"} value={"$" + values[1]} onChange={(e) => { changeRange(e.target.value, 1) }} />
                                    </li> */}
                                </ul>

                                <div>Price: ${values[0]} — ${values[1]}</div>
                            </li> : <></>
                    }

                    <li className='noBorder'>
                        <ButtonStyle id='result_loader' onClick={() => result()}><span>RESULTS</span></ButtonStyle>
                    </li>


                    {/* 
                    <li>
                        <ExpandedListStyle maxHeight={expand.sortBy}>
                            <a onClick={() => editExpand("sortBy")}><span>Sort By</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                {firstRequest.sort?.map((value: SortModel, index: number) =>
                                    <li key={`sort_li_${value.id}`}>
                                        <input id={`sort_${value.id}`} checked={productFilter.sort_by == undefined && index == 0 ? true : value.id == productFilter.sort_by} onChange={(e) => editFilterProduct("sort", Number(value.id), e.target.checked)} type="radio" name='sort' hidden />
                                        <label htmlFor={`sort_${value.id}`}>{value.name}</label>
                                    </li>
                                )}
                            </ul>
                        </ExpandedListStyle>
                    </li> */}
                    <li className='on_sale noBorder'>
                        <SectionTitleWithLinkStyle>
                            <SectionTitleStyle>On Sale Product</SectionTitleStyle>
                        </SectionTitleWithLinkStyle>
                        <ul>
                            {
                                productList.map((productItem: ProductModel, index: number) =>
                                    <li key={productItem.id}>
                                        <Link href={PageUrls.PRODUCTS + "/" + productItem.id}>
                                            <a>
                                                <div className='image_container'>
                                                    <Image width={80} height={80} src={productItem.image ? `${productItem.image?.base_url}/${productItem.image?.webp_image}` : ""} alt={productItem.name} />
                                                </div>
                                                <div className='content'>
                                                    <h2>{productItem.name}</h2>
                                                    <h3 className='price'>
                                                        {productItem.discounted_price != undefined && productItem.discounted_price > 0 ?
                                                            <>
                                                                {productItem.discounted_price?.toFixed(2)} USD
                                                            </> :
                                                            <>{productItem.price?.toFixed(2)} USD</>
                                                        }
                                                    </h3>
                                                </div>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </li>
                </ul>
            </ProductFilterSectionStyle>
        </>



    )
}