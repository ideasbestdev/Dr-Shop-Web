import { SectionTitleStyle, ServiceSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AssetsImages } from '@/utils/index';

export function ServiceSection() {
    return (
        <ServiceSectionStyle>
            <SectionTitleStyle>Our Services</SectionTitleStyle>
            <ul>
                <li>
                    <div><Image src={AssetsImages.oneStopIcon} /></div>
                    <h1>One Stop-Shop</h1>
                    <div>Shop and compare products from a variety of suppliers.</div>
                </li>
                <li>
                    <div><Image src={AssetsImages.customerIcon} /></div>
                    <h1>Customer Service</h1>
                    <div>Our team is responsive & committed to your success.</div>
                </li>
                <li>
                    <div><Image src={AssetsImages.inventoryIcon} /></div>
                    <h1>Inventory Management</h1>
                    <div>A supply manager is integrated into your account to manage inventory.</div>
                </li>
                <li>
                    <div><Image src={AssetsImages.deliveryIcon} /></div>
                    <h1>Delivery</h1>
                    <div>Delivery drivers collect items & transport them to their destinations.</div>
                </li>
            </ul>
        </ServiceSectionStyle>
    )
}