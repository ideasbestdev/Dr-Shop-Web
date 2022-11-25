import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    selected: boolean,
    selectedColor?: string
}

export const CustomSizeStyle = styled.div<Props>`
    width: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ selected, theme, selectedColor }: Props) => selected ? selectedColor ? selectedColor : theme.globalColors.primary_color : "#ffffff"};
    margin-top: 10px;
    border-radius: 8px;
    font-size: 14px;
    font-family: ${({ theme }: Props) => theme.fonts.regular};
    color: ${({ selected }: Props) => selected ? "#ffffff" : "#605A65"};
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &:hover{
        background-color: ${({ theme, selectedColor }: Props) => selectedColor ? selectedColor : theme.globalColors.primary_color};
        color: #ffffff;
    }
`