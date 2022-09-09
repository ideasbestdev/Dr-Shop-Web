import styled from 'styled-components';
import { Theme } from './Theme';

interface Props {
    show: boolean;
}

export const AppCustomSelect = styled.div<Props>`
    position: relative;
    z-index: 1;
    span{
        border: 1px solid #E1E1E1;
        height: ${({ theme }: Theme) => theme.height.input_height};
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding-left: 10px;
        padding-right: 30px;
        position: relative;
        cursor: pointer;
        i{
            position: absolute;
            right: 20px;
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
        border: 1px solid #E1E1E1;
        border-radius: 8px;
        cursor: pointer;

        li{
            padding: 10px;
            border-bottom: 1px solid #E1E1E1;
        }
        display: ${({ show }: Props) => show ? "block" : "none"};
    }
`