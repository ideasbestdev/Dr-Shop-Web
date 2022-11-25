import { FooterStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AssetsImages, PageUrls } from '@/utils/index';
import Link from 'next/link';

export function Footer() {
    return (
        <FooterStyle>
            <div>
                <article>
                    <div><Image src={AssetsImages.footer_logo} /></div>
                    <div>One-stop-shop for clinical offices to compare and save on medical supplies and equipment from different manufacturers. Membership free and exclusively for licensed physicians.</div>
                </article>
            </div>
            <div>
                <ul>
                    <li>
                        <ul>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Categories</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Our Services</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Hot Deals</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Brands</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Policies</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link href={PageUrls.REGISTER}>
                                    <a>Register Now</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Track your order</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Refer a Friend</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <Link href={PageUrls.HOME}>
                                    <a>Become a Ventor</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </FooterStyle>
    )
}