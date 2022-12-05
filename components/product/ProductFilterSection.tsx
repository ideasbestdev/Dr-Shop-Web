import { ExpandedListStyle, ProductFilterSectionStyle } from '@/styledcomponents/index'
import React, { useEffect, useState } from 'react'
import { CustomColor, CustomRange, CustomSize } from '@/components/common';
import { FilterDataModel } from '@/models/ProductModel';
import { SelectModel } from '@/models/SelectModel';
import { FilterProductModel } from '@/models/index';
import { useRouter } from 'next/router';
import { priceRegex, convertObjectToQueryString } from '@/helpers/index';
import { ProductService } from '@/services/index';
import { RightArrowIcon } from '../icons';

interface Props {
    width?: number,
    filterData: FilterDataModel,
}

export function ProductFilterSection({ width, filterData }: Props) {
    const STEP = 1;
    const MIN = 0;
    const MAX = 5000;

    const [productFilter, setProductFilter] = useState<FilterProductModel>({
        descending: true,
        page: 1,
        category_ids: [],
        brand_ids: [],
        color_ids: [],
        unit_size_ids: [],
    });

    const route = useRouter();

    const [scrolled, setScrolled] = useState(false);

    const [values, setValues] = useState([MIN, MAX]);

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

    function changeRange(value: string, index: number) {
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
    }

    function handleScroll() {
        if (window.scrollY > 70 && !scrolled) {
            setScrolled(true);
        }
        else if (window.scrollY <= 70) {
            setScrolled(false);
        }
    }

    useEffect(() => {
        Object.keys(route.query).map(function (key, index) {

            if (key == "descending") {
                productFilter.descending = Boolean(route.query[key]);
            }

            if (key.includes("category_ids")) {
                productFilter.category_ids?.push(Number(route.query[key]));
            }

            if (key.includes("brand_ids")) {
                productFilter.brand_ids?.push(Number(route.query[key]));
            }

            if (key.includes("color_ids")) {
                productFilter.color_ids?.push(Number(route.query[key]));
            }

            if (key.includes("unit_size_ids")) {
                productFilter.unit_size_ids?.push(Number(route.query[key]));
            }

            if (key == "page") {
                productFilter.page = Number(route.query[key]);
            }

        });
        let newProductFilter = Object.assign({}, productFilter);
        setProductFilter(newProductFilter);
        window.addEventListener('scroll', handleScroll);
    }, []);



    function editFilterProduct(key: string, id: number, checked: boolean = false) {
        productFilter.page = 1;
        switch (key) {
            case "category_ids":
                if (checked == false) {
                    productFilter.category_ids = productFilter.category_ids?.filter(d => d != id);
                } else {
                    productFilter.category_ids?.push(id);
                }
                break;
            case "brand_ids":
                if (checked == false) {
                    productFilter.brand_ids = productFilter.brand_ids?.filter(d => d != id);
                } else {
                    productFilter.brand_ids?.push(id);
                }
                break;
            case "color_ids":
                if (checked == false) {
                    productFilter.color_ids = productFilter.color_ids?.filter(d => d != id);
                } else {
                    productFilter.color_ids?.push(id);
                }
                break;
            case "unit_size_ids":
                if (checked == false) {
                    productFilter.unit_size_ids = productFilter.unit_size_ids?.filter(d => d != id);
                } else {
                    productFilter.unit_size_ids?.push(id);
                }
                break;
            default:
                break;
        }

        let newProductFilter = Object.assign({}, productFilter);
        setProductFilter(newProductFilter);

        const queryObject: any = {};
        let anyObject: any = Object.assign({}, productFilter);
        Object.keys(anyObject).map(function (key, index) {
            if (anyObject[key] == undefined || typeof anyObject[key] == 'function') return;
            if (typeof anyObject[key] != "object") {
                queryObject[key] = anyObject[key];
            } else {
                if (Array.isArray(anyObject[key])) {
                    for (let index = 0; index < anyObject[key].length; index++) {
                        const element = anyObject[key][index];
                        queryObject[key + "[" + index + "]"] = element;
                    }
                }
            }
        });

        let queryString = convertObjectToQueryString(queryObject);

        //  route.push({
        //        query: queryObject
        //    })
        if (window.location.pathname.includes("/products/")) {
            route.push('/products?' + queryString);
        } else {
            route.push('/products?' + queryString, undefined, { shallow: true })
        }

    }

    return (
        <>
            <ProductFilterSectionStyle scrolled={scrolled} width={width}>
                <ul>
                    <li>
                        <ExpandedListStyle maxHeight={expand.category}>
                            <a onClick={() => editExpand("category")}><span>Category</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                {filterData.catgories.map((value: SelectModel, index: number) =>
                                    <li key={value.id}>
                                        <input onChange={(e) => {
                                            editFilterProduct("category_ids", value.id, e.target.checked);
                                        }} id={`cat_${value.id}`} type="checkbox" name='cat' checked={productFilter.category_ids?.includes(value.id)} hidden />
                                        <label htmlFor={`cat_${value.id}`}>{value.name}</label>
                                    </li>
                                )}
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.price}>
                            <a onClick={() => editExpand("price")}><span>Price</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                <li>
                                    <CustomRange values={values} setValues={setValues} MAX={MAX} MIN={MIN} STEP={STEP} />
                                </li>
                                <li>
                                    <input type={"tel"} value={"$" + values[0]} onChange={(e) => { changeRange(e.target.value, 0) }} />
                                    <input type={"tel"} value={"$" + values[1]} onChange={(e) => { changeRange(e.target.value, 1) }} />
                                </li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.brand}>
                            <a onClick={() => editExpand("brand")}><span>Brand</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                {filterData.brands.map((value: SelectModel, index: number) => <li key={value.id}><input checked={productFilter.brand_ids?.includes(value.id)} onChange={(e) => editFilterProduct("brand_ids", value.id, e.target.checked)} id={`brand_${value.id}`} type="checkbox" name='brand' hidden /><label htmlFor={`brand_${value.id}`}>{value.name}</label></li>)}
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.color}>
                            <a onClick={() => editExpand("color")}><span>Color</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                <li>
                                    <CustomColor selectedIds={productFilter.color_ids} editFilterProduct={editFilterProduct} colors={filterData.colors} />
                                </li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.size}>
                            <a onClick={() => editExpand("size")}><span>Sizes</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                <li><CustomSize selectedIds={productFilter.unit_size_ids} editFilterProduct={editFilterProduct} sizes={filterData.sizes} /></li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.sortBy}>
                            <a onClick={() => editExpand("sortBy")}><span>Sort By</span><RightArrowIcon color='#707070' /></a>
                            <ul>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <div>
                            <a>My Wishlist</a>
                            <ul>
                                <li>Empty</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </ProductFilterSectionStyle>
        </>
    )
}