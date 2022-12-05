import React from 'react'

interface Props {
    color?: string;
}
export function OrderIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17.022" height="21.315" viewBox="0 0 17.022 21.315">
            <path id="Vector" d="M4.292,2.146H2.146A2.146,2.146,0,0,0,0,4.292V17.169a2.146,2.146,0,0,0,2.146,2.146h10.73a2.146,2.146,0,0,0,2.146-2.146V4.292a2.146,2.146,0,0,0-2.146-2.146H4.292Zm0,0A2.146,2.146,0,0,0,6.438,4.292H8.584A2.146,2.146,0,0,0,10.73,2.146Zm0,0A2.146,2.146,0,0,1,6.438,0H8.584A2.146,2.146,0,0,1,10.73,2.146ZM7.511,9.657h0Zm0,4.292h0ZM4.292,9.657h0Zm0,4.292H4.3" transform="translate(1 1)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>

    )
}