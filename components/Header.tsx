import React from 'react';
import { AppHeader, IconText, InputIcon } from '@/styledcomponents/index';
import Link from 'next/link';
import { PageUrls, AssetsImages } from '@/utils/index';
import Image from 'next/image';
import { BurgerIcon, SearchIcon, UserIcon, CartIcon } from './icons/';


function Header() {
    return (
        <AppHeader style={{ backgroundImage: "linear-gradient(to bottom,#7BDCC2 30%, #5CA390 60%, #3E6E61 100%)" }}>
            <div>
                your account under review please be patient until  admin approve your request
            </div>
            <ul>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a><Image src={AssetsImages.logo} /> </a>
                    </Link>
                    <ul>
                        <li>
                            <BurgerIcon color="#fff" />
                        </li>
                        <li>
                            Categories
                        </li>
                        <li>
                            Industries
                        </li>
                        <li>
                            Brands
                        </li>
                    </ul>
                </li>
                <li>
                    <InputIcon>
                        <i><SearchIcon color='#845FA1' /></i>
                        <input type={"text"} placeholder="Search" />
                    </InputIcon>
                    <div>
                        <IconText>
                            <i><CartIcon color='#fff' /></i>
                            Cart
                        </IconText>
                        <IconText>
                            <i><UserIcon color='#fff' /></i>
                            User
                        </IconText>
                    </div>
                </li>
            </ul>
        </AppHeader>
    )
}

export default Header