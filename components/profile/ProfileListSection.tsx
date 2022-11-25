import { ProfileListSectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React, { useState } from 'react'
import { UserIcon } from '../icons'
import { EditProfileSection, AddLocationSection, FavoriteSection } from '@/components/profile';

interface Props {
    renderChange: any
}

export function ProfileListSection({ renderChange }: Props) {

    const [selected, setSelected] = useState(1);

    return (
        <ProfileListSectionStyle selected={selected}>
            <SectionTitleStyle>User Profile</SectionTitleStyle>
            <ul>
                <li onClick={() => { setSelected(1); renderChange(EditProfileSection) }}><a><UserIcon color='#003177' />Edit Profile</a></li>
                <li onClick={() => { setSelected(2); renderChange(AddLocationSection) }}><a><UserIcon color='#003177' />Shipping Address</a></li>
                <li><Link href={""}><a><UserIcon color='#003177' />Add Card</a></Link></li>
                <li onClick={() => { setSelected(4); renderChange(FavoriteSection) }}><Link href={""}><a><UserIcon color='#003177' />Favorites</a></Link></li>
                <li><Link href={""}><a><UserIcon color='#003177' />Orders</a></Link></li>
                <li><Link href={""}><a><UserIcon color='#003177' />Settings</a></Link></li>
                <li><Link href={""}><a><UserIcon color='#003177' />Privacy & Policy</a></Link></li>
                <li><Link href={""}><a><UserIcon color='#003177' />Logout</a></Link></li>
            </ul>
        </ProfileListSectionStyle>
    )
}
