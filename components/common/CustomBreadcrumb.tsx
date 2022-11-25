import React from 'react'
import { BreadcrumbStyle } from '@/styledcomponents/index'
import { BreadcrumbModel } from '@/models/index'
import Link from 'next/link'

interface Props {
    breadcrumb: BreadcrumbModel[]
}

export function CustomBreadcrumb({ breadcrumb }: Props) {
    return (
        <BreadcrumbStyle>
            {
                breadcrumb.map((value: BreadcrumbModel, index: number) => <>{index != 0 ? " > " : " "}<Link href={value.link}><a>{value.title}</a></Link></>)
            }
        </BreadcrumbStyle>
    )
}