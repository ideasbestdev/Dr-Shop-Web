import { LoaderStyle, PageNumberStyle, ProductListSectionStyle, SelectStyle } from '@/styledcomponents/index'
import React, { useEffect, useState, useRef } from 'react'
import { ProductItemComponent } from './ProductItemComponent';
import { FilterProductModel, PageLinksModel, ProductDetailPageModel, ProductModel } from '@/models/index';
import { ProductService } from '@/services/index';
import { useRouter } from 'next/router';
import { ArrowDownIcon, DetailRightArrowIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalState } from '@/statemangment/slice/globalSlice';
import queryString from 'query-string';
import { getFilterState, setPerPageFilter, setSortByFilter } from '@/statemangment/slice/filterSlice';


export function ProductListSection() {
    const [pageData, setPageData] = useState<ProductDetailPageModel>({
        productList: [],
        linksState: [],
        from: 1,
        to: 1,
        total: 1,
        loading: true,
    })
    const route = useRouter();
    const sortRef = useRef<HTMLSelectElement>(null);
    const perPageRef = useRef<HTMLSelectElement>(null);
    const { firstRequest } = useSelector(getGlobalState);
    const dispatch = useDispatch();
    const { productFilter } = useSelector(getFilterState);

    useEffect(() => {
        async function getProducts() {
            const productService: ProductService = new ProductService();
            const response = await productService.getQueryProducts(location.search);
            if (response.success && response.links != undefined) {
                setPageData({
                    from: response.from ?? 0,
                    linksState: response.links,
                    productList: response.data,
                    to: response.to ?? 0,
                    total: response.total ?? 0,
                    loading: false,
                });
            }
            document.getElementById('result_loader')?.classList.remove("loading");
        }
        getProducts();
    }, [route]);

    useEffect(() => {
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        if (sortRef.current && searchedObject.sort_by) {
            sortRef.current.value = searchedObject.sort_by.toString();
        }

        if (perPageRef.current && searchedObject.per_page) {
            perPageRef.current.value = searchedObject.per_page.toString();
        }

    }, [firstRequest]);

    async function ChangePage(url: string | null) {
        if (url == null) return;
        const pageNumber = url.split("?page=")[1];
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        searchedObject.page = Number(pageNumber);
        route.push("/products", {
            query: searchedObject as any,
        }, { shallow: true });
    }

    function handleSort() {
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        searchedObject.sort_by = Number(sortRef.current?.value);
        dispatch(setSortByFilter(searchedObject.sort_by));
        route.push('/products', {
            query: searchedObject as any,
        }, { shallow: true });
    }

    function handlePerPage() {
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        searchedObject.per_page = Number(perPageRef.current?.value);
        dispatch(setPerPageFilter(searchedObject.per_page));
        route.push('/products', {
            query: searchedObject as any,
        }, { shallow: true });
    }

    return (
        <>
            <ProductListSectionStyle>
                <div>
                    <SelectStyle>
                        <select onChange={handleSort} ref={sortRef}>
                            {
                                firstRequest.sort?.map(item =>
                                    <option key={item.name} value={item.id}>{item.name}</option>
                                )
                            }
                        </select>
                        <i>
                            <ArrowDownIcon />

                        </i>
                    </SelectStyle>
                    <SelectStyle>
                        <select onClick={handlePerPage} ref={perPageRef}>
                            <option value={"10"}>Show 10</option>
                            <option value={"20"}>Show 20</option>
                            <option value={"50"}>Show 50</option>
                            <option value={"100"}>Show 100</option>
                        </select>
                        <i>
                            <ArrowDownIcon />

                        </i>
                    </SelectStyle>
                </div>
                <ul>
                    {
                        pageData.productList.map((value: ProductModel, index: number) => <li key={value.id}><ProductItemComponent product={value} /></li>)
                    }

                </ul>
                <ul>
                    {
                        pageData.linksState.map((value: PageLinksModel, index: number) => value.label == "..." || value.url != null ?
                            <li key={value.label} onClick={() => ChangePage(value.url)}>
                                <PageNumberStyle selected={value.active}>
                                    {value.label.toLocaleLowerCase().includes("next") || value.label.toLocaleLowerCase().includes("prev") ? null : <span className={`${value.label == "..." ? "points" : ""}`} dangerouslySetInnerHTML={{ __html: `${value.label}` }}></span>}
                                </PageNumberStyle>
                            </li>
                            : null)
                    }
                </ul>
                {
                    pageData.loading ? <LoaderStyle></LoaderStyle> : null
                }
            </ProductListSectionStyle>
        </>
    )
}
