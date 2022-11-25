import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    maxHeight?: boolean,
}

export const ExpandedListStyle = styled.div<Props>`
    max-height: ${({ theme, maxHeight }: Props) => maxHeight ? "500px" : "20px"};
    overflow-y: hidden;
    transition: max-height 0.5s;
    a{
        font-family: ${({ theme, maxHeight }: Props) => maxHeight ? theme.fonts.semi_bold : theme.fonts.regular};
        &:hover{
            font-family: ${({ theme }: Props) => theme.fonts.semi_bold}
        };
   }
`