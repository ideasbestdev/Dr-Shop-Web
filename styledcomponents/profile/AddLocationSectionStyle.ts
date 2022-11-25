import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const AddLocationSectionStyle = styled.section<Props>`
    flex: 1;
    background-color: #FAFAFA;
    min-height: 500px;
    padding: 28px 60px;
    display: flex;
    position: relative;
    form{
        display: flex;
        flex-direction: column;
        flex: 1;
        article{
            display: flex;
            justify-content: space-between;
            width: 100%;
            flex: 1;
            >div{
                &:nth-child(1){
                    h1{
                        text-align: start;
                        font-size: 30px;
                        margin-top: 10px;
                    }
                    ul{
                        li{
                            margin-top: 25px;
                        }
                    }
                }

                &:nth-child(2){
                    h1{
                        color: #777777;
                        font-size: 17px;
                        margin-top: 10px;
                        margin-bottom: 20px;
                        max-width: 300px;
                        font-family: ${({ theme }: Props) => theme.fonts.regular};
                    }
                    ul{
                        li{
                            margin-top: 10px;
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            div{
                                border: 2px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                                border-radius: 40px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: #fff;
                                width: 300px;
                                margin-right: 20px;
                                height: 70px;
                                color: ${({ theme }: Props) => theme.globalColors.primary_color};
                                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                                font-size: 18px;
                                transition: color 0.3s, background-color 0.3s;
                            }
                            &:hover{
                                div{
                                    color: #fff;
                                    background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
                                }
                            }
                        }
                    }
                }
            }
        }

        button{
            margin: 0 auto;
            display: block;
            background-color: transparent;
        }
    }
`