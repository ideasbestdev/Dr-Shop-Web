import React from 'react'

interface Props {
    color?: string;
}
export function ArrowDownIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="9.019" height="6.854" viewBox="0 0 9.019 6.854">
            <g id="chevron-right_1" data-name="chevron-right 1" transform="translate(7.626 1.392) rotate(90)">
                <g id="Group" transform="translate(0 0)">
                    <path id="Vector" d="M0,0,4.462,3.117,0,6.234" transform="translate(0 0)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </g>
        </svg>

    )
}