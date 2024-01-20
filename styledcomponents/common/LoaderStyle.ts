import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LoaderStyle = styled.div<Props>`
    width: 48px;
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24px);
    height: 48px;
    border: 5px solid ${({ theme }: Props) => theme.globalColors.primary_color};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`