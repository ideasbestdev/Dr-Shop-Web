import { SectionTitleStyle, ServiceSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AssetsImages } from '@/utils/index';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function ServiceSection() {
    return (
        <ServiceSectionStyle id='service-section'>
            <SectionTitleStyle className='wow slideInUp'>Our Services</SectionTitleStyle>
            <ul>
                <li>
                    <article className='wow slideInUp'>
                        <div><Image src={AssetsImages.oneStopIcon} /></div>
                        <h1>One Stop-Shop</h1>
                        <div>Shop and compare products from a variety of suppliers.</div>
                    </article>
                </li>
                <li>
                    <article data-wow-delay="0.3s" className='wow slideInUp'>
                        <div><Image src={AssetsImages.customerIcon} /></div>
                        <h1>Customer Service</h1>
                        <div>Our team is responsive & committed to your success.</div>
                    </article>
                </li>
                <li>
                    <article data-wow-delay="0.6s" className='wow slideInUp'>
                        <div><Image src={AssetsImages.inventoryIcon} /></div>
                        <h1>Inventory Management</h1>
                        <div>A supply manager is integrated into your account to manage inventory.</div>
                    </article>
                </li>
                <li>
                    <article data-wow-delay="0.9s" className='wow slideInUp'>
                        <div><Image src={AssetsImages.deliveryIcon} /></div>
                        <h1>Delivery</h1>
                        <div>Delivery drivers collect items & transport them to their destinations.</div>
                    </article>
                </li>
            </ul>
        </ServiceSectionStyle>
    )
}