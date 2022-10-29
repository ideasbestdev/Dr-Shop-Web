import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}
export const DescriptionStyle = styled.div`
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    font-family:  ${({ theme }: Props) => theme.fonts.regular};
    color: ${({ theme }: Props) => theme.globalColors.primary_color};
`