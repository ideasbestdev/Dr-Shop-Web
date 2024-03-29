import { getGlobalState, setCartTotal } from '@/statemangment/slice/globalSlice';
import { ButtonStyle, ExpandedListStyle, LinkButtonStyle, LoaderStyle, OrderSummarySectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartProductsModel, CheckouttModel, OrderModel, ProductSupplierModel, ServerResModel } from '@/models/index';
import { CartProduct } from './CartProduct';
import { ProductService } from '@/services/productService';
import { useState } from 'react';
import { UserService } from '@/services/index';
import Cookies from 'js-cookie';
import { TOKEN_KEY_NAME } from '@/utils/config';
import { useRouter } from 'next/router';
import { OrderPop } from '../popups/OrderPop';

export function OrderSummarySection() {
    const { firstRequest, selectedProducts, selectedAddress, selectedCard, selectedBillingAddress } = useSelector(getGlobalState);
    const [checkout, setCheckout] = useState<CheckouttModel>();
    const [orderId, setOrderId] = useState<number | undefined>(undefined)
    const dispatch = useDispatch();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const router = useRouter();
    function productBySupplierName(): ProductSupplierModel {
        const pruductsBySupplier: ProductSupplierModel = {};
        selectedProducts?.map((item) => {
            var name = "supplier_" + item.product?.supplier_id;
            if (pruductsBySupplier[name]) {
                pruductsBySupplier[name] = [...pruductsBySupplier[name], item];
            } else {
                pruductsBySupplier[name] = [item];
            }
        })

        return pruductsBySupplier;
    }

    const productBySupplierList = productBySupplierName();

    useEffect(function () {

        async function getCheckout() {
            const productService: ProductService = new ProductService();
            let url = "";
            let index = 0;
            selectedProducts?.map(item => { url += ` &cart_product_ids[${index}]=${item.id}`; index++; });
            let response = await productService.checkout(url, (firstRequest.user != null && firstRequest.user != undefined));
            if (response.success) {
                var checkoutData: CheckouttModel = response.data;
                setCheckout(checkoutData);
            }
        }
        if (selectedProducts == undefined || selectedProducts.length == 0 || selectedAddress == undefined) {
            router.replace("/");
        }
        getCheckout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    async function getCartTotal() {
        const productService: ProductService = new ProductService();
        const response: ServerResModel = await productService.getCart();
        if (response.success) {
            dispatch(setCartTotal(response.data.cart_products.length));
        }
    }
    function pay() {
        buttonRef.current?.classList.add("loading");
        const productService = new ProductService();
        const order: OrderModel = {
        };
        order.address_id = selectedAddress?.id;
        order.billing_address_id = selectedBillingAddress?.id;
        order.payment_method_id = selectedCard?.id;
        order.currency_id = 1;
        order.return_order = 1;
        order.cart_key = Cookies.get(TOKEN_KEY_NAME);
        var dataToSend: any = Object.assign({}, order);
        order.cart_products_ids = selectedProducts?.map(function (el) { return el.id ? el.id : -1; });
        order.cart_products_ids = order.cart_products_ids?.filter(d => d > 0);

        order.cart_products_ids?.map((item, index) => dataToSend[`cart_product_ids[${index}]`] = item);
        productService.createOrder(dataToSend).then(async (response) => {
            var data = (await productService.paymentLink(response.data.payment_link + "?callback_url=https://hasan-dr-shop.vercel.app/products"));
            buttonRef.current?.classList.remove("loading");

            if (data.success) {
                window.location.href = data.data.checkout_url;
            }

            // setOrderId(response.data);
            // getCartTotal();
        });
    }

    return (
        <OrderSummarySectionStyle>
            <SectionTitleWithLinkStyle className='order_summary_title'>
                <SectionTitleStyle>Order Summary</SectionTitleStyle>
            </SectionTitleWithLinkStyle>
            <table>
                <tr>
                    <td>Product Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                </tr>
                {selectedProducts ?
                    <CartProduct products={selectedProducts} /> : <></>
                }
            </table>
            <ul>
                {/* {
                    Object.keys(productBySupplierList).map((key) => <li key={key}>
                        <CartProduct products={productBySupplierList[key]} name={key} />
                    </li>
                    )
                } */}
                <li>
                    <h3>Subtotal<span>$ {checkout?.sub_total && checkout.discount != undefined ? checkout?.sub_total - checkout?.discount : null}</span></h3>
                </li>
                <li>
                    <h3>Shipping<span>$ {checkout?.delivery_charge}</span></h3>
                </li>
                <li>
                    <h3>Tax<span>$ {checkout?.tax_amount}</span></h3>
                </li>
                <li>
                    <h3>Order Total<span>$ {checkout?.total_amount}</span></h3>
                </li>
            </ul>
            <ButtonStyle ref={buttonRef} onClick={() => pay()}>
                <span>Confirm and Pay</span>
                <LoaderStyle></LoaderStyle>
            </ButtonStyle>
            <OrderPop show={orderId != undefined} setShowPop={setOrderId} orderId={orderId} />

        </OrderSummarySectionStyle>
    )
}
