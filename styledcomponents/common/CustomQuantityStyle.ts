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
        width: 25px;
        height: 25px;
 //       border: 1px solid #9B9B9B;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
        position: relative;
    }
    div{
        min-width: 40px;
        height: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #9B9B9B;
        font-family: ${({ theme }: Props) => theme.fonts.sfPro_regular};
    }
    input[type="number"]{
        border: none;
        outline: none;
        width: 40px;
        height: 12px;
        -moz-appearance: textfield;
        text-align: center;
        padding: 0 5px;
        font-family: ${({ theme }: Props) => theme.fonts.sfPro_regular};
        color: #9B9B9B;

    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`