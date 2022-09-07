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
    background: ${({ theme }: Theme) => theme.colors.background_body};
}

img {
    display: block;
    height: auto;
    max-width: 100%;
    max-height: 100%
}
#root {
    padding-top: ${({ theme }: Theme) => theme.height.header};
    height: auto;
    min-height: 100%;
    position: relative;
    width: 100%;
    padding-left: ${({ theme }: Theme) => theme.width.sidebar};
    padding-bottom: 50px;
}
`