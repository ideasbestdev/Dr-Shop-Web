import styled from 'styled-components';
import { Theme } from './Theme';


export const LinkButtonStyle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 50px;
    background-color: ${({ theme }: Theme) => theme.globalColors.primary_color};
    border-radius: 40px;
    align-self: flex-start;
    min-width: 250px;
    width: fit-content;
    color: white;
    margin-top: 40px;
`