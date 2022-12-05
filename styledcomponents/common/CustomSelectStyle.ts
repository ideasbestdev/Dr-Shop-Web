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
       // border: 1px solid #E1E1E1;
        height: ${({ theme }: Props) => theme.height.input_height};
        display: flex;
        align-items: center;
        border-radius: 43px;
        padding-left: 20px;
        padding-right: 30px;
        position: relative;
        cursor: pointer;
        background-color: #fff;
        box-shadow: 0px 4px 24px #34283E47;
        color: #8E8E8E;
        @media (max-width: 1024px) {
            display: none;
        }
    }
    i{

        pointer-events: none;
        height: 17px;
        width: 10px;
        position: absolute;
        right: 20px;
        svg{
            height: 17px;
            width: 10px;
            margin-left: 0;
            transition: transform 0.3s;
            transform: ${({ show }: Props) => show ? "rotate(90deg)" : "rotate(0)"};

        }
    }
    ul{
        max-height: 300px;
        overflow-y: auto;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #fff;
    //    border-radius: 43px;
        cursor: pointer;
        color: #8E8E8E;
        li{
            padding: 10px;
            padding-left: 20px;

          //  border-bottom: 1px solid #E1E1E1;
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