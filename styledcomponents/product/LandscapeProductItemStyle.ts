import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LandscapeProductItemStyle = styled.div<Props>`
    width: 483px;
    height: 264px;
    box-shadow: 1px  1px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_section{
        height: 100%;
        width: 50%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: white;
        .image_container{
            max-width: 200px;
            max-height: 200px;
            img{
                object-fit: cover;
            }
        }


    }
    .right_section{
        height: 100%;
        width: 50%;
        padding: 20px;
        .cart_icon{
            display: flex;
            justify-content: flex-end;
            font-size: 23px;
            color: #2262BC;
            position: relative;
            z-index: 2;
            span{
                cursor: pointer;

            }
        }
        .title_Fav{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            height: 51px;
            margin-top: 20px;
            i{
                height: 21px;                
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

        .ribbon{
            width: 94px;
            height: 31px;
            margin-top: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size : 15px;
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
        h3{
            display: flex;
            font-size: 19px;
            color: #2262BC;
            font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            justify-content: space-between;
            line-height: 34px;
            align-items: center;
            font-weight: normal;
            margin-top: 13px;
            del{
                font-size: 15px;
                color: #979797;
                font-family: ${({ theme }: Props) => theme.fonts.medium};
                span{
                    text-decoration: line-through;
                }
            }
        }
    }
`