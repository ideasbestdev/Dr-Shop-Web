import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const SectionTitleStyle = styled.h2<Props>`
    font-size: 45px;
    line-height: 61px;
    font-weight: normal;
    width: fit-content;
    font-family:  ${({ theme }: Props) => theme.fonts.bold};
`