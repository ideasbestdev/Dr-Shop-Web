import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    // selected: boolean,
    selectedColor?: string,
    isActive?: boolean,

}

export const CustomSizeStyle = styled.div<Props>`
    margin-top: 10px;
    label{
        width: 70px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        color: #605A65;
        border-radius: 8px;
        font-size: 14px;
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        opacity: ${({ isActive }: Props) => isActive ? "1" : "0.5"};

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