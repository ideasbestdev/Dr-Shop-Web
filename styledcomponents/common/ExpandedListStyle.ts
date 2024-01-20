import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    maxHeight?: boolean,
}

export const ExpandedListStyle = styled.div<Props>`
    min-height: 150px;
    padding-bottom: 30px;
    position: relative;
    span{
        bottom: -3px;
        left: 0;
        position: absolute;
        cursor: pointer;
    }
    svg{
        width: 7px;
        height: 14px;
        margin-top: 2px;
        transition:  transform 0.3s;
        transform: ${({ maxHeight }: Props) => maxHeight ? "rotate(90deg)" : "rotate(0deg)"};
    }
    ul{
        overflow-y: hidden;
        max-height: ${({ theme, maxHeight }: Props) => maxHeight ? "800px" : "174px"};
        transition: max-height 0.5s;

        li{
            margin-top: 16px;

        }

    }
    a{
        display: flex;
        align-items: center;
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
   }
   label{
        cursor: pointer;
   }
   input:checked ~ label {
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold}
    
   }
`
        //font-family: ${({ theme, maxHeight }: Props) => maxHeight ? theme.fonts.semi_bold : theme.fonts.regular};
