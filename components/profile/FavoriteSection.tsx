import { FavoriteSectionStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AssetsImages } from '@/utils/index';
import { CartIcon } from '../icons';

export function FavoriteSection() {
    return (
        <FavoriteSectionStyle>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><div><Image src={AssetsImages.protexProduct} /></div><div> Anti bacterial sanitizor<span>$20</span></div></td>
                            <td><CartIcon color='#000' /></td>
                        </tr>
                        <tr>
                            <td><div><Image src={AssetsImages.protexProduct} /></div><div> Anti bacterial sanitizor<span>$20</span></div></td>
                            <td><CartIcon color='#000' /></td>
                        </tr>
                        <tr>
                            <td><div><Image src={AssetsImages.protexProduct} /></div><div> Anti bacterial sanitizor<span>$20</span></div></td>
                            <td><CartIcon color='#000' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FavoriteSectionStyle>
    )
}

