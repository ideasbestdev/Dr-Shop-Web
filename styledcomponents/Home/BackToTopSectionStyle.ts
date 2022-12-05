import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme
}

export const BackToTopSectionStyle = styled.section<Props>`
    padding: 26px;
    display: flex;
    justify-content: center;
    a{
        color: #486B92;
        font-size: 24px;
        transition: color 0.3s;
        @media (hover) {
            &:hover{
                color: ${({ theme }: Props) => theme.globalColors.secondary_color};
            }   
        }
    }
`