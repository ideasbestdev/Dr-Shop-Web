import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const ProductItemListStyle = styled.div`
  >  div{
        &:nth-child(1){
            width: 300px;
            height: 300px;
            background-color: white;
            padding: 30px;
            border-radius: 19px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            span{
                max-height: 220px;
                max-width: 220px;
            }
            i{
                position: absolute;
                right: 5px;
                bottom: -30px;
                cursor: pointer;
                &:hover{
                    svg{
                        path{
                            transition: fill 0.3s;
                            fill: ${({ theme }: Props) => theme.globalColors.secondary_color} !important;
                        }
                    }
                }
            }
        }

        &:nth-child(2){
            padding-left: 20px;
        }
    }
    ul{
        display: flex;
        margin-left: -6px;
        width: calc(100% + 6px);
        margin-top: 18px;
        li{
            margin-left: 6px;
        }
    }
    h2{
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        font-size: 16px;
        font-weight: normal;
        color: #34283E;
        margin-top: 10px;
    }
    h3{
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        font-size: 20px;
        font-weight: normal;
        color: #34283E;
        margin-top: 10px;
    }
`