import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    show?: boolean,
}

export const PopContainerStyle = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    justify-content: center;
    align-items: center;
    display: ${({ show }: Props) => show ? "flex" : "none"};
    .wrap{
        padding: 80px;
        overflow: auto;
        height: 100%;
        width: 100%;
    }
    .button_container{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`