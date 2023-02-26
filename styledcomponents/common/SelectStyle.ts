import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    show?: boolean;
    theme: Theme
}

export const SelectStyle = styled.div<Props>`
    position: relative;
    z-index: 1;
    height: 64px;
    display: flex;
    align-items: center;
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

    select{
        border: 1px solid #979797;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        padding: 0 20px;
        cursor: pointer;
    }

`