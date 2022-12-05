import React from 'react'

interface Props {
    color?: string;
}
export function MasterCardIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21.315" height="17.022" viewBox="0 0 21.315 17.022">
            <path id="Vector" d="M0,5.365H0ZM4.292,10.73h0Zm5.365,0h0ZM3.219,15.022H16.1A3.219,3.219,0,0,0,19.315,11.8V3.219A3.219,3.219,0,0,0,16.1,0H3.219A3.219,3.219,0,0,0,0,3.219V11.8a3.219,3.219,0,0,0,3.219,3.219Z" transform="translate(1 1)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>


    )
}