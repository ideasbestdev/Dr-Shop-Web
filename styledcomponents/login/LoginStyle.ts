import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LoginStyle = styled.section<Props>`
    display: flex;
    min-height: 600px;
    max-height: 700px;
    position: relative;
    button{
        background-color: transparent;
    }
    img{
        object-fit: cover;
    }
   > div{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        form{
            width: 560px;
            height: 560px;
            box-shadow: 4px 4px 6px #00000029;
            background-color: #FFFFFFCC;
            position: absolute;
            border-radius: 33px;
            padding-top: 80px;
            display: flex;
            align-items: center;
            flex-direction: column;
            h1{
                font-size: 29px;
            }
            ul{
                margin-top: 20px;
                li{
                    margin-top: 30px;
                    &:nth-child(3){
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        a, label{
                            color: #A4A3A3;
                            font-size: 12px;
                            font-family: ${({ theme }: Props) => theme.fonts.italic};
                        }
                    }
                    &:nth-child(4){
                        display: flex;
                        justify-content: center;
                    }
                    &:nth-child(5){
                        font-family: ${({ theme }: Props) => theme.fonts.italic};
                        font-size: 12px;
                        display: flex;
                        justify-content: center;
                        color: #A4A3A3;
                        margin-top: 60px;
                        a{
                            font-family: ${({ theme }: Props) => theme.fonts.italic};
                            color: ${({ theme }: Props) => theme.globalColors.primary_color};
                            border-bottom: 1px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                            font-size: 12px;
                            margin-left: 3px;
                        }
                    }
                }
            }
        }
    }
`