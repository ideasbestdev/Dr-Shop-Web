import styled from 'styled-components';
import { Theme } from './Theme';


export const TitleStyle = styled.h1`
    font-size: 54px;
    line-height: 66px;
    font-weight: normal;
    font-family:  ${({ theme }: Theme) => theme.fonts.regular};
    color: ${({ theme }: Theme) => theme.globalColors.primary_color};
`