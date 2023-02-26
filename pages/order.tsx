import { useSelector } from 'react-redux'
import { OrderCardAdressSection, OrderSummarySection } from '@/components/order';
import styled from 'styled-components';
import { SectionTitleStyle } from '@/styledcomponents/index';


export default function Order() {
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
    return (
        <>
            <PageStyle>
                <SectionTitleStyle>Confirm and Pay</SectionTitleStyle>
                <div>
                    <OrderCardAdressSection />
                    <OrderSummarySection />
                </div>
            </PageStyle>

        </>

    )
}
Order.auth = true;