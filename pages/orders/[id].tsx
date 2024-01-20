import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { SectionTitleStyle } from '@/styledcomponents/index';
import { OrderSummaryDetailSection } from './../../components/order/OrderSummaryDetailSection';
import { OrderCardAdressDetailSection } from '@/components/order';
import { useEffect, useState } from 'react';
import { UserService } from '@/services/userService';
import { useRouter } from 'next/router';
import { OrderDetailModel } from '@/models/ProductModel';
import { CloseIcon, RightArrowIcon } from '@/components/icons';


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
                <div className='close_icon' onClick={() => router.push("/profile#order")}><i className='my_arrow_back'><RightArrowIcon /> </i> <span>Back</span></div>
                <SectionTitleStyle>Order Number: {router.query.id}</SectionTitleStyle>
                <div>
                    <OrderCardAdressDetailSection selectedAddress={order.address} selectedCard={order.payment_method} order={order} />
                    <OrderSummaryDetailSection tax_amount={order.tax_amount} delivery_charge={order.delivery_charge} final_amount={order.final_amount} selectedProducts={order.order_products} />
                </div>
            </PageStyle>

        </>

    )
}
