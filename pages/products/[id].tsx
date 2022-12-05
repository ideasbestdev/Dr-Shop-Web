import { useSelector, useDispatch } from 'react-redux'
import { getUserState } from "@/statemangment/slice/userSlice";
import { ProductDetailSection, ProductFilterSection, SimilarProductSection } from '@/components/product/index';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from '@/models/index';
import { ProductService } from '@/services/index';

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
            product,

        },
    }
}

export default function ProductItem({ product }: Props) {
    const FlexDiv = styled.div`
      width: 100%;
      padding-left: 280px;
    `;

    const { currentuser } = useSelector(getUserState);
    const dipatch = useDispatch();
    const [load, setLoad] = useState(false);
    useEffect(function () {
        setLoad(true);
    }, [])
    return (
        <>
            <div style={{ display: "flex" }}>
                {load == true ? <ProductFilterSection filterData={JSON.parse(localStorage.getItem("filter") ?? "")} width={280} /> : null}
                <FlexDiv >
                    <ProductDetailSection product={product} />
                    {/* <SimilarProductSection /> */}
                </FlexDiv>
            </div>
        </>
    )
}
