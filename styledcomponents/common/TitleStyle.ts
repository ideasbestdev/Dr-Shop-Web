import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const TitleStyle = styled.h1`
    font-size: 55px;
    line-height: 66px;
    font-weight: normal;
    font-family:  ${({ theme }: Props) => theme.fonts.bold};
    color: ${({ theme }: Props) => theme.globalColors.primary_color};
`