import { PageNumberStyle, ProductListSectionStyle } from '@/styledcomponents/index'
import React, { useEffect, useState } from 'react'
import { ProductItemComponent } from './ProductItemComponent';
import { PageLinksModel, ProductModel } from '@/models/index';
import { ProductService } from '@/services/index';
import { useRouter } from 'next/router';
import { DetailRightArrowIcon } from '../icons';

// interface Props {
//     productList: ProductModel[],
//     links: PageLinksModel[],
// }

export function ProductListSection() {
    const [productListState, setProductListState] = useState<ProductModel[]>([]);
    const [linksState, setLinksState] = useState<PageLinksModel[]>([]);
    const [total, setTotal] = useState<number>(1);
    const [to, setTo] = useState<number>(1);
    const [from, setFrom] = useState<number>(1);

    const route = useRouter();

    useEffect(() => {
        async function getProducts() {
            const productService: ProductService = new ProductService();
            const response = await productService.getQueryProducts(route.asPath.split("?")[1]);
            let newLinks: PageLinksModel[] = [];
            let newProductList: ProductModel[] = [];
            if (response.success && response.links != undefined) {
                newProductList = response.data;
                newLinks = response.links;
                setProductListState(newProductList);
                setLinksState(newLinks);
                setTotal(response.total ?? 1);
                setTo(response.to ?? 1);
                setFrom(response.from ?? 1);
            }
        }
        //if (number > 1) {
        getProducts();
        //  }
    }, [route]);

    async function ChangePage(url: string | null) {
        if (url == null) return;
        const pageNumber = url.split("?page=")[1];
        route.query.page = pageNumber.toString();
        route.push({
            query: route.query,
        })
    }

    return (
        <>
            <ProductListSectionStyle>
                <div>
                    Items {from}-{to} of {total}
                </div>
                <ul>
                    {
                        productListState.map((value: ProductModel, index: number) => <li key={value.id}><ProductItemComponent product={value} /></li>)
                    }

                </ul>
                <ul>
                    {
                        linksState.map((value: PageLinksModel, index: number) => value.label == "..." || value.url != null ?
                            <li key={value.label} onClick={() => ChangePage(value.url)}>
                                <PageNumberStyle selected={value.active}>
                                    {value.label.toLocaleLowerCase().includes("next") ? <span><DetailRightArrowIcon /></span> : <span dangerouslySetInnerHTML={{ __html: `${value.label}` }}></span>}
                                </PageNumberStyle>
                            </li>
                            : null)
                    }
                </ul>
            </ProductListSectionStyle>
        </>
    )
}
