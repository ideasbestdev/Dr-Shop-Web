import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    show?: boolean;
    theme: Theme
}

export const CustomSelectStyle = styled.div<Props>`
    position: relative;
    z-index: 1;
    span{
        border: 1px solid #E1E1E1;
        height: ${({ theme }: Props) => theme.height.input_height};
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding-left: 10px;
        padding-right: 30px;
        position: relative;
        cursor: pointer;
        @media (max-width: 1024px) {
            display: none;
        }
    }
    i{
        position: absolute;
        right: 20px;
        pointer-events: none;
    }
    ul{
        max-height: 300px;
        overflow-y: auto;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #fff;
        border: 1px solid #E1E1E1;
        border-radius: 8px;
        cursor: pointer;

        li{
            padding: 10px;
            border-bottom: 1px solid #E1E1E1;
        }
        display: ${({ show }: Props) => show ? "block" : "none"};
        @media (max-width: 1024px) {
            display: none;
        }
    }

    select{
        border: 1px solid #E1E1E1;
        border-radius: 8px;
    }
    div{
        display: none;
        align-items: center;
        position: relative;
        @media (max-width: 1024px) {
            display: flex;
        }
    }
`