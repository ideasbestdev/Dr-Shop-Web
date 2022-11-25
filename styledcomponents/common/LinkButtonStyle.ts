import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    white?: boolean,
}
export const LinkButtonStyle = styled.a<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 60px;
    background-color: ${({ theme, white }: Props) => white ? "#fff" : theme.globalColors.primary_color};
    border-radius: 40px;
    align-self: flex-start;
    min-width: 250px;
    width: fit-content;
    color: ${({ theme, white }: Props) => white ? theme.globalColors.primary_color : "#fff"};
    margin-top: 40px;
    cursor: pointer;
    &:hover{
        transition: color 0.3s, background-color 0.3s;
        background-color:  ${({ theme }: Props) => theme.globalColors.secondary_color};
        color: #fff;
    }
`