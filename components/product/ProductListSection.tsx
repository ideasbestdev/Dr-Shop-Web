import { PageNumberStyle, ProductListSectionStyle } from '@/styledcomponents/index'
import Link from 'next/link';
import React from 'react'
import { ProductItem } from './ProductItem';

export function ProductListSection() {
    const a = new Array<number>(30).fill(0);

    return (
        <>
            <ProductListSectionStyle>
                <div>
                    Items 1-24 of 4915
                </div>
                <ul>
                    {
                        a.map(value => <li><ProductItem /></li>)
                    }
                </ul>
                <ul>
                    <PageNumberStyle selected={true}><Link href={"/"}><a>1</a></Link></PageNumberStyle>
                    <PageNumberStyle><Link href={"/"}><a>2</a></Link></PageNumberStyle>
                    <PageNumberStyle><Link href={"/"}><a>3</a></Link></PageNumberStyle>
                    <PageNumberStyle><Link href={"/"}><a>4</a></Link></PageNumberStyle>
                </ul>
            </ProductListSectionStyle>
        </>
    )
}
