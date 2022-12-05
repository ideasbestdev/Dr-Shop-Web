import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

interface Props {
    theme: Theme,
}

export const GlobalStyles = createGlobalStyle`

@font-face {
     font-family: 'Montserrat-ExtraBold';
     src: url('/fonts/Montserrat-ExtraBold.woff');
       font-display: swap;

}

@font-face {
     font-family: 'Montserrat-Bold';
     src: url('/fonts/Montserrat-Bold.woff');
       font-display: swap;

}

@font-face {
     font-family: 'Montserrat-Black';
    src: url('/fonts/Montserrat-Black.woff');
    font-display: swap;

}

@font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('/fonts/Montserrat-SemiBold.woff');
    font-display: swap;

}

@font-face {
     font-family: 'Montserrat-Medium';
     src: url('/fonts/Montserrat-Medium.woff');
     font-display: swap;

}

@font-face {
     font-family: 'Montserrat-Italic';
     src: url('/fonts/Montserrat-Italic.woff');
       font-display: swap;

}

@font-face {
     font-family: 'Montserrat-LightItalic';
     src: url('/fonts/Montserrat-LightItalic.woff');
       font-display: swap;

}

@font-face {
     font-family: 'Montserrat-Regular';
     src: url('/fonts/Montserrat-Regular.woff');
       font-display: swap;

}

@font-face {
     font-family: 'Poppins-Bold';
     src: url('/fonts/Poppins-Bold.woff');
       font-display: swap;

}

@font-face {
     font-family: 'SFProText-Regular';
     src: url('/fonts/SFProText-Regular.woff');
       font-display: swap;

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

input[type="number"]{
    -moz-appearance: textfield;
}

span{
    max-height: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="text"], input[type="number"], input[type="password"], input[type="email"], input[type="tel"], select{
    outline: none;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    font-family: ${({ theme }: Props) => theme.fonts.regular};
}

a{
    font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
    font-size: 16px;
}
//arrow_down
.intl-tel-input .flag-container .arrow{
    margin-left: 10px;
}
.intl-tel-input .flag-container .arrow:after{
    content: "";
    background-image: url(${({ theme }: Props) => theme.images.arrow_down.src});
    width: 9px;
    height: 12px;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    margin-top: 10px;
}
.intl-tel-input .flag-container .arrow.up:after, .intl-tel-input .flag-container .arrow.down:after{
    content: "";
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
    max-height: 100%;
    object-fit: contain;
}

.PhoneInput{
        border-radius: 8px;
        padding-left: 10px;
        border: 1px solid #E1E1E1;
        input{
            border: none !important;
        }
}

.intl-tel-input{
    width: 100%;
    height: 100%;
    .selected-flag{
        .iti-flag {
            transform: scale(1.2);
        }
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