import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    hasBorder?: boolean
}

export const SectionTitleWithLinkStyle = styled.div<Props>`
    position: relative;
    width: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    h2{
        border-bottom: 4px solid #2262BC;
    }
    a{
        font-size: 25px;
        color: #2262BC;
    }
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0.5px;
        border-top: 1px solid #97979780;
    }
`