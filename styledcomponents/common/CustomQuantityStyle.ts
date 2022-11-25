import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CustomQuantityStyle = styled.div<Props>`
    display: flex;
    align-items: center;
    color: #9B9B9B;

    a{
        width: 20px;
        height: 20px;
        border: 1px solid #9B9B9B;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
    }
    div{
        min-width: 40px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: ${({ theme }: Props) => theme.fonts.sfPro_regular};
    }
   /* input{
        border: none;
        outline: none;
        width: 40px;
        height: 12px;
        background-color: red;
        -moz-appearance: textfield;
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }*/
`