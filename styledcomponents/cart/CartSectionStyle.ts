import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CartSectionStyle = styled.section`
    padding-bottom: 100px;
    margin: 0 auto;
    padding: 0 ${({ theme }: Props) => theme.gridSpace};
    h1{
        padding-top: 40px;
        text-align: start;
        font-size: 26px;
        padding-left: ${({ theme }: Props) => theme.gridSpace};
    }
    .cart_list{
        display: table;
        border-collapse: separate;
        width: 100%;
        border-spacing: 0 30px;
        table-layout: auto;
        max-width: 1200px;
        margin-left: auto;
         li{
            display: table-row;
            position: relative;
            &:first-child{
                font-family: ${({ theme }: Props) => theme.fonts.bold};
                &::after{
                    content: "";
                    border-bottom: 1px solid #B4B4B4;
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    width: 100%;
                    height: 1px;
                }
            }
            .quantity{
                input{
                    pointer-events: none;
                }
            }
            .update_cart{
                pointer-events: none;
                text-align: start;
                &.isActive{
                    pointer-events: all;
                    cursor: pointer;
                    span{
                        color: black;
                    }
                    path{
                        fill: black;
                    }
                }
                span{
                    display: flex;
                    align-items: center;
                    color: #979797;
                    font-family: ${({ theme }: Props) => theme.fonts.medium};

                    i{
                        height: 18px;
                        margin-right: 6px;
                    }
                }
            }

            &:not(:first-child){
                min-height: 136px;
                box-shadow: 0px 2px 6px #00000038;
            }
            >div{
                display: table-cell;
                vertical-align: middle;
                position: relative; 
                padding: 10px;
                text-align: center;
            }

            .checkbox{
                position: absolute;
                display: block;
                left: -69px;
                padding: 0;
                height: 100%;
                display: flex;
                align-items: center;
                margin: 0;
            }
            .image_container{
                height: 100px;
                width: 100px;
            }
            .product_title{
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .flex{
                display: flex;
                align-items: center;
                .close{
                    margin-right: 25px;
                }
            }
        }
    }
    .quantity{
        justify-content: center;
        display: flex;
    }
    
    .receipet{
        max-width: 1200px;
        margin-left: auto;
        >div{
            width: 400px;
        }
        h2{
            font-size: 22px;
            font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            line-height: normal;
            padding-bottom: 5px;

        }
        .details{
            width: 400px;

            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 17px;
                padding: 10px 0;

                h3{
                    font-weight: normal;
                    font-family: ${({ theme }: Props) => theme.fonts.bold};

                }
                div{
                    font-family: ${({ theme }: Props) => theme.fonts.light};

                }
            }
        }
    }

    >a{
        margin-left: auto;
    }
`