import { BannerSectionStyle, DescriptionStyle, LinkButtonStyle, TitleStyle } from '@/styledcomponents/index'
import Link from 'next/link'
import React from 'react'
import { AssetsImages, PageUrls } from '@/utils/index';
import Image from 'next/image';

export function BannerSection() {
    return (
        <BannerSectionStyle>
            <div>
                <article>
                    <TitleStyle>Medical Supply Marketplace</TitleStyle>
                    <DescriptionStyle>One-stop-shop for clinical offices to compare and save on medical supplies and equipment from different manufacturers. Membership free and exclusively for licensed physicians.</DescriptionStyle>
                    <Link href={PageUrls.HOME}>
                        <LinkButtonStyle>
                            Shop Now
                        </LinkButtonStyle>
                    </Link>
                </article>
            </div>
            <div>
                <Image src={AssetsImages.homeBanner} />
            </div>
        </BannerSectionStyle>
    )
}