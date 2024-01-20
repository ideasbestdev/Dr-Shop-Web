import { CustomRatingStyle } from '@/styledcomponents/index';
import React from 'react'
import { RatingIcon } from '../icons'

interface Props {
    rate: number
}

export function CustomRating({ rate }: Props) {
    const arr = Array<number>(rate).fill(0);
    return (
        <CustomRatingStyle>
            {
                arr.map((value, i) => <li key={i}><RatingIcon /></li>)
            }
        </CustomRatingStyle>
    )
}