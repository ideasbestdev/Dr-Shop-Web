import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const SectionTitleStyle = styled.h1`
    font-size: 37px;
    line-height: 24px;
    font-weight: normal;
    font-family:  ${({ theme }: Props) => theme.fonts.semi_bold};
    color: ${({ theme }: Props) => theme.globalColors.primary_color};
    text-align: center;
`