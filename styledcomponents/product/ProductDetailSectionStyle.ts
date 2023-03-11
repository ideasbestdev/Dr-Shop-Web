import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    isFav?: boolean
}

export const ProductDetailSectionStyle = styled.section<Props>`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    width: 100%;
    padding-bottom: 20px;
    display: flex;
    .star{
        margin-top: 10px;
    }
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
                    width: 70px;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: opacity 0.3s;
                    border: 1px solid #999999;
                    cursor: pointer;
                    div{
                        max-width: 60px;
                        position: relative;
                    }
                    @media (hover) {
                        &:hover{
                            opacity: 1;    
                        }   
                    }
                    &.my-swiper-slide-active{
                        border-bottom: 5px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                    }
                }

            }
            .images-swiper{
                width: 400px;
                height: 400px;
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
                    @media (hover) {
                        &:hover{
                            background-color: #CCCACA;
                        }   
                    }
                    &.swiper-pagination-bullet-active{
                        background-color: #CCCACA;
                    }
                }
            }
        }

        &:nth-child(2){
            
            flex: 1;
            padding-right: 40px;
            margin-left: 60px;
            h2{
                text-align: start;
                line-height: 31px;
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                font-size: 31px;
            }
            .category{
                color: #999999;
                font-size: 16px;
                font-family: ${({ theme }: Props) => theme.fonts.medium};
                margin-top: 10px;
                padding-bottom: 25px;
            }
            .description{
                padding-top: 17px;
                border-top: 1px solid #97979780;
            }
            >ul{
                margin-top: 10px;
            }
            .price{
                margin-top: 22px;
                width: fit-content;
                color: black;
                font-size: 39px;
                margin-bottom: 20px;
                del{
                    margin-left: 30px;
                    font-size: 29px;    
                    align-self: flex-end;
                    line-height: 29px;
                }
            }
            .label{
                color: #6E6E6E;
                font-size: 14px;
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            }
            .sizes{

                div {
                    &:not(.color_container){
                        label{
                            width: auto;
                            height: auto;
                            min-width: 90px;
                            min-height: 42px;
                            padding: 5px;
                            box-shadow: 0px 1px 6px #00000029;
                            margin-top: 0;
                        }
                    }
                }
            }
            .sizes, .color_container{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                padding: 13px 0;
                border-top: 1px solid #97979780;
                >label{
                    color: black;
                    font-size: 18px;
                    font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                    min-width: 77px;
                }
                div{
                    margin-left: 20px;
                }
            }
            .color_container{
                div{
                    label{
                        width: 41px;
                        height: 41px;
                    }
                }
            }
            .variantion_container{
                >div{
                    &:last-child{
                        border-bottom: 1px solid #97979780;
  
                    }
                }
            }
            .bottom_section{
                margin-top: 20px;
                .label{
                    color: black;
                    font-size: 18px;
                    font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                }
                .quantity{
                    margin-top: 10px;
                }
                .container, .buttons{
                    display: flex;
                    align-items: center;
                    a{
                        margin-top: 0;
                    }
                }
                .buttons{
                    margin-left: 60px;
                    i{
                        margin-left: 12px;
                        width: 54px;
                        height: 54px;
                        display: grid;
                        place-items: center;
                        background-color: #349D52;
                        border-radius: 10px;
                        cursor: pointer;
                        path{
                            stroke: white;
                            fill: ${({ theme, isFav }: Props) => isFav ? "white" : "transparent"};

                          //  fill: white;
                        }
                    }
                }
            }
        }
    }
`