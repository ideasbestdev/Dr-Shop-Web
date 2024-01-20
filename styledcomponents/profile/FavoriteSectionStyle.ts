import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const FavoriteSectionStyle = styled.section<Props>`
       flex: 1;
       background-color: #FAFAFA;
       min-height: 500px;
       padding-bottom: 40px;
       display: flex;
       position: relative;
       table{
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
        tr{
            height: 123px;

            &:nth-child(2n + 1){
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
            height: 123px;
            border: none;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(1){
                padding-left: 80px;
                display: flex;
                align-items: center;
                div{
                    font-size: 14px;
                    &:nth-child(1){
                        width: 90px;
                        height: 90px;
                        position: relative;
                        margin-right: 40px;
                    }
                    span{
                        max-height: 100%;
                        display: block;
                        text-align: start;
                        font-size: 17px;
                        font-family: ${({ theme }: Props) => theme.fonts.bold};
                        margin-top: 10px;
                    }
                }
            }
            
           }
        }
    }
`