import { CategorySectionStyle, SectionTitleStyle, SectionTitleWithLinkStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React from 'react'
import { AssetsImages } from '@/utils/index';

export function CategorySection() {
    return (
        <CategorySectionStyle>
            <SectionTitleWithLinkStyle>
                <SectionTitleStyle>All Categories</SectionTitleStyle>
            </SectionTitleWithLinkStyle>
            <ul>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image src={AssetsImages.medical} />
                        </div>
                        <h3>Medical</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image src={AssetsImages.surgical} />
                        </div>
                        <h3>Surgical</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image src={AssetsImages.dental} />
                        </div>
                        <h3>Dental</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image src={AssetsImages.optical} />
                        </div>
                        <h3>Optical </h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image src={AssetsImages.solaruim} />
                        </div>
                        <h3>Solaruim</h3>
                    </a>
                </li>
            </ul>
        </CategorySectionStyle>
    )
}
