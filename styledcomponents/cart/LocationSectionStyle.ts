import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LocationSectionStyle = styled.section`
       padding: 0 ${({ theme }: Props) => theme.gridSpace};
       &.v2{
        width: 100%;
        .card{
            padding: 20px;
        }
        h2, h3{
            width: 100%;
            text-align: start;
        }
       }
       .bottom_container{
            position: absolute;
            bottom: 30px;
            left: 0;
            display: flex;
            color: ${({ theme }: Props) => theme.globalColors.primary_color};
            padding-left: 54px;
            padding-right: 20px;
            width: 100%;
            font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            .default{
                display: none;
                width: 100px;
                height: 32px;
                color: white;
                background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
                align-items: center;
                justify-content: center;
                border-radius: 15px;
            }
            .set_default{
          //      margin-left: 50px;
             cursor: pointer;
            }
            &.default_container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .default{
                    display: flex;
                }
                .set_default{
                    display: none;
                }
            }
        }
        h2{
            margin-top: 60px;
            font-size: 40px;
        }
       h2, h3{
        width: 100%;
        text-align: center;
       }
       h3{
        font-size: 25px;
        font-family: ${({ theme }: Props) => theme.fonts.light};
        font-weight: normal;
       }
       .address_container{
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 40px;
            >a{
                margin-left: auto;
            }
            &.fromProfile{
                margin-right: 0;
                margin-left: 0;
            }
       }
        .address_list{

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .plus{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                cursor: pointer;
                position: relative;
                border: 3px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
            }
            


        
        }
        >a{
            max-width: 1200px;
            margin-left: auto;
        }
`