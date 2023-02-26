import { CartSectionStyle, CheckboxStyle, CustomQuantityStyle, LinkButtonStyle, SectionTitleStyle, SectionTitleWithLinkStyle, TitleStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { CartIcon, CloseIcon, DeleteIcon, EditIcon, SubtotalIcon, UpdateCartIcon } from '../icons'
import { AssetsImages } from '@/utils/index';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductService } from '@/services/productService';
import { CartModel, CartProductsModel, ProductModel } from '@/models/index';
import { useSelector } from 'react-redux';
import { getGlobalState, setSelectedProducts, setVerificationPop } from '@/statemangment/slice/globalSlice';
import { Instructionline } from './../common/Instructionline';
import useCounter from '../customHookes/useCounter';
import { CartItem } from './CartItem';
import { BrandSection } from '../home';
import { useDispatch } from 'react-redux';
import { UserService } from '@/services/userService';
import { useRouter } from 'next/router';


export async function getStaticProps() {
    return {
        props: {
        },
    }
}


export function CartSection() {
    const route = useRouter();
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);
    const [cart, setCart] = useState<CartModel>();
    const { firstRequest } = useSelector(getGlobalState);
    const [total, setTotal] = useState<number>(0);
    const [cartChanged, setCartChanged] = useState(false);
    const productService: ProductService = new ProductService();
    useEffect(() => {
        dispatch(setSelectedProducts([]));
        async function getCart() {
            const productService = new ProductService();
            const response = await productService.getCart(firstRequest.user != null && firstRequest.user != undefined);
            var cartResponse: CartModel = response.data;
            if (response.success && cartResponse) {
                cartResponse.cart_products?.map((item) => item.isChecked = true);
                setCart(cartResponse);
            }
            setTotal(cartResponse.discounted_amount ? cartResponse.discounted_amount : 0)
            setLoad(false);
        }
        if (Object.keys(firstRequest).length > 0) {
            getCart()
        }

    }, [firstRequest])

    async function ChangeTotal(value: number, currentQuantity: number, cartItem: CartProductsModel, index: number) {
        // setCartChanged(true);
        setTotal(total + value);

        if (currentQuantity == 0) {
            const currentObject: CartProductsModel[] = Object.assign([], cart?.cart_products);
            currentObject.splice(index, 1)
            setCart({ ...cart, cart_products: currentObject });
        }

        if (cart?.uuid) {
            var response = await productService.updateCart(currentQuantity, cart.uuid, cartItem);
        }
    }

    async function removeAddProductChecked(value: number, cartItem: CartProductsModel, isChecked: boolean, index: number) {
        const currentObject: CartProductsModel[] = Object.assign([], cart?.cart_products);
        currentObject[index].isChecked = isChecked;
        setCart({ ...cart, cart_products: currentObject });
        if (isChecked) {
            setTotal(total + value);
        } else {
            setTotal(total - value);
        }
    }

    function CheckOut() {
        if (firstRequest.user == null) {
            alert("Please Login First")
        }
        route.push("/address");
        // if (!firstRequest.user?.account?.verified) {
        //     const userServce = new UserService();
        //     userServce.verifcate();
        //     dispatch(setVerificationPop(true));
        // }
        const checkedProductCarts = cart?.cart_products?.filter(d => d.isChecked);
        dispatch(setSelectedProducts(checkedProductCarts));
        // // let url = "?cart_key=" + cart?.cart_key;
        // let index = 0;
        // checkedProductCarts?.map(item => { url += ` &cart_product_ids[${index}]=${item.id}`; index++; });

        // // productService.checkout(url, (firstRequest.user != null && firstRequest.user != undefined))
    }

    return (
        <CartSectionStyle>
            <Instructionline index={1} />
            <ul className='cart_list'>
                <li>
                    <div className={`update_cart ${cartChanged ? "isActive" : ""}`}>
                        <span><i><UpdateCartIcon /></i> Update Cart</span>
                    </div>
                    <div>
                        Product
                    </div>
                    <div>
                        Stock
                    </div>
                    <div>
                        Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        SubTotal
                    </div>

                </li>
                {
                    cart?.cart_products?.map((value: CartProductsModel, index: number) =>
                        <li key={value.product_id}>
                            <CartItem value={value} changeTotal={ChangeTotal} index={index} removeAddProductChecked={removeAddProductChecked} />
                        </li>
                    )
                }
            </ul>
            <section className='receipet'>
                <SectionTitleWithLinkStyle>
                    <SectionTitleStyle>Cart Total</SectionTitleStyle>
                </SectionTitleWithLinkStyle>
                <ul className='details'>
                    <li>
                        <h3>Subtotal</h3>
                        <div>${total}</div>
                    </li>
                </ul>
            </section>
            <LinkButtonStyle onClick={CheckOut}>Checkout</LinkButtonStyle>
            <BrandSection />
        </CartSectionStyle>
    )
}