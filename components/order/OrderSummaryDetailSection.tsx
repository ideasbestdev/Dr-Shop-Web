import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { ButtonStyle, OrderSummarySectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from '@/styledcomponents/index'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { CheckouttModel, ProductSupplierModel } from '@/models/index';
import { CartProduct } from './CartProduct';
import { ProductService } from '@/services/productService';
import { useState } from 'react';
import { CartProductsModel } from '@/models/CartModel';

interface Props {
    selectedProducts?: CartProductsModel[],
    final_amount?: number,
    delivery_charge?: number,
    tax_amount?: number,
}

export function OrderSummaryDetailSection({ selectedProducts, delivery_charge, final_amount, tax_amount }: Props) {
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

    // const productBySupplierList = productBySupplierName();



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
                <li>
                    <h3>Shipping<span>$ {delivery_charge}</span></h3>
                </li>
                <li>
                    <h3>Tax<span>$ {tax_amount}</span></h3>
                </li>
                <li>
                    <h3>Total<span>$ {final_amount}</span></h3>
                </li>
            </ul>

        </OrderSummarySectionStyle>
    )
}
