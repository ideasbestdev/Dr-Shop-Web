import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    width?: number,
    scrolled: boolean
}

export const ProductFilterSectionStyle = styled.section<Props>`
    min-width: 300px;
    max-width: 300px;
    position: static;
    top: ${({ scrolled }: Props) => scrolled ? "120px" : "267px"};
    left: 0;
    transition: top 0.3s;
   background-color: #fff;
   padding-left: ${({ theme }: Props) => theme.gridSpace};
    h2{
        font-size: 20px;
        font-family:  ${({ theme }: Props) => theme.fonts.medium};
        line-height: 1.4;

    }
    a{
        color: #000000;
        cursor: pointer;
    }
    .colors_container{
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        width: calc(100% + 10px);
        margin-top: 0;
        div{
            margin-top: 16px;
            margin-left: 10px;
        }
    }
    .filter_content{
        background-color: #fff;
        height: auto;
        padding-bottom: ${({ scrolled }: Props) => scrolled ? "120px" : "267px"};
        width: 100%;
        transition: padding-top 0.3s;
        >li{
            padding: 16px 0;
            width: 100%;
            border-bottom: 1px solid #B4B4B4;
            ul{
                position: relative;
                li{
                    color: #000000;
                    font-size: 14px;
                }
            }

            &.noBorder{
                border: none;
            }
        }
        button{
            margin-top: 32px;
            min-width: 108px;
        }
        .price_range{
            padding-left: 11px; 
            border-bottom: none;
           > div{
                margin-top: 14px;
                font-size: 14px;
                margin-left: -11px;
            }



            a{
                margin-left: -11px;
            } 
            ul{
                margin-top: 12px;
            }
            .rangeLine{
                &::before{
                    content: "";
                    left: -2px;
                    height: 5px;
                    background: #E1E1E1E1;
                    position: absolute;
                    width: 10px;
                    border-radius: 6px;
                }
            }
            .range_thumb_1{
          //      background-color
            }
        }
    }

    .on_sale{
        margin-top: 70px;
        a{
            display: flex;
            align-items: center;
            .image_container{
                margin-right: 15px;
                min-width: 80px;
                min-height: 80px;
            }
            .content{
                width: calc(100% - 95px);            
            }

            h2{
                font-size: 16px;
                color: #202020B3;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price{
                font-size: 16px;
                margin-top: 5px;
            }
        }
    }
`