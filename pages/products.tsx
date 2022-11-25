import { CustomBreadcrumb } from '@/components/common';
import { ProductFilterSection, ProductListSection } from '@/components/product/index';
import { BreadcrumbModel } from '@/models/index';
import { PageUrls } from '@/utils/index';


export default function Products() {
    const breadcrumbPage: BreadcrumbModel[] = [
        {
            link: PageUrls.HOME,
            title: "Home",
        }, {
            link: PageUrls.HOME,
            title: "Categories"
        }
    ]

    return (
        <div style={{ display: "flex" }}>
            <ProductFilterSection />
            <div style={{ paddingLeft: "400px" }}>
                <CustomBreadcrumb breadcrumb={breadcrumbPage} />
                <ProductListSection />
            </div>
        </div>
    )
}
