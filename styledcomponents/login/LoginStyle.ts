import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LoginStyle = styled.section<Props>`
    display: flex;
    height: ${({ theme }: Props) => `calc(100vh - ${theme.height.header} - ${theme.height.footer})`};
    min-height: 800px;
    position: relative;
    background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000000;
        opacity: 0.3;
        z-index: 1;
    }
    button{
        background-color: transparent;
    }
    .image_container{
        height: 100%;
        width: 70%;
    }
    img{
        object-fit: cover;
    }
   .container{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${({ theme }: Props) => `calc(100% - 2*${theme.gridSpace})`};
        height: 100%;
        max-width: 1390px;
        z-index: 2;
        margin: 0 ${({ theme }: Props) => theme.gridSpace};
        > h2{
            color: white;
        }
        form{
            width: 550px;
            height: 679px;
            margin-left: 200px;
            box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.12);
            background-color: white;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 55px 46px 20px;
            h2{
                font-size: 40px;
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
            }
            ul{
                margin-top: 45px;
                width: 100%;
                li{
                    div{
                        width: 100%;
                    }
                    &:not(:first-child){
                        margin-top: 18px;
                    }
                }
            }
            .forgot_password{   
                a{
                    color: ${({ theme }: Props) => theme.globalColors.primary_color};
                    font-size: 16px;
                    text-decoration: underline; 
                }
                margin-left: auto;
                margin-top: 10px;
            }

            button{
                width: 100%;
                a{
                    width: 100%;
                    margin-top: 80px;
                }
            }
            .dont_or_have_account{
                margin-top: 18px;
                font-size: 16px;
                font-family: ${({ theme }: Props) => theme.fonts.bold}; 
                color: #979797;
                text-align: center;
                a{
                    color: ${({ theme }: Props) => theme.globalColors.primary_color};
                    font-family: ${({ theme }: Props) => theme.fonts.extra_bold}; 

                }
            }
        }
    }
`