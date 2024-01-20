import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
  theme: Theme,
  selected: number,
}

export const ProfileListSectionStyle = styled.section<Props>`
          width: 300px;
          padding-top: 100px !important;
          border-right: 1px solid black;
          h1{
            text-align: start;
            font-size: 26px;
            margin-bottom: 20px;
          }
          .image_container{
            margin-right: 20px;
          }
          .logout{
            color: #FF5C00;

            margin-left: 55px;
          }
          ul{
           width: 100%;
           li{
                padding-left: 10px;
                padding-right: 10px;
                   width: 100%;
                   a{
                      text-transform: capitalize;
                       cursor: pointer;
                       width: 90%;
                       display: flex;
                       align-items: center;
                       font-size: 20px;
                       padding: 10px 0;
                       font-family: ${({ theme }: Props) => theme.fonts.bold};
                       transition: color 0.3s, background-color 0.3s;
                       svg{
                           margin-right: 10px;
                       }
                       path{
                           transition: stroke 0.3s;
                       }
                    /*   &:hover{
                           background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
                           color: #fff;
                           border: none;
                           border-radius: 39px;
                           justify-content: center;
                           path{
                               stroke: #fff;
                           }
                       }*/
                   }
                   &:last-child{
                       a{
                           border-bottom: none;
                       }
                   }
                   &:nth-child(${({ selected }: Props) => selected ? selected : 1}){
                     background-color: #2262BC1A;
                     color: #2262BC;
                   }

               }
          }
`