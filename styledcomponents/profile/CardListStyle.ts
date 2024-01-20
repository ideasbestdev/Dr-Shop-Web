import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CardListStyle = styled.section<Props>`
              flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
    .list_wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    
    .plus{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        cursor: pointer;
        position: relative;
        border: 3px solid ${({ theme }: Props) => theme.globalColors.primary_color};
        color: ${({ theme }: Props) => theme.globalColors.primary_color};
    }
    &.v2{   
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
        h2 {
            margin-top: 60px;
            font-size: 40px;
            text-align: center;
            width: 100%;
        }
    }
    .from_cart{
        .card{
            cursor: pointer;
        }
    }
    .address_container >a {
         margin-left: auto;
    }
`