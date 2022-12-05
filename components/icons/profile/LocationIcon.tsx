import React from 'react'

interface Props {
    color?: string;
}
export function LocationIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.183" height="21.836" viewBox="0 0 19.183 21.836">
            <g id="location-marker_1" data-name="location-marker 1" transform="translate(1.007 1)">
                <g id="Group" transform="translate(0 0)">
                    <path id="Vector" d="M14.654,14.654,10.1,19.207a2.144,2.144,0,0,1-3.033,0L2.514,14.654a8.584,8.584,0,1,1,12.14,0Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Vector-2" data-name="Vector" d="M6.438,3.219A3.219,3.219,0,1,1,5.5.943a3.219,3.219,0,0,1,.943,2.276Z" transform="translate(5.365 5.365)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </g>
            </g>
        </svg>

    )
}