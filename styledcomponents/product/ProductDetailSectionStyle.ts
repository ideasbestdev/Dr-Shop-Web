import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const ProductDetailSectionStyle = styled.section<Props>`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    >div{
        display: flex;
        flex-direction: column;
        &:nth-child(1){
            min-width: 300px;
            .swiper{
                max-width: 400px;
                margin-left: 0;
                margin-right: 0;
            }
            .thumbnails{
                padding: 10px;
                .swiper-slide{
                    opacity: 0.5;
                    width: 70px;
                    height: 70px;
                    border-radius: 19px;
                    box-shadow: 0px 3px 6px #00000038;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: opacity 0.3s;
                    cursor: pointer;
                    div{
                        max-width: 40px;
                        position: relative;
                    }
                    &:hover{
                        opacity: 1;    
                    }
                    &.my-swiper-slide-active{
                        opacity: 1;
                    }
                }

            }
            .images-swiper{
                width: 400px;
                height: 400px;
                box-shadow: 0px 3px 6px #00000038;
                border-radius: 19px;
                .swiper-slide{
                    display: flex;
                    align-items: center;
                    justify-content: center;    
                    div{
                        max-width: 80%;
                        max-height: 80%;
                    }
                }
                .swiper-pagination-bullet{
                    background-color: #EAEAEA;
                    opacity: 1;
                    transition: background-color 0.3s;
                    &:hover{
                        background-color: #CCCACA;
                    }
                    &.swiper-pagination-bullet-active{
                        background-color: #CCCACA;
                    }
                }
            }
        }

        &:nth-child(2){
            margin-left: 60px;
            h1{
                text-align: start;
            }
            .description{
                font-family: ${({ theme }: Props) => theme.fonts.italic};
                max-width: 460px;
                margin-top: 15px;
                line-height: 20px;
            }
            >ul{
                margin-top: 10px;
            }
            .price{
                font-family: ${({ theme }: Props) => theme.fonts.black};
                font-size: 32px;
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
                margin-top: 15px;
            }
            label{
                color: #6E6E6E;
                font-size: 14px;
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            }
            .sizes{
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                margin-top: 20px;

                div{
                    width: 50px;
                    height: 40px;
                    box-shadow: 0px 1px 6px #00000029;
                    margin-left: 15px;
                    margin-top: 0;
                }
            }
            .quantity{
                margin-top: 30px;
                display: flex;
                label{
                    margin-right: 20px;
                }
            }
            .colors{
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                margin-top: 30px;

                div{
                    margin-left: 25px;
                    margin-top: 0;
                    width: 20px;
                    height: 20px;
                    &::before{
                        width: 27px;
                        height: 27px;
                    }
                }
            }
            .expand{
                margin-top: 40px;
                a{
                    font-size: 14px;
                    color: #6E6E6E;
                    font-family: ${({ theme }: Props) => theme.fonts.semi_bold};

                }
                ul{
                    padding-top: 15px;
                    display: flex;
                    flex-direction: column;
                    margin-top: -10px;
                    li{
                        color: #6E6E6E;
                        font-size: 16px;
                        font-family: ${({ theme }: Props) => theme.fonts.bold};
                        display: flex;
                        margin-top: 10px;
                        label{
                            font-size: 14px;
                            font-family: ${({ theme }: Props) => theme.fonts.light_italic};
                            margin-right: 20px;
                            min-width: 61px;
                            display: block;
                        }
                    }
                }
            }
            .buttons{
                align-self: flex-end;
                margin-top: -80px;
                a{
                    &:first-child{
                        box-shadow: 0px 3px 6px #00000029;
                    }
                    &:nth-child(2){
                        margin-top: 15px;

                    }
                }
            }
        }
    }
`