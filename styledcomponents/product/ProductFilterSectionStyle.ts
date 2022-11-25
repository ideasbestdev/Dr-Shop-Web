import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    width?: string,
    scrolled: boolean
}

export const ProductFilterSectionStyle = styled.section<Props>`
    min-width: ${({ width }: Props) => width ? width : "400px"};
    min-height: 100%;
    max-width: ${({ width }: Props) => width ? width : "400px"};
    position: fixed;
    top: ${({ scrolled }: Props) => scrolled ? "120px" : "267px"};
    left: 0;
    transition: top 0.3s;
    padding-right: 20px;
    height: 100%;
    overflow: hidden;
    a{
        color: #6E6E6E;
        cursor: pointer;
    }
    >ul{
        padding: 55px;
     //   padding-top: ${({ scrolled }: Props) => scrolled ? "120px" : "55px"};
        margin-top: -19px;
        background-color: #EBEBEB;
        overflow: auto;
        height: 100%;
        padding-bottom: ${({ scrolled }: Props) => scrolled ? "120px" : "267px"};
        width: 420px;
        transition: padding-top 0.3s;
        >li{
            margin-top: 19px;
            ul{
                margin-top: 10px;
                position: relative;
                li{
                    color: #6E6E6E;
                    margin-top: 5px;
                    font-size: 14px;
                    font-family: ${({ theme }: Props) => theme.fonts.light_italic};
                }
            }
            &:nth-child(2){
                ul{

                    li{
                        margin-top: 28px;
                        &:nth-child(1){
                            width: calc(100% - 22px);
                            padding-left: 11px;   
                            .rangeLine{
                                &::before{
                                    content: "";
                                    left: 2px;
                                    height: 5px;
                                    background: #E1E1E1E1;
                                    position: absolute;
                                    width: 10px;
                                    border-radius: 6px;
                                }
                            }
                        }
                        &:nth-child(2){
                            display: flex;
                            border: 2px solid #DBDBDB;
                            border-radius: 24px;
                            background-color: #fff;
                            input{
                                width: 50%;
                                border: none;
                                height: 44px;
                                outline: none;
                                background-color: transparent;
                                text-align: center;
                                padding: 0 10px;
                                color: #605A65;
                                &:nth-child(1){
                                    border-right: 1px solid #E1E1E1;
                                }
                            }
                        }
                    }
                }
            }

            &:nth-child(4){
                ul{
                    padding: 10px;
                }
                li{
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: -32px;
                    margin-top: -30px;
                    width: calc(100% + 32px);
                    div{
                        margin-left: 32px;
                        margin-top: 30px;

                    }
                }
            }

            &:nth-child(5){
               li{
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: -30px;
                    margin-top: -20px;
                    div{
                        margin-left: 30px;
                        margin-top: 20px;
                    }
               }
            }

            &:nth-child(7){
                margin-top: 70px;
            }
        }
    }
`