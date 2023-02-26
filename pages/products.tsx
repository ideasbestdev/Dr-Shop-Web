import { ProductFilterSection, ProductListSection } from '@/components/product/index';
import { PageLinksModel, ProductModel, SelectModel } from '@/models/index';
import { PageUrls, PRODUCT_LIST_PER_PAGE, PRODUCT_PAGE_NAME } from '@/utils/index';
import { ComboService, ProductService } from '@/services/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { BrandSection } from '@/components/home';



export async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
    //let productList: ProductModel[] = [];
    //const productService: ProductService = new ProductService();
    //const comboService: ComboService = new ComboService();
    //let response;
    //if (context.resolvedUrl.split("?").length < 2) {
    //    response = await productService.getProducts(1, PRODUCT_LIST_PER_PAGE);
    //} else {
    //    response = await productService.getQueryProducts(context.resolvedUrl.split("?")[1]);
    //}
    ////  const response = await productService.getProducts(1, PRODUCT_LIST_PER_PAGE);
    //let links: PageLinksModel[] = [];
    //if (response.success && response.links != undefined) {
    //    productList = response.data;
    //    links = response.links;
    //}
    //    const categories = await comboService.GetAllCategory();
    //    const brands = await comboService.GetAllBrand();
    //    const colors = await comboService.GetAllColor();
    //    const sizes = await comboService.GetAllSizes();

    return {
        props: {
            //productList,
            //  filterData,
            //     links,
        },
    }
}

export default function Products() {

    const route = useRouter();

    const [load, setLoad] = useState(false);
    useEffect(function () {
        setLoad(true);
    }, [])

    return (
        <>
            <div style={{ display: "flex" }}>
                {load == true ? <ProductFilterSection /> : null}
                <div style={{ paddingLeft: "40px", flex: "1" }}>
                    <ProductListSection key={1} />
                </div>
            </div>
            <BrandSection />
        </>
    )
}


Products.componentName = PRODUCT_PAGE_NAME;