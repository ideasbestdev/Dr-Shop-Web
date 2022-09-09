import React from 'react'

interface Props {
    color?: string;
}
export function CartIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25.071" height="21.214" viewBox="0 0 25.071 21.214">
            <path id="Path_2" data-name="Path 2" d="M-15.429,0a1.942,1.942,0,0,0-1.929-1.929A1.942,1.942,0,0,0-19.286,0a1.942,1.942,0,0,0,1.929,1.929A1.942,1.942,0,0,0-15.429,0Zm13.5,0A1.942,1.942,0,0,0-3.857-1.929,1.942,1.942,0,0,0-5.786,0,1.942,1.942,0,0,0-3.857,1.929,1.942,1.942,0,0,0-1.929,0ZM0-16.393a.971.971,0,0,0-.964-.964h-18.1c-.151-.723-.181-1.929-1.19-1.929h-3.857a.971.971,0,0,0-.964.964.971.971,0,0,0,.964.964h3.074l2.667,12.4a7.761,7.761,0,0,0-.919,2.064.971.971,0,0,0,.964.964H-2.893a.971.971,0,0,0,.964-.964.971.971,0,0,0-.964-.964H-16.754a2.282,2.282,0,0,0,.362-.964,5.008,5.008,0,0,0-.2-1.055L-.859-7.714A.988.988,0,0,0,0-8.679Z" transform="translate(25.071 19.286)" fill={color} />
        </svg>


    )
}

