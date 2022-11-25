import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    selected?: boolean
}

export const PageNumberStyle = styled.li<Props>`
    
    margin-left: 15px;
    &:first-child{
        margin-left: 0;
    }
    a{
        font-size: 25px;
        color: ${({ theme, selected }: Props) => selected ? theme.globalColors.primary_color : "#9C9C9C"};
        &:hover{
            color: ${({ theme }: Props) => theme.globalColors.primary_color};
        }
    }
    
`