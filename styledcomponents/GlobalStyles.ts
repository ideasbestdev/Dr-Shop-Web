import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

interface Props {
    theme: Theme,
}

export const GlobalStyles = createGlobalStyle`

@font-face {
     font-family: 'Montserrat-ExtraBold';
     src: url('/fonts/Montserrat-ExtraBold.woff');
}

@font-face {
     font-family: 'Montserrat-Bold';
     src: url('/fonts/Montserrat-Bold.woff');
}

@font-face {
     font-family: 'Montserrat-SemiBold';
     src: url('/fonts/Montserrat-SemiBold.woff');
}

@font-face {
     font-family: 'Montserrat-Medium';
     src: url('/fonts/Montserrat-Medium.woff');
}

@font-face {
     font-family: 'Montserrat-Italic';
     src: url('/fonts/Montserrat-Italic.woff');
}

@font-face {
     font-family: 'Montserrat-Regular';
     src: url('/fonts/Montserrat-Regular.woff');
}

@font-face {
     font-family: 'Poppins-Bold';
     src: url('/fonts/Poppins-Bold.woff');
}

* {
    padding: 0;
    margin: 0;
    list-style: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
    position: relative
}
body{
    font-family: ${({ theme }: Props) => theme.fonts.regular};
    overflow-x: hidden;
}

body,html {
    min-height: 100%;
    height: 100%;
    background: ${({ theme }: Props) => theme.backgroundcolors.background_body};
}

input[type="text"], input[type="password"], input[type="email"], input[type="tel"], select{
    outline: none;
    height: ${({ theme }: Props) => theme.height.input_height};
    width: 100%;
    padding: 0 10px;
}

a{
    font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
    font-size: 16px;
}

select{
    appearance: none;
    display: flex;
    align-items: center;
}

button{
    border: none;
    outline: none;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
    max-height: 100%
}
.PhoneInput{
        border-radius: 8px;
        padding-left: 10px;
        border: 1px solid #E1E1E1;
        input{
            border: none !important;
        }

}
#__next {
    padding-top: ${({ theme }: Props) => theme.height.header};
    height: auto;
    min-height: 100%;
    position: relative;
    width: 100%;
    padding-bottom: 300px;
}
`