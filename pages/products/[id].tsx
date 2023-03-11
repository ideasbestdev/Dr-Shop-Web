import { useSelector, useDispatch } from 'react-redux'
import { ProductDetailSection, ProductFilterSection, SimilarProductSection } from '@/components/product/index';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from '@/models/index';
import { ProductService } from '@/services/index';
import { PRODUCT_DETAIL_PAGE_NAME } from '@/utils/constants';
import { useRouter } from 'next/router';
import { BrandSection, NewArrivalProductSection } from '@/components/home';

interface Props {
    product: ProductModel,
}


export async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
    var id = context.query.id;
    let product: ProductModel | null = null;
    const productService: ProductService = new ProductService();
    let response = await productService.getProductById(id != undefined ? Number(id) : -1);
    if (response.success) {
        product = response.data;
    }
    return {
        props: {
            product

        },
    }
}

export default function ProductItemPage({ product }: Props) {
    const FlexDiv = styled.div`
      width: 100%;
      padding-left: 40px;
    `;

    const dipatch = useDispatch();
    const [load, setLoad] = useState(false);
    const route = useRouter();
    // useEffect(function () {
    //     //  setLoad(true);
    //     const productService: ProductService = new ProductService();
    //     let response = productService.getProductById(route.query.id != undefined ? Number(route.query.id) : -1).then((res) => {
    //         console.log(res);

    //     });
    // }, [])
    console.log(product)
    return (
        <>

            {/* {load == true ? <ProductFilterSection filterData={JSON.parse(localStorage.getItem("filter") ?? "")} width={280} /> : null} */}
            <FlexDiv >
                <ProductDetailSection productItem={product} />
                {/* <SimilarProductSection /> */}
            </FlexDiv>
            <NewArrivalProductSection />
            <BrandSection />
        </>
    )
}


ProductItemPage.componentName = PRODUCT_DETAIL_PAGE_NAME;