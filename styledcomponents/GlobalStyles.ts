import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none
}

html {
    scroll-behavior: smooth;
    position: relative
}


body,html {
    min-height: 100%;
    height: 100%;
    background: ${({ theme }: Theme) => theme.backgroundcolors.background_body};
}

input[type="text"], input[type="password"], input[type="email"], input[type="tel"]{
    outline: none;
    height: ${({ theme }: Theme) => theme.height.input_height};
    width: 100%;
    padding: 0 10px;
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
    padding-top: ${({ theme }: Theme) => theme.height.header};
    height: auto;
    min-height: 100%;
    position: relative;
    width: 100%;
//    padding-left: ${({ theme }: Theme) => theme.width.sidebar};
    padding-bottom: 50px;
}
`