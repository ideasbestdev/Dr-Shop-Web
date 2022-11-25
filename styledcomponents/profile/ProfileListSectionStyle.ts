import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
    selected: number,
}

export const ProfileListSectionStyle = styled.section<Props>`
          width: 250px;
          h1{
            text-align: start;
            font-size: 26px;
            margin-bottom: 20px;
          }
          ul{
           width: 100%;
           li{
                   width: 100%;
                   a{
                       cursor: pointer;
                       width: 90%;
                       display: flex;
                       align-items: center;
                       font-size: 17px;
                       color: #6E6E6E;
                       padding: 26px 0;
                       border-bottom: 1px solid #6E6E6E80;
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
                       a{
                           width: 100%;
                           color: #fff;
                           border: none;
                           background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
                           border-radius: 39px;
                           justify-content: center;
                           path{
                               stroke: #fff;
                           }
                       }
                   }

                   &:nth-child(${({ selected }: Props) => selected ? selected - 1 : 1}){
                        a{
                            border: none;
                        }
                   }
               }
          }
`