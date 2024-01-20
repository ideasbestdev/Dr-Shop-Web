import { ButtonStyle, FavProductStyle, LinkButtonStyle, SectionTitleStyle } from "@/styledcomponents/index";
import { useEffect, useState } from "react";
import { ProductModel } from '@/models/index';
import { ProductService } from '@/services/index';
import { CloseIcon } from '@/components/icons';
import Image from "next/image";
import { BrandSection } from "../home";
import { useSelector } from "react-redux";
import { getGlobalState } from "@/statemangment/slice/globalSlice";

export function FavoriteSection() {
    const [productList, setProductList] = useState<ProductModel[] | undefined>()
    const { firstRequest } = useSelector(getGlobalState);
    const prodcutService = new ProductService();

    useEffect(() => {
        async function getFavProducts() {
            const productService: ProductService = new ProductService();
            const response = await productService.getFavProducts();
            if (response.success) {
                setProductList(response.data);
            }
        }
        getFavProducts();
    }, [])

    function removeFav(e: React.MouseEvent, id?: number) {
        e.stopPropagation();
        if (!firstRequest.user || !id) return;
        const productService: ProductService = new ProductService();
        productService.addRemoveFavProduct(id, false, firstRequest.user.uuid);
        setProductList(productList?.filter(d => d.id != id));
    }

    function handleCart(productItem: ProductModel) {
        prodcutService.addToCart(productItem, 1, (firstRequest.user != null && firstRequest.user != undefined));

    }
    return (
        <FavProductStyle className={`${productList && productList.length > 0 ? "" : "noItems"}`}>
            {
                !productList ? null :
                    productList.length > 0 ?
                        <>
                            <SectionTitleStyle>Favorites</SectionTitleStyle>
                            <div className="table_container">
                                <ul>
                                    <li>
                                        <div className="product_content product_first">Product</div>
                                        <div className="unit_price">
                                            <div>
                                                <span>Unit Price</span>
                                            </div>
                                        </div>
                                        <div className="button"><div className="button_content">Stock Status</div></div>
                                    </li>
                                    {
                                        productList.map((product: ProductModel, index: number) =>
                                            <li key={"product_" + index}>
                                                <div className="product_content">
                                                    <div className="content">
                                                        <div className="image">
                                                            <i className="close" onClick={(e) => removeFav(e, product.id)}><CloseIcon /></i>
                                                            <div className="image_container">
                                                                <Image width={110} height={110} src={product.image ? `${product.image?.base_url}/${product.image?.webp_image}` : ""} alt={product.name} />
                                                            </div>
                                                        </div>
                                                        <div className="product_title">{product.name}</div>
                                                    </div>
                                                </div>
                                                <div className="unit_price">
                                                    <div>
                                                        <span>
                                                            {product.discounted_price != undefined && product.discounted_price > 0 ?
                                                                <>
                                                                    $ {product.discounted_price?.toFixed(2)}
                                                                </> :
                                                                <>$ {product.price?.toFixed(2)}</>
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="button">
                                                    <div className="button_content">
                                                        <div className="status">In stock</div>
                                                        <ButtonStyle onClick={(e) => { e.stopPropagation(); handleCart(product) }}>Add to Cart</ButtonStyle>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }

                                </ul>
                            </div>
                        </> : <>
                            <SectionTitleStyle>No items in the list</SectionTitleStyle>
                            <LinkButtonStyle>Start Shopping</LinkButtonStyle>
                        </>
            }
        </FavProductStyle>
    )
}