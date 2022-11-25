import { LinkButtonStyle, OrderSummarySectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React from 'react'

export function OrderSummarySection() {
    return (
        <OrderSummarySectionStyle>
            <div>
                <SectionTitleStyle>Order Summary</SectionTitleStyle>
                <ul>
                    <li><h2>Subtotal</h2><span>$220</span></li>
                    <li><h2>Taxes</h2><span>$50</span></li>
                    <li><h2>Shipping</h2><span>$50</span></li>
                    <li><h3>Total</h3><span>$320</span></li>
                </ul>
            </div>
            <Link href={""}><LinkButtonStyle>Place Order</LinkButtonStyle></Link>
            <span>How are shipping costs calculated? <br /> Need help? Check our Help pages or <Link href={""}><a>contact us</a></Link></span>
        </OrderSummarySectionStyle>
    )
}
