import { CategorySectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import React from 'react'
import { BedIcon, LabIcon, MaskIcon, OxygenIcon, SerinkIcon, SurgicalIcon, TestorsIcon, UniformIcon } from '../icons'
import { generateRandomNumber } from '@/helpers/index';
import Link from 'next/link';
import { PageUrls } from '@/utils/urls';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export function CategorySection() {
    return (
        <CategorySectionStyle>
            <SectionTitleStyle className='wow slideInUp'>Categories</SectionTitleStyle>
            <ul>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a className='wow slideInUp'>
                            <i><MaskIcon color={"#003177"} id={`clipPath-MaskIcon`} /></i>
                            <h2>Masks</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.3s" className='wow slideInUp'>
                            <i><SurgicalIcon color={"#003177"} id={`clipPath-SurgicalIcon`} /></i>
                            <h2>Surgical Tools</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.6s" className='wow slideInUp'>
                            <i><OxygenIcon color={"#003177"} id={`clipPath-OxygenIcon`} /></i>
                            <h2>Oxygen Generators</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.9s" className='wow slideInUp'>
                            <i><TestorsIcon color={"#003177"} id={`clipPath-TestorsIcon`} /></i>
                            <h2>Testors</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.3s" className='wow slideInUp'>
                            <i><UniformIcon color={"#003177"} id={`clipPath-UniformIcon`} /></i>
                            <h2>Uniform</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.6s" className='wow slideInUp'>
                            <i><BedIcon color={"#003177"} id={`clipPath-BedIcon`} /></i>
                            <h2>Beds</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="0.9s" className='wow slideInUp'>
                            <i><LabIcon color={"#003177"} id={`clipPath-LabIcon`} /></i>
                            <h2>Lab Tools</h2>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={PageUrls.HOME}>
                        <a data-wow-delay="1.2s" className='wow slideInUp'>
                            <i><SerinkIcon color={"#003177"} id={`clipPath-SerinkIcon`} /></i>
                            <h2>Serink</h2>
                        </a>
                    </Link>
                </li>
            </ul>
        </CategorySectionStyle>
    )
}
