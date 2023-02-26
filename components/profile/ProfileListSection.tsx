import { ProfileListSectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React, { useState } from 'react'
import { HeartIcon, LocationIcon, LogoutIcon, MasterCardIcon, OrderIcon, PrivacyPolicyIcon, SettingIcon, UserIcon } from '../icons'
import { EditProfileSection, AddLocationSection, FavoriteProfile, AddCardSection } from '@/components/profile';
import { AssetsImages, TOKEN_KEY_NAME } from '@/utils/index';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@/statemangment/slice/globalSlice';
import { useRouter } from 'next/router';

interface Props {
    renderChange: any
}

export function ProfileListSection({ renderChange }: Props) {
    const dispatch = useDispatch();
    const router = useRouter();
    const [selected, setSelected] = useState(1);
    function logout() {
        Cookies.remove(TOKEN_KEY_NAME);
        dispatch(setUser(null));
        router.replace("/")
    }
    return (
        <ProfileListSectionStyle selected={selected}>
            <ul>
                <li onClick={() => { setSelected(1); renderChange(EditProfileSection) }}><a><div className="image_container"><Image src={AssetsImages.user} /></div>Edit Profile</a></li>
                <li onClick={() => { setSelected(2); renderChange(AddLocationSection) }}><a><div className="image_container"><Image src={AssetsImages.address} /></div>Shipping Address</a></li>
                <li onClick={() => { setSelected(1); renderChange(AddCardSection) }}><a><div className="image_container"><Image src={AssetsImages.onlinepayment} /></div>Add Card</a></li>
                <li onClick={() => { setSelected(4); renderChange(FavoriteProfile) }}><a><div className="image_container"><Image src={AssetsImages.favourite} /></div>Favorites</a></li>
                <li><a><div className="image_container"><Image src={AssetsImages.order} /></div>Orders</a></li>
                <li><Link href={""}><a><SettingIcon color='#003177' />Settings</a></Link></li>
                <li><Link href={""}><a><PrivacyPolicyIcon color='#003177' />Privacy & Policy</a></Link></li>
                <li><a onClick={() => logout()}><LogoutIcon color='#003177' />Logout</a></li>
            </ul>
        </ProfileListSectionStyle>
    )
}
