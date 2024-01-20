import styled from "styled-components";
import { Theme } from "../Theme";

interface Props {
    theme: Theme,
}

export const InputStyle = styled.div`
    height: 45px;
    width: 456px;
    input[type="text"], input[type="number"], input[type="password"], input[type="email"], input[type="tel"]{
        padding: 0 20px;
        border: 1px solid #979797;
        background-color: transparent;
        font-size: 18px;
        font-family: ${({ theme }: Props) => theme.fonts.light};
        border-radius: 10px;
    }
    &.phone_input{
        display: flex;
//        border: 1px solid #979797;
  //      border-radius: 10px;

        input[type="text"], .country_code{
            border-radius: 0;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px; 
        }
        input[type="text"]:not(.country_code){
            border-radius: 0;
            border-left: none;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .country_code{

            width: 40px;
            padding: 0;
            text-align: center;
        }
        >div{
            
            &:first-child{
                width: 120px;
                i{
                    right: 10px;
                }
            }
        }
    }
`