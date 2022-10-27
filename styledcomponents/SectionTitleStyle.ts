import styled from 'styled-components';
import { Theme } from './Theme';


export const SectionTitleStyle = styled.h1`
    font-size: 37px;
    line-height: 24px;
    font-weight: normal;
    font-family:  ${({ theme }: Theme) => theme.fonts.semi_bold};
    color: ${({ theme }: Theme) => theme.globalColors.primary_color};
    text-align: center;
`