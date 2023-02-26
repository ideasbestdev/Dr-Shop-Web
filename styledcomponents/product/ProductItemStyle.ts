import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    isFav?: boolean,
}

export const ProductItemStyle = styled.div<Props>`
    width: 290px;
    height: 420px;
    box-shadow: 1px  1px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    .top_section{
        height: 310px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: white;
        .image_container{
            max-width: 200px;
            max-height: 200px;
            img{
                object-fit: cover;
            }
        }
        .cart_icon{
            position: absolute;
            bottom: 23px;
            right: 26px;
            z-index: 1;
        }
        .ribbon{
            position: absolute;
            top: 16px;
            left: 14px;
            width: 111px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size : 21px;
            font-family: ${({ theme }: Props) => theme.fonts.bold};
            text-transform: uppercase;
            &.new_ribbon{
                background-color: #2262BC40;
                color: #2262BC;
            }
            &.offer_ribbon{
                background-color: #89CA0040;
                color: #89CA00;
            }
        }
    }
    .bottom_section{
        height: 110px;
        width: 100%;
        background-color: #77758A1A;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .title_Fav{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            height: 30px;

        }
        .fav_icon{
            height: 21px; 
            cursor: pointer;               
            path{
                fill: ${({ theme, isFav }: Props) => isFav ? theme.globalColors.primary_color : "transparent"};
                
            }
        }
        h2{
            font-size: 23px;
            color: #979797B3;
            font-family: ${({ theme }: Props) => theme.fonts.bold};
            max-width: 200px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-weight: normal;
        }

    }
`