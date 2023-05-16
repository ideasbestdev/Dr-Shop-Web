import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { SectionTitleStyle } from '@/styledcomponents/index';
import { OrderSummaryDetailSection } from './../../components/order/OrderSummaryDetailSection';
import { OrderCardAdressDetailSection } from '@/components/order';
import { useEffect, useState } from 'react';
import { UserService } from '@/services/userService';
import { useRouter } from 'next/router';
import { OrderDetailModel } from '@/models/ProductModel';


export default function OrderItem() {
    const [order, setOrder] = useState<OrderDetailModel>({});
    const router = useRouter();
    const PageStyle = styled.div`
    width: 100%;
    padding: 40px 4%;

    >h1{
        text-align: start;
        margin-bottom: 56px;
        font-size: 26px;
    }
    >div{
        display: flex;
        justify-content: space-between;
    }
  `;

    useEffect(() => {
        async function getOrder() {
            const userService: UserService = new UserService();
            const response = await userService.getUserOrder(router.query.id?.toString());
            setOrder(response.data);
        }
        getOrder();
    }, [])

    return (
        <>
            <PageStyle>
                <SectionTitleStyle>Single Order</SectionTitleStyle>
                <div>
                    <OrderCardAdressDetailSection selectedAddress={order.address} selectedCard={order.payment_method} />
                    <OrderSummaryDetailSection delivery_charge={order.delivery_charge} final_amount={order.final_amount} selectedProducts={order.order_products} />
                </div>
            </PageStyle>

        </>

    )
}
