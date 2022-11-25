import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const OrderSummarySectionStyle = styled.section<Props>`
  width: 348px;
  >div{
    width: 100%;
    height: 316px;
    border: 1px solid #486B92;
    border-radius: 20px;
    padding: 30px 20px;
    h1{
        font-size: 20px;
        margin-bottom: 50px;
    }
    ul{
        width: 100%;
        margin-top: -15px;
        li{
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 15px 0;
            border-bottom: 1px solid #8A8A8A80;
            color: ${({ theme }: Props) => theme.globalColors.primary_color};
            h2{
                font-size: 17px;
            }
            h3{
                font-size: 17px;
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
            }
            span{
                font-size: 17px;
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
                color: #8A8A8A;
                opacity: .5;
            }

            &:last-child{
                border-bottom: none;
                padding: 0;
                margin-top: 10px;
                span{
                    opacity: 1;
                }
            }
        }
    }

  }
  a{
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    >span{
        margin-top: 60px;
        color: ${({ theme }: Props) => theme.globalColors.primary_color};
        font-family: ${({ theme }: Props) => theme.fonts.italic};
        display: block;
        font-size: 13px;
        a{
            font-size: 13px;
            font-family: ${({ theme }: Props) => theme.fonts.italic};
            border-bottom: 1px solid ${({ theme }: Props) => theme.globalColors.primary_color};
        }
    }
`