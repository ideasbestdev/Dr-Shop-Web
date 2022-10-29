import styled from 'styled-components';
import { Theme } from '../Theme';

interface Prop {
    theme: Theme,
    isScroll?: boolean,
}

export const HeaderStyle = styled.header<Prop>`
    position: fixed;
    left: 0;
    top: 0;
    height: ${({ theme, isScroll }: Prop) => isScroll ? theme.height.header_scroll : theme.height.header};
    width: 100%;
    z-index: 99;
    transition: height 0.3s;

    >div{
        background-color:  ${({ theme }: Prop) => theme.backgroundcolors.background_top_header};
        height: ${({ theme, isScroll }: Prop) => isScroll ? theme.height.top_header_scroll : theme.height.top_header};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 0 4%;
        color:  ${({ theme }: Prop) => theme.textColors.text_color_top_header};
        transition: height 0.3s;

    }
    nav{
        ul{
            display: flex;
            width: 100%;
            align-items: center;
            padding: 0 4%;
            color:  ${({ theme }: Prop) => theme.textColors.text_color_middle_header};
        }
       
        &:nth-child(2){
            background-color: ${({ theme }: Prop) => theme.backgroundcolors.background_middle_header};

            ul{
                height: ${({ theme, isScroll }: Prop) => isScroll ? theme.height.middle_header_scroll : theme.height.middle_header};
                transition: height 0.3s;
                li{
                    &:nth-child(1){
                        display: flex;
                        > a{
                            max-width: ${({ isScroll }: Prop) => isScroll ? "150px" : "244px"};
                        }
                    }
                    &:nth-child(2){
                        font-size: 24px;
                        margin: 0 32px;
                        font-family: ${({ theme }: Prop) => theme.fonts.semi_bold};
                        color: #6E6E6E;
                    }
                    &:nth-child(3){
                         flex: 1;
                    }
                    &:nth-child(4){
                        display: flex;
                        a{
                            &:nth-child(1){
                                margin: 0 34px;
                            }
                            &:nth-child(2){
                                position: relative;
                                &::before{
                                    content: '';
                                    background-color: ${({ theme }: Prop) => theme.globalColors.secondary_color};
                                    width: 9px;
                                    height: 9px;
                                    border-radius: 50%;
                                    position: absolute;
                                    right: -3px;
                                    top: -3px;
                                }
                            }
                        }
                    }
                }
            }

            svg{
                &:hover{
                    path{
                        transition: stroke 0.3s;
                        stroke: ${({ theme }: Prop) => theme.globalColors.secondary_color} !important;
                    }
                }
            }
        }

        &:nth-child(3){
            background-color: ${({ theme }: Prop) => theme.globalColors.primary_color};
            ul{
                height: ${({ theme, isScroll }: Prop) => isScroll ? theme.height.bottom_header_scroll : theme.height.bottom_header};
                margin-left: -64px;
                width: calc(100% + 64px);
                padding-left: 129px;
                transition: height 0.3s;

                li{
                    margin-left: 64px;
                    a{
                        color:  ${({ theme }: Prop) => theme.textColors.text_color_bottom_header};
                        &:hover{
                            transition: color 0.3s;
                            color: ${({ theme }: Prop) => theme.globalColors.secondary_color};
                            path{
                                transition: fill 0.3s;
                                fill: ${({ theme }: Prop) => theme.globalColors.secondary_color} !important;     
                            }
                        }
                    }
                }

            }
        }
    }
`