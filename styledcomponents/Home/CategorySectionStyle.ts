import styled from 'styled-components';
import { Theme } from '../Theme';

interface Prop {
    theme: Theme
}

export const CategorySectionStyle = styled.section<Prop>`
   padding: 192px 70px 215px;
   max-width: 1200px;
   margin: 0 auto;
   ul{
    margin-top: 70px;
    display: flex;
    margin-left: -10px;
    width: calc(100% + 10px);
    flex-wrap: wrap;
    justify-content: space-between;
    li{
        width: 250px;
        margin-left: 10px;
        margin-top: 50px;
        a{
            display: flex;
        flex-direction: column;
        align-items: center;
        }
        i{
            width: 160px;
            height: 160px;
            background-color: #F3F3F3;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 43px;
            transition: background-color 0.3s;
            svg{
                width: 70px;
                height: 70px;
                path, rect{
                    transition: fill 0.3s;
                }
            }
        }
        h2{
            margin-top: 10px;
            font-family: ${({ theme }: Prop) => theme.fonts.semi_bold};
            color: #BDBDBD;
            font-size: 25px;
            transition: color 0.3s;

        }
        &:hover{
            i{
                background-color: ${({ theme }: Prop) => theme.globalColors.primary_color};
                svg{
                    path, rect{
                        fill: #ffffff;
                    }
                }
            }
            h2{
                color: ${({ theme }: Prop) => theme.globalColors.primary_color};
            }
        }
    }
   }
`