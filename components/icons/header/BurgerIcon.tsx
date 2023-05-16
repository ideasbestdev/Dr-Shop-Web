import React from 'react'

interface Props {
    color?: string;
}
export function BurgerIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15">
            <g id="Group_1362" data-name="Group 1362" transform="translate(-20.5 -25)">
                <path id="Line_50" data-name="Line 50" d="M22,.5H0v-1H22Z" transform="translate(20.5 25.5)" fill="#2262bc" />
                <path id="Line_51" data-name="Line 51" d="M22,.5H0v-1H22Z" transform="translate(20.5 32.5)" fill="#2262bc" />
                <path id="Line_52" data-name="Line 52" d="M22,.5H0v-1H22Z" transform="translate(20.5 39.5)" fill="#2262bc" />
            </g>
        </svg>

    )
}