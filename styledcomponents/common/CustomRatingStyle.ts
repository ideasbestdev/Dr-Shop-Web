import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CustomRatingStyle = styled.ul<Props>`
        display: flex;
        margin-left: -5px;
        li{
            margin-left: 5px;
        }
`