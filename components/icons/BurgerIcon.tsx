import React from 'react'

interface Props {
    color?: string;
}
export function BurgerIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22.16" height="13.583" viewBox="0 0 22.16 13.583">
            <path id="Path_156" data-name="Path 156" d="M3,8H23.16M6.1,13.792H20.059M3,19.583H23.16" transform="translate(-2 -7)" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>

    )
}