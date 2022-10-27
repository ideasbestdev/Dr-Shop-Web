import React from 'react'

interface Props {
    color?: string;
}
export function UserIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 12.75 15.965">
            <g id="Group" transform="translate(0.75 0.75)">
                <path id="Vector" d="M6.429,3.214A3.214,3.214,0,1,1,5.487.941a3.214,3.214,0,0,1,.941,2.273Z" transform="translate(2.411 0)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path id="Vector-2" data-name="Vector" d="M5.625,0A5.625,5.625,0,0,0,0,5.625H11.25A5.625,5.625,0,0,0,5.625,0Z" transform="translate(0 8.84)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
        </svg>


    )
}

