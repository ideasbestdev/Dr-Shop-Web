import styled from 'styled-components';
import { Theme } from '../Theme';
interface Props {
    theme: Theme,
}

export const DiscountSectionStyle = styled.section`
    padding-top: 30px;
    width: 100%;
    position: relative;
    >div{
        position: relative;
        display: flex;
        height: 400px;
        img{
            object-fit: cover;
        }
        div{
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
            border-bottom: 400px solid #2262BC8C;
            border-left: 0 solid transparent;
            border-right: 400px solid transparent;
            border-top: 0 solid transparent;
            padding-left: 20px;

            h1{
                position: absolute;
                z-index: 1;
                color: white;
                font-size: 107px;
                width: 100%;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: ${({ theme }: Props) => theme.fonts.extra_bold};
            }
        }
    }
`