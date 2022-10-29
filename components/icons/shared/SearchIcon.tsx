import React from 'react'

interface Props {
    color?: string;
}
export function SearchIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.031" height="19.031" viewBox="0 0 19.031 19.031">
            <path id="Vector" d="M17.031,17.031l-5.677-5.677ZM13.246,6.623a6.623,6.623,0,1,1-1.94-4.683A6.623,6.623,0,0,1,13.246,6.623Z" transform="translate(1 1)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    )
}

