import { CartSectionStyle, LinkButtonStyle, SectionTitleStyle, TitleStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { CartIcon, DeleteIcon, EditIcon, SubtotalIcon } from '../icons'
import { AssetsImages } from '@/utils/index';
import { useEffect } from 'react';
import { useState } from 'react';


export async function getStaticProps() {
    return {
        props: {
        },
    }
}


export function CartSection() {
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setTimeout(function () {
            setLoad(true);
        }, 1000)
    }, [])

    return (
        <CartSectionStyle>
            <SectionTitleStyle>Shopping Cart</SectionTitleStyle>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='subTotal'><SubtotalIcon /><span>Subtotal</span></td>
                        <td>$400</td>
                    </tr>
                    <tr>
                        <td><div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div></td>
                        <td>Anti bacterial sanitizor</td>
                        <td>x 1</td>
                        <td>$20</td>
                        <td><EditIcon /></td>
                        <td><DeleteIcon color='#777777' /></td>
                    </tr>
                    <tr>
                        <td><div><Image src={AssetsImages.mask} alt="protexProduct" /></div></td>
                        <td>3m Mask Steriled</td>
                        <td>x 1</td>
                        <td>$20</td>
                        <td><EditIcon /></td>
                        <td><DeleteIcon color='#777777' /></td>
                    </tr>
                    <tr>
                        <td><div><Image src={AssetsImages.protexProduct} alt="protexProduct" /></div></td>
                        <td>Anti bacterial sanitizor</td>
                        <td>x 1</td>
                        <td>$20</td>
                        <td><EditIcon /></td>
                        <td><DeleteIcon color='#777777' /></td>
                    </tr>
                </tbody>
            </table>
            <LinkButtonStyle>Proceed to Checkout</LinkButtonStyle>
        </CartSectionStyle>
    )
}