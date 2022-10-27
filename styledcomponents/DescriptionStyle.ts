import styled from 'styled-components';
import { Theme } from './Theme';


export const DescriptionStyle = styled.div`
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    font-family:  ${({ theme }: Theme) => theme.fonts.regular};
    color: ${({ theme }: Theme) => theme.globalColors.primary_color};
`