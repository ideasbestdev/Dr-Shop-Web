import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const OrderListStyle = styled.section<Props>`
    .tab{
        display: flex;
        margin-top: 25px;
        li{
            font-size: 25px;
            font-family: ${({ theme }: Props) => theme.fonts.medium};
            &:last-child{
                margin-left: 61px;
            }
            &.selected{
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
                border-bottom: 4px solid #2262BC;
            }
        }
    }

    .orderList{
        margin-top: 30px;
        width: 100%;
        .center_text{
        //    text-align: center;
        }
        .number{
            width: 200px;
        }
        tr{
            /* display: flex;
            justify-content: space-between; */
            font-family: ${({ theme }: Props) => theme.fonts.bold};
            font-size: 20px;
            box-shadow: 0px 3px 6px #00000038;
            height: 61px;
            padding: 0 30px;
            align-items: center;
            margin-top: 15px;
            td{
                padding: 0 20px;
            }
            a{
                color: #2262BC;
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            }
        }
    }
`