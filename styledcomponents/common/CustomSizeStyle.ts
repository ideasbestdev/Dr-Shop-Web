import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    // selected: boolean,
    selectedColor?: string,
    isActive?: boolean,

}

export const CustomSizeStyle = styled.div<Props>`
   // margin-top: 10px;
    label{
        width: 70px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        color: #979797;
        border-radius: 45px;
        font-size: 14px;
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        background-color: ${({ isActive }: Props) => isActive ? "white" : "#EFEEEE"};
        border: ${({ isActive }: Props) => isActive ? "#979797" : "none"};
        
    }
    
    @media (hover) {
        &:hover{
            label{
                background-color: ${({ theme, selectedColor }: Props) => selectedColor ? selectedColor : theme.globalColors.primary_color};
                color: #ffffff;
            }
        }
    }

    input:checked ~ label {
        color:  #ffffff;
        background-color: ${({ theme, selectedColor }: Props) => selectedColor ? selectedColor : theme.globalColors.primary_color};
    }

`