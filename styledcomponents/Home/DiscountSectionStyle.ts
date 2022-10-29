import styled from 'styled-components';
import { Theme } from '../Theme';
interface Props {
    theme: Theme,
}

export const DiscountSectionStyle = styled.section`
    background-color: #EBEBEB;
    padding: 55px 0;
    >div{
        position: relative;
        display: flex;
        height: 300px;
        div{
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            border-bottom: 300px solid #0031778C;
            border-left: 0 solid transparent;
            border-right: 300px solid transparent;
            border-top: 0 solid transparent;
            h1{
                position: absolute;
                z-index: 1;
                color: white;
                font-size: 70px;
                width: 100%;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: ${({ theme }: Props) => theme.fonts.poppins_bold};

            }
        }
    }
`