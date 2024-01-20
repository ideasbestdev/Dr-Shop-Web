import styled from 'styled-components';
import { Theme } from '../Theme';
interface Props {
    theme: Theme,
}
export const ErrorMessageStyle = styled.label`
    color: red !important;
    font-size: 13px;
    position: absolute;
    margin-top: 1px;
    font-family: ${({ theme }: Props) => theme.fonts.regular};
`
