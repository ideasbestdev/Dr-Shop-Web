import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    backgroundColor?: string
}

export const ButtonStyle = styled.button<Props>`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 16px;
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        min-width: ${({ theme }: Props) => theme.width.button_min_width};
        height: ${({ theme }: Props) => theme.height.button_height};
        color: #fff;
        background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
        cursor: pointer;
        position: relative;
        div{
            display: none;
        }
        &:after{
                content: "";
                width: 30px;
                position: absolute;
                top: calc(50% - 15px);
                left: calc(50% - 15px);
                height: 30px;   
                border: 5px solid white;
                border-bottom-color: transparent;
                border-radius: 50%;
                display: none;
                box-sizing: border-box;
                animation: rotation 1s linear infinite;

            }
        @keyframes rotation {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            } 
        &.loading{
            span{
                display: none;
            }
            &::after{
                display: block;
            }
            div{
                display: block;
                border: 5px solid white;
                border-bottom-color: transparent;
                width: 30px;
                position: absolute;
                top: calc(50% - 15px);
                left: calc(50% - 15px);
                height: 30px;            
            }
        }
`