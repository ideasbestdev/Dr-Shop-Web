import { ProfileListSectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React, { useState } from 'react'
import { HeartIcon, LocationIcon, LogoutIcon, MasterCardIcon, OrderIcon, PrivacyPolicyIcon, SettingIcon, UserIcon } from '../icons'
import { EditProfileSection, AddLocationSection, FavoriteProfile, AddCardSection, CartProfileSection } from '@/components/profile';
import { AssetsImages, TOKEN_KEY_NAME } from '@/utils/index';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@/statemangment/slice/globalSlice';
import { useRouter } from 'next/router';
import LocationList from './LocationList';
import CardList from './CardList';
import { CartSection } from '@/components/cart';
import OrderList from './OrderList';

interface Props {
    renderChange: any,
    selected: number,
}

export function ProfileListSection({ renderChange, selected }: Props) {
    const dispatch = useDispatch();
    const router = useRouter();
    function logout() {
        Cookies.remove(TOKEN_KEY_NAME);
        dispatch(setUser(null));
        router.replace("/")
    }
    return (
        <ProfileListSectionStyle selected={selected}>
            <ul>
                <li onClick={() => { renderChange(EditProfileSection, 1) }}><a><div className="image_container"><Image alt='user' src={AssetsImages.user} /></div>Profile</a></li>
                <li onClick={() => { renderChange(OrderList, 2); }}><a><div className="image_container"><Image alt='order' src={AssetsImages.order} /></div>Orders</a></li>
                <li onClick={() => { renderChange(CardList, 3); }}><a><div className="image_container"><Image alt='onlinepayment' src={AssetsImages.onlinepayment} /></div>payment method</a></li>
                <li onClick={() => { renderChange(LocationList, 4) }}><a><div className="image_container"><Image alt='address' src={AssetsImages.address} /></div>Addresses</a></li>
                <li onClick={() => { renderChange(CartProfileSection, 5) }}><a><div className="image_container"><Image alt='cart' src={AssetsImages.cart} /></div>Cart</a></li>
                <li onClick={() => { renderChange(FavoriteProfile, 6) }}><a><div className="image_container"><Image alt='favourite' src={AssetsImages.favourite} /></div>Favorites</a></li>
                <li><a onClick={() => logout()} className="logout">Sign Out</a></li>
            </ul>
        </ProfileListSectionStyle>
    )
}
