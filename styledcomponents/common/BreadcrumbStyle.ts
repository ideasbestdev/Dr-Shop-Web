import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const BreadcrumbStyle = styled.div<Props>`
    margin-top: 14px;
    margin-left: 35px;
    a{
        color: #6E6E6E;
        @media (hover) {
            &:hover{
                color: ${({ theme }: Props) => theme.globalColors.secondary_color};
            }   
        }
    }
`