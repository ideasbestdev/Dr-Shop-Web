import { useSelector, useDispatch } from 'react-redux'
import { getUserState } from "@/statemangment/slice/userSlice";
import { ProductDetailSection, ProductFilterSection, SimilarProductSection } from '@/components/product/index';
import styled from 'styled-components';

interface Params {
    id: number,
}
interface UrlParams {
    params: Params,
}

export async function getStaticProps({ params }: UrlParams) {
    return {
        props: {
            params,
        },
    };
}

export async function getStaticPaths() {
    const paths = [{ params: { "id": "1" } }, { params: { "id": "2" } }, { params: { "id": "3" } }, { params: { "id": "4" } }];
    return {
        paths,
        fallback: false,
    };
}

export default function ProductItem({ params }: UrlParams) {
    const FlexDiv = styled.div`
      width: 100%;
      padding-left: 280px;
    `;

    const { currentuser } = useSelector(getUserState);
    const dipatch = useDispatch();

    return (
        <>
            <div style={{ display: "flex" }}>
                <ProductFilterSection width='280px' />
                <FlexDiv >
                    <ProductDetailSection />
                    <SimilarProductSection />
                </FlexDiv>
            </div>
        </>
    )
}
