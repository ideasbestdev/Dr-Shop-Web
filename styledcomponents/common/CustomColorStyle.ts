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
        width: 27px;
        height: 27px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border: ${({ isActive }: Props) => isActive ? "none" : "3px solid #979797"};
        &:after{
            content: "";
            display:  ${({ isActive }: Props) => isActive ? "none" : "block"};
            height: 3px;
            border-top: 3px solid #979797;
            width: 200%;
            position: absolute;
            transform: rotate(45deg);
            top: 18px;
        }
    }
    

    input:checked ~ label {
        border: 3px solid #2262BC;
    }
`