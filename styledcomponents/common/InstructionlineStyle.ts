import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    index: number,
}

export const InstructionlineStyle = styled.section<Props>`
    ul{
        display: flex;
        width: 500px;
        margin: auto;
        justify-content: space-between;
        position: relative;
        &:before{
            content: "";
            background-color: #F3F3F3;
            position: absolute;
            left: 2px;
            top: 10.5px;
            z-index: 1;
            width: calc(100% - 4px);
            height: 9px;
        }
        &:after{
            content: "";
            background-color: #2262BC;
            position: absolute;
            left: 2px;
            top: 10.5px;
            z-index: 2;
            width: ${({ index }: Props) => `calc(${index} * 100%/4 - 4px)`};
            height: 9px;
        }
        li{
            position: relative;
            z-index: 3;
            /* width: 90px; */
            font-size: 14px;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding-bottom: 40px;
            font-family: ${({ theme }: Props) => theme.fonts.medium};
            color: #97979799;
            
            span{
                position: absolute;
                top: 40px;
                width: 90px;
                left: -30px
            }
            &:before{
                content: "";
                background-color: #F3F3F3;
                width: 30px;
                height: 30px;
                display: block;
                border-radius: 50%;
                /* align-self: center; */
            }  
            &::after{
                content: "";
                position: absolute;
                display: none;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                height: 12px;
                top: 5px;
                width: 6px;
                pointer-events: none;
                border-bottom: 4px solid white;
                left: 9.6px;
                border-right: 4px solid white;
            }
             /* &:first-child{
                text-align: start;
                &::before{
                    align-self: flex-start;
                }
            }
            &:last-child{
                align-items: flex-end;
                text-align: center;
                &::before{
                    align-self: flex-end;
                }
            }  */
            &.isActive{
                color: #2262BC;
                &::before{
                    background-color: #2262BC;
                }

                &::after{
                    display: block;
                }
            }
        }
    }
`