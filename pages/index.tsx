import { BannerSection, BrandSection, CategorySection, DiscountSection, HotSaleProductSection, NewArrivalProductSection, PopularProductSection, TopSellerProductSection } from "@/components/home";
import { VerificationPop } from "@/components/popups";
import { HOME_PAGE_NAME } from "@/utils/index";
import { useEffect, useState } from "react";
import { UserService } from '@/services/index';

export async function getStaticProps() {
    return {
        props: {
        },
    }
}

// const LatestProductSection = dynamic<any>(() => import("@/components/home").then((mod) => mod.LatestProductSection));
// const ServiceSection = dynamic<any>(() => import("@/components/home").then((mod) => mod.ServiceSection));
// const DiscountSection = dynamic<any>(() => import("@/components/home").then((mod) => mod.DiscountSection));
// const CategorySection = dynamic<any>(() => import("@/components/home").then((mod) => mod.CategorySection));
// const SupplierSection = dynamic<any>(() => import("@/components/home").then((mod) => mod.SupplierSection));
// const BackToTopSection = dynamic<any>(() => import("@/components/home").then((mod) => mod.BackToTopSection));

export default function Home() {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        async function homeData() {
            const userService = new UserService();
            const response = await userService.HomeRequest();
            const responseData = response.data;
            setData(responseData);
            console.log(responseData)
        }
        homeData();
    }, [])


    return (
        <>
            {
                data && data.length > 0 ?
                    <>
                        <VerificationPop />
                        <BannerSection />
                        <CategorySection data={data.find((d: any) => d.type == "categories")?.data} />
                        <BrandSection data={data.find((d: any) => d.type == "brands")?.data} />
                        <NewArrivalProductSection />
                        <PopularProductSection data={data.find((d: any) => d.type == "popular_product")?.data} />
                        <HotSaleProductSection data={data.find((d: any) => d.type == "discounted_products")?.data} />
                        <DiscountSection />
                        <TopSellerProductSection />
                        {/*   
            <ServiceSection />
            <SupplierSection />
            <BackToTopSection /> */}
                    </> : null
            }

        </>
    )
}


Home.componentName = HOME_PAGE_NAME;