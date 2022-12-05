import { BackToTopSectionStyle, SectionTitleStyle } from '@/styledcomponents/index'
import { PageUrls } from '@/utils/urls'
import Link from 'next/link'
import React from 'react'

export function BackToTopSection() {
    return (
        <BackToTopSectionStyle>
            <Link href={PageUrls.HOME} prefetch={false}>
                <a>Back to top</a>
            </Link>
        </BackToTopSectionStyle>
    )
}

