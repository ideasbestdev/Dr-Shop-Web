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
                            <Image alt='medical' src={AssetsImages.medical} />
                        </div>
                        <h3>Medical</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image alt='surgical' src={AssetsImages.surgical} />
                        </div>
                        <h3>Surgical</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image alt='dental' src={AssetsImages.dental} />
                        </div>
                        <h3>Dental</h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image alt='optical' src={AssetsImages.optical} />
                        </div>
                        <h3>Optical </h3>
                    </a>
                </li>
                <li>
                    <a>
                        <div className='image_container'>
                            <Image alt='solaruim' src={AssetsImages.solaruim} />
                        </div>
                        <h3>Solaruim</h3>
                    </a>
                </li>
            </ul>
        </CategorySectionStyle>
    )
}
