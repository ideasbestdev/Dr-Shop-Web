import styled from "styled-components";
import { Theme } from "../Theme";
interface Props {
    theme: Theme,
}
export const InputIconStyle = styled.div`
    position: relative;

    input[type="text"]{
        border: none;
        padding-left: 25px;
        padding-right: 50px;
        height: 50px;
        border-radius: 10px;
        font-family: ${({ theme }: Props) => theme.fonts.regular};
        font-size: 16px;
        background-color: #9797971A;
        &::placeholder, &::-ms-input-placeholder{
            font-family: ${({ theme }: Props) => theme.fonts.regular};
            font-size: 16px;
        }
        @media (max-width: 768px) {
            height: 30px;
            font-size: 11px;
            &::placeholder, &::-ms-input-placeholder{
                font-size: 11px;
            }
        }
    }

    i{
        position: absolute;
        right: 20px;
        top: 14px;
        @media (max-width: 768px) {
            top: 8px;
            svg{
                width: 14px;
                height: 14px;
            }
        }
    }

    
`