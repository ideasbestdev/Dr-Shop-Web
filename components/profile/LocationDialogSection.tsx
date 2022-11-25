import { LocationDialogStyle, SectionTitleStyle } from '@/styledcomponents/index'
import { AssetsImages } from '@/utils/images'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface Props {
    show: boolean,
    setShow: any
}

export function LocationDialogSection({ show, setShow }: Props) {

    const handleClick = () => {
        setShow(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener("keydown", (e) => e.key == "Escape" ? setShow(false) : null);
    }, [])

    return (
        <LocationDialogStyle show={show}>
            <div onClick={(e) => e.stopPropagation()} >
                <div onClick={() => setShow(false)}><Image src={AssetsImages.circleCloseIcon} /></div>
                <SectionTitleStyle>Home Address</SectionTitleStyle>
                <ul>
                    <li><h2>State: </h2><span>Michigan</span></li>
                    <li><h2>City: </h2><span>Detroit</span></li>
                    <li><h2>Street: </h2><span>Bagley Street Streetscape Project</span></li>
                    <li><h2>Zip Code: </h2><span>0000</span></li>
                </ul>
            </div>
        </LocationDialogStyle>
    )
}
