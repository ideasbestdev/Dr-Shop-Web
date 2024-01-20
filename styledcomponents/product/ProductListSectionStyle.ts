import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const ProductListSectionStyle = styled.div`
    padding: 40px 20px;
    position: relative;
    >div{
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        color: ${({ theme }: Props) => theme.globalColors.primary_color};
        font-size: 16px;
        margin-left: 15px;
        margin-bottom: 20px;
        &:first-child{
            display: flex;
            background-color: #70707026;
            padding-left: 20px;
            height: 54px;
            align-items: center;
            border-radius: 10px;
            div{
                min-width: 136px;
                height: 44px;
                &:first-child{
                    min-width: 228px;
                    margin-right: 10px;
                }
                select{
                    font-size: 17px;
                    font-family: ${({ theme }: Props) => theme.fonts.regular};
                    border: 1px solid #B4B4B4;
                    border-radius: 22px;
                }
            }
        }
    }
  >ul{
    /* justify-content: center; */
    &:nth-child(2){
        min-height: 300px;
        display: flex;
        flex-wrap: wrap;
        margin-left: -19px;
        width: calc(100% + 19px);
        margin-top: -30px;
        > li{
            margin-left: 19px;
            margin-top: 30px;
           // min-width: 290px;
            width: calc(100%/5 - 19px); 
            display: flex;
            justify-content: center;
            @media (max-width: 1390px) {
                width: calc(100%/4 - 19px); 
            }
            @media (max-width: 1170px) {
                width: calc(100%/3 - 19px); 
            }
            @media (max-width: 950px) {
                width: calc(100%/2 - 19px); 
            }
            >div{
                >div{
                    &:nth-child(1){
                        box-shadow: 0px 3px 6px #00000038;
                    }
                }
            }
        }
    }
    &:nth-child(3){
        max-width: 100%;
        margin: 0 auto;
        align-items: center;
        justify-content: flex-end;    
        margin-top: 25px;
        display: flex;
        li{
            margin-left: 6px;
            &:first-child{
                margin-left: 0;
            }
        }
    }
  }

  
  &.noItems{
        min-height: 500px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        h2{
            text-align: center;
            margin: auto;
        }
    }
`