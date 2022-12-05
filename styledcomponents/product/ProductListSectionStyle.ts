import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const ProductListSectionStyle = styled.div`
    padding: 40px 20px;
    >div{
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        color: ${({ theme }: Props) => theme.globalColors.primary_color};
        font-size: 16px;
        margin-left: 15px;
        margin-bottom: 20px;
    }
  >ul{
    &:nth-child(2){
        display: flex;
        flex-wrap: wrap;
        margin-left: -50px;
        width: calc(100% + 50px);
        margin-top: -30px;
        > li{
            margin-left: 50px;
            margin-top: 30px;
            width: calc(100%/3 - 50px);
            display: flex;
            justify-content: center;
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
        justify-content: center;    
        margin-top: 45px;
        display: flex;
        li{
            margin-left: 15px;
            &:first-child{
                margin-left: 0;
            }
        }
    }
  }
`