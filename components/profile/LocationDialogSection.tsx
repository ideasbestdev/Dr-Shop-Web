import { LocationDialogStyle, SectionTitleStyle } from '@/styledcomponents/index'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface Props {
    show: boolean,
    setShow: any
}

export function LocationDialogSection({ show, setShow }: Props) {


    useEffect(() => {
        const handleClick = () => {
            setShow(false)
        }
        document.addEventListener('click', handleClick);
        document.addEventListener("keydown", (e) => e.key == "Escape" ? setShow(false) : null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <LocationDialogStyle show={show}>
            <div onClick={(e) => e.stopPropagation()} >
                <div onClick={() => setShow(false)}><Image src={""} alt="circleCloseIcon" /></div>
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
