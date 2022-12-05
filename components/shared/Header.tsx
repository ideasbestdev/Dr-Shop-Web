import React, { useEffect, useState } from 'react';
import { HeaderStyle, IconTextStyle, InputIconStyle } from '@/styledcomponents/index';
import Link from 'next/link';
import { PageUrls, AssetsImages } from '@/utils/index';
import Image from 'next/image';
import { SearchIcon, UserIcon, CartIcon, MenuIcon } from '../icons';
import { useSelector } from 'react-redux';
import { getUserState } from '@/statemangment/slice/userSlice';


export function Header() {
    const [headerScroll, setHeaderScroll] = useState(false);
    const { isAuthenticated } = useSelector(getUserState);


    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 150 && !headerScroll) {
                setHeaderScroll(true);
            }
            else if (window.scrollY <= 150) {
                setHeaderScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <HeaderStyle isScroll={headerScroll}>
            <div>
                your account under review please be patient until admin approves your request
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href={PageUrls.HOME}>
                            <a><Image src={AssetsImages.logo} alt="logo" /> </a>
                        </Link>
                    </li>
                    <li>
                        Welcome!
                    </li>
                    <li>
                        <InputIconStyle>
                            <i><SearchIcon color='#9b9b9b' /></i>
                            <input type={"text"} />
                        </InputIconStyle>
                    </li>
                    <li>
                        <Link href={isAuthenticated ? PageUrls.PROFILE : PageUrls.LOGIN}>
                            <a>
                                <i><UserIcon color='#9b9b9b' /></i>
                            </a>
                        </Link>
                        <Link href={PageUrls.HOME}>
                            <a>
                                <i><CartIcon color='#9b9b9b' /></i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link href={PageUrls.HOME}>
                            <a>
                                <IconTextStyle marginRight='20px'>
                                    <i><MenuIcon color='#ffffff' /></i>
                                    Categories
                                </IconTextStyle>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={PageUrls.HOME}>
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={PageUrls.HOME + "#service-section"}>
                            <a>Our Services</a>
                        </Link>
                    </li>
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
                        <Link href={PageUrls.REGISTER}>
                            <a>Register Now</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={PageUrls.HOME}>
                            <a>Become a Ventor</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}