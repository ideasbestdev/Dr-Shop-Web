import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    backgroundColor?: string
}

export const ButtonStyle = styled.button<Props>`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        min-width: ${({ theme }: Props) => theme.width.button_min_width};
        height: ${({ theme }: Props) => theme.height.button_height};
        color: #fff;
        background-color: ${({ backgroundColor }: Props) => backgroundColor != undefined ? backgroundColor : "#000"};
`