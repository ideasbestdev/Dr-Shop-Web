import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CartSectionStyle = styled.section`
    padding-bottom: 100px;
    width: 90%;
    h1{
        padding-top: 40px;
        text-align: start;
        font-size: 26px;
        padding-left: ${({ theme }: Props) => theme.gridSpace};
    }

    table{
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        tr{
            &:nth-child(2n + 2){
                background-color: #EBEBEB;
            }
            .subTotal{
                span{
                    margin-left: 20px;
                    vertical-align: middle;
                    height: 29px;
                    display: inline-block;
                }
            }

           td{
            text-align: center;
            width: calc(100%/6);
            height: 123px;
            border: none;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(1){
                padding-left: ${({ theme }: Props) => `calc(${theme.gridSpace} + 40px)`};
                div{
                    width: 90px;
                    height: 90px;
                    position: relative;
                    span{
                        max-height: 100%;
                    }
                }
            }
            &:nth-child(2){
                font-size: 14px;
            }
            &:nth-child(3){
                font-size: 14px;
                font-family: ${({ theme }: Props) => theme.fonts.sfPro_regular};
            }
            &:nth-child(4){
                font-size: 17px;
                font-family: ${({ theme }: Props) => theme.fonts.bold};
            }
           }
        }
    }

    >a{
        margin-left: auto;
    }
`