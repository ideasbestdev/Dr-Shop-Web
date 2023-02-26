import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const NotificationStyle = styled.div<Props>`
    width: 429px;
    height: 306px;
    background-color: white;
    position: absolute;
    right: 13px;
    top:  30px;
    box-shadow: -3px 3px 10px rgba(0,0,0,0.12);
    padding: 20px;
    display: none;
    .top_notification{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    h2{
        font-size: 20px;
        color: #979797;
        font-family: ${({ theme }: Props) => theme.fonts.medium};
        font-weight: normal;
    }
    h3{
        font-size: 17px;
        font-family: ${({ theme }: Props) => theme.fonts.medium};
        font-weight: normal;
    }
    ul{
        li{
            background-color: #2262BC1A;
            padding: 9px 14px;
            padding-right: 50px;
            border-radius: 10px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                font-size: 15px;
            }
            .time{
                font-size: 13px;
                color: #979797;
                margin-top: 10px;
            }
            i{
                position: absolute;
                right: 14px;
                transform: rotate(270deg);
            }
            &:nth-child(even){
                background-color: #9797971A;
            }
            &:not(:first-child){
                margin-top: 10px;
            }
        }
    }

    &.show{
        display: block;
    }
    
`