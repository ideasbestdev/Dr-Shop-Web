import styled from "styled-components";
import { Theme } from "../Theme";
interface Props {
    theme: Theme,
}
export const InputIconStyle = styled.div`
    position: relative;
    min-width: 800px;
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
    }

    i{
        position: absolute;
        right: 20px;
        top: 14px;
    }
`