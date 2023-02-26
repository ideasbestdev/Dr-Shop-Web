import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CustomQuantityStyle = styled.div<Props>`
    display: flex;
    align-items: center;

    a{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        cursor: pointer;
        position: relative;
        border: 1px solid ${({ theme }: Props) => theme.globalColors.primary_color};
        color: ${({ theme }: Props) => theme.globalColors.primary_color};
    }

    input[type="number"]{
        border: none;
        outline: none;
        width: 40px;
        -moz-appearance: textfield;
        text-align: center;
        padding: 0 5px;
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        color: black;

    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`