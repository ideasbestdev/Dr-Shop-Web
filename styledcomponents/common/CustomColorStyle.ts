import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    color: string,
    selected: boolean,
    selectedColor?: string,
}

export const CustomColorStyle = styled.div<Props>`
    background-color: ${({ color }: Props) => color};
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    &::before{
        pointer-events: ${({ selected }: Props) => selected ? "all" : "none"};
        content: '';
        position: absolute;
        display: block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-color: ${({ selected, selectedColor }: Props) => selected ? selectedColor ? selectedColor : "#fff" : "transparent"};
    }

    &:hover{
        &:before{
            border-color: ${({ selectedColor }: Props) => selectedColor ? selectedColor : "#fff"};
        }
    }
`