import styled from "styled-components";

export const InputStyle = styled.div`
    height: 40px;
    width: 400px;
    input[type="text"], input[type="number"], input[type="password"], input[type="email"], input[type="tel"]{
        border: none;
        padding: 0;
        border-bottom: 2px solid #8E8E8E80;
        background-color: transparent;
        color: #8E8E8E;
        &::placeholder{
            color: #8E8E8E;
            font-size: 16px;
            opacity: 1;
        }
    }
`