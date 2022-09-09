import styled from 'styled-components';
import { Theme } from './Theme';

interface Props {
    backgroundColor?: string
}

export const Button = styled.button<Props>`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        min-width: ${({ theme }: Theme) => theme.width.button_min_width};
        height: ${({ theme }: Theme) => theme.height.button_height};
        color: #fff;
        background-color: ${({ backgroundColor }: Props) => backgroundColor != undefined ? backgroundColor : "#000"};
`