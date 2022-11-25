import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const OrderProductListSectionStyle = styled.section<Props>`
    h1{
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        font-size: 21px;
        text-align: start;
        margin-bottom: 20px;
    }
    .scrollBar{
        div{
            &:nth-child(3){
             background: #E1E1E1;
            }
        }
    }
    ul{
        width: 400px;
        margin-top: -15px;
        li{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 30px 15px;
            border-bottom: 1px solid #D1D1D1;
            div{
                position: relative;
                &:nth-child(1){
                    height: 90px;
                    width: 90px;
                    margin-right: 30px;
                }
            }
            h2{
                font-size: 14px;
                font-family: ${({ theme }: Props) => theme.fonts.regular};
                color: #34283E;
                margin-bottom: 10px;
            }
            h3{
                font-size: 17px;
                font-family: ${({ theme }: Props) => theme.fonts.bold};
            }
            h4{
                color: #605A65;
                font-size: 14px;
                font-family: ${({ theme }: Props) => theme.fonts.sfPro_regular};
                flex: 1;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
`