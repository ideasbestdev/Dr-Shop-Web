import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    progress?: number
}

export const RegisterStyle = styled.section<Props>`
    display: flex;
    min-height: 650px;
    max-height: 700px;
    position: relative;
    img{
        object-fit: cover;
    }
    svg{
        margin-left: 9px;
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
            padding-top: 45px;
            display: flex;
            align-items: center;
            flex-direction: column;
            >div{
                z-index: 1;
                display: flex;
                span{
                    width: 112px;
                    height: 8px;
                    border-radius: 9px;
                    margin-left: 6px;
                    &:nth-child(1){
                        background-color:  #489252;
                    }
                    &:nth-child(2){
                        background-color: ${({ progress }: Props) => progress != undefined && progress >= 2 ? "#489252" : "#D5D5D5"};
                    }
                    &:nth-child(3){
                        background-color: ${({ progress }: Props) => progress != undefined && progress >= 3 ? "#489252" : "#D5D5D5"};
                    }
                }
      
            }
            h1{
                font-size: 29px;
            }
            >ul{
               > li{
                    margin-top: 30px;
                }
            }
            button{
                display: flex;
                align-content: center;
                position: absolute;
                right: ${({ progress }: Props) => progress == 1 ? "20px" : "auto"};
                bottom: 15px;
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                font-size: 16px;
                cursor: pointer;
                a{
                    margin-top: 0;
                }
            }
        }

        .completed{
            div{
                &:nth-child(2){
                    display: flex;
                    flex: 1;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
            h1{
                margin-top: 10px;
            }
        }
    }
`