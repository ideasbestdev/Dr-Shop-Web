import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    selected?: boolean
}

export const PageNumberStyle = styled.div<Props>`
    

    span{
        display: flex;
        align-items: center;
        font-size: 20px;
        color: ${({ theme, selected }: Props) => selected ? theme.globalColors.primary_color : "#9C9C9C"};
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        cursor: pointer;
        rect{
            transition: fill 0.3s;
        }
        @media(hover){

            &:hover{
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
                rect{
                    fill: ${({ theme }: Props) => theme.globalColors.secondary_color};
                }
            }
        }
    }
    
`