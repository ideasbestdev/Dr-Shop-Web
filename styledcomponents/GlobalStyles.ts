import { createGlobalStyle } from 'styled-components'
import { Theme } from './Theme'

interface Props {
    theme: Theme,
}

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Nunito-ExtraBold';
    src: url('/fonts/Nunito-ExtraBold.woff2') format('woff2'),
        url('/fonts/Nunito-ExtraBold.woff') format('woff');
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito-Bold';
    src: url('/fonts/Nunito-Bold.woff2') format('woff2'),
         url('/fonts/Nunito-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito-SemiBold';
    src: url('/fonts/Nunito-SemiBold.woff2') format('woff2'),
         url('/fonts/Nunito-SemiBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;

}

@font-face {
    font-family: 'Nunito-Black';
    src: url('/fonts/Nunito-Black.woff2') format('woff2'),
        url('/fonts/Nunito-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito-Medium';
    src: url('/fonts/Nunito-Medium.woff2') format('woff2'),
         url('/fonts/Nunito-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;

}

@font-face {
    font-family: 'Nunito-Regular';
    src: url('/fonts/Nunito-Regular.woff2') format('woff2'),
         url('/fonts/Nunito-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;

}


@font-face {
    font-family: 'Nunito-Light';
    src: url('/fonts/Nunito-Light.woff2') format('woff2'),
        url('/fonts/Nunito-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
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

input{
    &::placeholder, &::-ms-input-placeholder{
        color: #979797;
        font-size: 21px;
        font-family: ${({ theme }: Props) => theme.fonts.light};
    }
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
    font-size: 21px;
    padding: 0 10px;
    font-family: ${({ theme }: Props) => theme.fonts.light};
}

a{
    font-family: ${({ theme }: Props) => theme.fonts.regular};
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
    max-height: 100%;
    object-fit: contain;
}

.image_container{
    position: relative;
    span{
        height: 100% !important;
        width: 100% !important;
    }
}

.price{
        display: flex;
        font-size: 23px;
        color: #2262BC;
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        justify-content: space-between;
        line-height: 34px;
        align-items: center;
        font-weight: normal;
        del{
            font-size: 20px;
            color: #979797;
            font-family: ${({ theme }: Props) => theme.fonts.medium};
            span{
                text-decoration: line-through;
            }
        }
}

main{
    >section:last-child{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    padding-bottom: 100px;
    &.noPaddingBottom{
        padding-bottom: 0;
    }
}

.cust_select_container{
    min-width: 250px;
}

.group_collapsed {
  display: none;
}


.card{
  width: 48%;
  height: 192px;
  box-shadow: 1px  1px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  background-color: white;
  padding: 20px 84px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-top: 33px;
  .circle{
      position: absolute;
      top: 20px;
      right: 20px;
      width: 25px;
      height: 25px;
      border: 1px solid #979797;
      border-radius: 50%;
      &:after{
          content: "";
          width: 19px;
          height: 19px;
          display: none;
          position: absolute;
          top: 2px;
          left: 2px;
          border-radius: 50%;
          background-color: #2262BC;
      }

  }
  &.is_Active{
      .circle{
          border-color:  #2262BC;
          &::after{
          display: block;
          }
      }
   
  }
  .content{
      display: flex;
      i{
          margin-right: 15px;
          margin-top: 3px;
      }
      font-size: 25px;
  }
  &:last-child{
      padding: 0;
      align-items: center;
  }
}

.card .plus ~ h4{
    font-size: 22px;
    color: ${({ theme }: Props) => theme.globalColors.primary_color};
    font-family: ${({ theme }: Props) => theme.fonts.regular};
    margin-top: 5px;
    font-weight: normal;
}
.credit_card{
    padding: 20px;
    display: block;
    .image_container{
        width: 90px;
        height: 70px;

    }
    .text{
        font-size: 76px;
        color: #2262BC;
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        position: absolute;
        right: 10px;
        bottom: 0;
        line-height: 56px;
        opacity: 0.06;
    }

    .number{
        position: absolute;
        top: 20px;
        right: 80px;
        font-size: 20px;
        font-family: ${({ theme }: Props) => theme.fonts.bold};

    }
}

#__next {
    padding-top: ${({ theme }: Props) => theme.height.header};
    height: auto;
    min-height: 100%;
    position: relative;
    width: 100%;
    padding-bottom: ${({ theme }: Props) => theme.height.footer};
    @media (max-width: 768px) {
        padding-top: ${({ theme }: Props) => theme.height.phone_header};
        padding-bottom: ${({ theme }: Props) => theme.height.phone_footer};

    }
}
`