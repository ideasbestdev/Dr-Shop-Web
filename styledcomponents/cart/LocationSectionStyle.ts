import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const LocationSectionStyle = styled.section`
       padding: 0 ${({ theme }: Props) => theme.gridSpace};
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
                border: 1px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                color: ${({ theme }: Props) => theme.globalColors.primary_color};
            }
            


        
        }
        >a{
            max-width: 1200px;
            margin-left: auto;
        }
`