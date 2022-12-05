import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    maxHeight?: boolean,
}

export const ExpandedListStyle = styled.div<Props>`
    max-height: ${({ theme, maxHeight }: Props) => maxHeight ? "500px" : "20px"};
    overflow-y: hidden;
    transition: max-height 0.5s;
    min-height: 20px;
    svg{
        width: 7px;
        height: 14px;
        margin-top: 2px;
        transition:  transform 0.3s;
        transform: ${({ maxHeight }: Props) => maxHeight ? "rotate(90deg)" : "rotate(0deg)"};
    }
    a{
        span{
            padding-right: 10px;

        }
        display: flex;
        align-items: center;
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        @media (hover) {
            &:hover{
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold}
            };   
        }
   }
   label{
        cursor: pointer;
   }
   input:checked ~ label {
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold}
    
   }
`
        //font-family: ${({ theme, maxHeight }: Props) => maxHeight ? theme.fonts.semi_bold : theme.fonts.regular};
