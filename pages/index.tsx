import { BannerSection, BrandSection, CategorySection, DiscountSection, HotSaleProductSection, NewArrivalProductSection, PopularProductSection, TopSellerProductSection } from "@/components/home";
import { VerificationPop } from "@/components/popups";
import { HOME_PAGE_NAME } from "@/utils/index";

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

    return (
        <>
            <VerificationPop />
            <BannerSection />
            <CategorySection />
            <BrandSection />
            <NewArrivalProductSection />
            <PopularProductSection />
            <HotSaleProductSection />
            <DiscountSection />
            <TopSellerProductSection />
            {/*   
            <ServiceSection />
            <SupplierSection />
            <BackToTopSection /> */}
        </>
    )
}


Home.componentName = HOME_PAGE_NAME;