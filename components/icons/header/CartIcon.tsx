import React from 'react'

interface Props {
    color?: string;
}
export function CartIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 17.249 17">
            <path id="md-cart" d="M8.125,16.35A1.625,1.625,0,1,0,9.75,17.975,1.63,1.63,0,0,0,8.125,16.35ZM3.375,3.6V5.225H5L7.925,11.15,6.7,13.141a1.618,1.618,0,0,0,1.548,2.4h9.5V13.975h-9.3a.192.192,0,0,1-.2-.2,1.014,1.014,0,0,1,.086-.2l.812-1.281H15.2a1.594,1.594,0,0,0,1.422-.853L19.543,6.4A.949.949,0,0,0,19.624,6a.781.781,0,0,0-.813-.772H6.788L6.016,3.6Zm12.75,12.75a1.625,1.625,0,1,0,1.625,1.625A1.63,1.63,0,0,0,16.125,16.35Z" transform="translate(-2.875 -3.1)" fill="none" stroke={color} strokeWidth="1" />
        </svg>
    )
}

