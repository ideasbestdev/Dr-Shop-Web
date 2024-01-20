import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    show: boolean,

}

export const LocationDialogStyle = styled.section<Props>`
    position: absolute;
    width: 100%;
    background-color: #FAFAFA66;
    height: 100%;
    left: 0;
    top: 0;
    display: ${({ show }: Props) => show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    >div{
        background-color: #fff;
        width: 424px;
        padding: 30px;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 25px;
        position: relative;
        div{
            width: 40px;
            height: 40px;
            position: absolute;
            right: -15px;
            top: -15px;
        }
        h1{
            color: #486B92;
            font-size: 23px;
        }
        ul{
            width: 100%;
            li{
                width: 100%;
                display: flex;
                color: #888888;
                font-size: 20px;
                margin-top: 20px;
                h2{
                    font-family: ${({ theme }: Props) => theme.fonts.medium};
                    font-size: 17px;
                    margin-right: 10px;
                }
                span{
                    font-size: 17px;
                }
            }
        }
    }
`