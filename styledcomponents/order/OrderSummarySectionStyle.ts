import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const OrderSummarySectionStyle = styled.section<Props>`
    width: 50%;
    padding: 40px;
    background-color: #2262BC0D;
    h2{
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        font-size: 24px;
        line-height: normal;
        padding-bottom: 5px;
    }
    .order_summary_title{
        margin-bottom: 20px;
    }
    >ul{
        >li{
            &:last-child{
                h3{
                    padding-bottom: 20px;
                border-bottom: 3px solid #B4B4B4;
                }
            }
        }
    }
    table{
        width: 100%;
        .title{
            max-width: 220px;
        }
        td{
            padding: 5px 0;
            border-bottom: 1px solid #B4B4B4;
            &:nth-child(2){
                padding: 0 40px;
                text-align: center;
            }

        }
        tr{
            &:first-child{
                td{
                    &:nth-child(3){
                        text-align: center;
                    }
                }
            }
        }
        tr:not(:first-child){
           td{
            &:nth-child(3){
                text-align: end;
            }
           }
        }
    }
    h3{
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        font-weight: normal;
        font-size: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #B4B4B4;
        padding-bottom: 10px;
        padding-top: 10px;
        cursor: pointer;
        &.isExpanded{
            span{
                transform: rotate(180deg);
            }
        }

    }
    .order_product {
        display: flex;
        justify-content: space-between;
        h4{
            font-family: ${({ theme }: Props) => theme.fonts.light};
            font-weight: normal;
            font-size: 17px;
            max-width: 300px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .collapseList{
        li{
            padding: 10px 0;
            border-top: 1px solid #B4B4B4;
            border-bottom: 1px solid #B4B4B4;
            &:first-child{
                border-top: none;
            }
        }
    }

    button{
        margin-top: 40px;
        height: 50px;
        width: 100%;
        cursor: pointer;
    }
`