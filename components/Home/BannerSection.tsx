import { LinkButtonStyle, TitleStyle } from "@/styledcomponents/index";
import React from "react";
import { AssetsImages } from '@/utils/index';
import Image from 'next/image';
import styled from "styled-components";

export function BannerSection() {
    const MyBannerSectionStyle = styled.section`
    display: flex;
    position: relative;
    .content{
        z-index: 1;
        position: absolute;
        padding: 0 4%;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1{
            max-width: 470px;
            color: #fff;
        }
        a{
            color: #fff;
            background-color: #89CA00;
            width: 266px;
            height: 70px;
        }
    }
    .image_container{
        width: 100%;
        min-height: 550px;
        img{
            object-fit: cover;
        }
    }
`
    return (
        <MyBannerSectionStyle>
            <section className='content'>
                <TitleStyle>Now You Can Have Your DOWNLOAD APP Done Safely</TitleStyle>
                <LinkButtonStyle>
                    DOWNLOAD APP
                </LinkButtonStyle>
            </section>
            <div className='image_container'>
                <Image src={AssetsImages.homeBanner} alt="homeBanner" />
            </div>
        </MyBannerSectionStyle>
    )
}