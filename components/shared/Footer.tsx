import { FooterStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React from 'react'
import { FacebookIcon, FooterLogo, GoogleIcon, HeadPhone, TwitterIcon } from '../icons'

export function Footer() {
    return (
        <FooterStyle>
            <section className='middle_container'>
                <Link href={""}>
                    <a>
                        <FooterLogo />
                    </a>
                </Link>
                <nav>
                    <ul className='links_group'>
                        <li className='item'>
                            <h2>Categories</h2>
                            <ul className='subItem'>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Medical
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Surgical
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Dental
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Optical
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Solaruim
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='item'>
                            <h2>Customer Care</h2>
                            <ul className='subItem'>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            My Account
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Order Tracking
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Wish List
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Contact Us
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            About
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className='item'>
                            <h2>Brands</h2>
                            <ul className='subItem'>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Philips
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Abbott
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Johnson
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            Medtronic
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""}>
                                        <a>
                                            See All
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className='contact_info'>
                    <div className='top_content'>
                        <i>
                            <HeadPhone />
                        </i>
                        <div className='right_content'>
                            <span>Got questions? Call us!</span>
                            <Link href={"tel:+961 70 123 456 8"}><a>+961 70 123 456 8</a></Link>
                        </div>
                    </div>
                    <div className='middle_content'>
                        <h2>Contact info</h2>
                        <address>Lebanon, Beirut, Main Street</address>
                    </div>
                    <div className='bottom_content'>
                        <ul>
                            <li>
                                <Link href={""}>
                                    <a>
                                        <FacebookIcon />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>
                                        <GoogleIcon />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <a>
                                        <TwitterIcon />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className='bottom_container'>
                <Link href={""}>
                    <a>© Ideas - All rights Reserved</a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href={""}>
                                Terms and Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </FooterStyle>
    )
}