import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    color?: string,
    selectedColor?: string,
    isActive?: boolean,
}

export const CustomColorStyle = styled.div<Props>`
    label{
        background-color: ${({ color }: Props) => color};
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        opacity: ${({ isActive }: Props) => isActive ? "1" : "0.3"};
        &::before{
            content: '';
            pointer-events: "none";
            position: absolute;
            display: block;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 2px solid transparent;
            border-color: "transparent";
        }
        @media (hover){
            &:hover{
                &:before{
                    border-color: ${({ selectedColor }: Props) => selectedColor ? selectedColor : "#fff"};
                }
            }
        }
    }


    input:checked ~ label {
        &:before{
            pointer-events:  "all";
            border-color: ${({ selectedColor }: Props) => selectedColor ? selectedColor : "#fff"};
        }
    }
`