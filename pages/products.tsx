import { CustomBreadcrumb } from '@/components/common';
import { ProductFilterSection, ProductListSection } from '@/components/product/index';
import { BreadcrumbModel, FilterDataModel, PageLinksModel, ProductModel, SelectModel } from '@/models/index';
import { PageUrls, PRODUCT_LIST_PER_PAGE } from '@/utils/index';
import { ComboService, ProductService } from '@/services/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";



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

    const filterData: FilterDataModel = {
        brands: [],//brands,
        catgories: [],//categories,
        colors: [],//colors,
        sizes: [],//sizes,
    }
    return {
        props: {
            //productList,
          //  filterData,
       //     links,
        },
    }
}

export default function Products() {
    const breadcrumbPage: BreadcrumbModel[] = [
        {
            link: PageUrls.HOME,
            title: "Home",
        }, {
            link: PageUrls.HOME,
            title: "Categories"
        }
    ];
    const route = useRouter();

    const [load, setLoad] = useState(false);
    useEffect(function () {
        setLoad(true);
    }, [])

    return (
        <div style={{ display: "flex" }}>
            {load == true ? <ProductFilterSection filterData={JSON.parse(localStorage.getItem("filter") ?? "")} /> : null}
            <div style={{ paddingLeft: "400px", flex: "1" }}>
                <CustomBreadcrumb key={2} breadcrumb={breadcrumbPage} />
                <ProductListSection key={1}  />
            </div>
        </div>
    )
}
