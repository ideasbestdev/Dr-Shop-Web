import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    progress?: number
}

export const RegisterStyle = styled.section<Props>`
    display: flex;
    height: ${({ theme }: Props) => `calc(100vh - ${theme.height.header} - ${theme.height.footer})`};
    min-height: 900px;
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
        justify-content: space-between;
        width: 100%;
        height: 100%;
        z-index: 2;
        padding: 0 ${({ theme }: Props) => theme.gridSpace};
        .title{
            margin-right: 10px;
            h2{
                color: white;
                font-size: 35px;
            }
            h3{
                font-size: 30px;
                font-family: ${({ theme }: Props) => theme.fonts.light};
                color: white;   
                font-weight: normal;
                text-align: center;
            }
        }
        form{
            min-width: 900px;
            max-width: 900px;
            height: 804px;
            box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.12);
            background-color: white;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 48px 30px 20px;
            h2{
                text-transform: uppercase;
                font-size: 40px;
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
            }

            .content{
                width: 100%;
                display: flex;
            }
            ul{
                margin-top: 25px;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 50%;
                    &:nth-child(even){
                        padding-left: 15px;
                    }
                    &:nth-child(odd){
                        padding-right: 15px;
                    }
                    div{
                        width: 100%;
                    }
                    &:not(even){
                        margin-top: 18px;
                    }
                }
            }

            .bottom_section{
                width: calc(50% - 15px);
                margin-left: auto;
                .dont_or_have_account{
                    margin-top: 12px;
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
            button{
                width: 100%;
                margin-top: 80px;
                height: 50px;
             }
            .checkbox{
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                font-size: 16px;
                font-family: ${({ theme }: Props) => theme.fonts.bold}; 
                color: #979797;
                >div{
                    &:not(:first-child){
                        margin-top: 10px;
                    }
                }
                .checkbox_container{
                    >label{
                        margin-top: -3px;
                    }
                }
                a{
                    color: ${({ theme }: Props) => theme.globalColors.primary_color};
                    font-family: ${({ theme }: Props) => theme.fonts.extra_bold}; 
                    margin-left: 4px;
                }
            }
        }
    }
`