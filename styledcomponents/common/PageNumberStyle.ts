import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    selected?: boolean
}

export const PageNumberStyle = styled.div<Props>`
    

    span{
        font-size: 18px;

        &:not(.points){
            display: flex;
        align-items: center;
        width: 40px;
        height: 40px;
        justify-content: center;
        border-radius: 50%;
        color: ${({ selected }: Props) => selected ? "white" : "black"};
        font-family: ${({ theme }: Props) => theme.fonts.medium};
        cursor: pointer;
        border: ${({ selected }: Props) => selected ? "none" : "1px solid #999999"};
        background-color: ${({ theme, selected }: Props) => selected ? theme.globalColors.primary_color : "white"};  
        }
    }
    
`