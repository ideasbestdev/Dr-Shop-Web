import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme
}

export const CategorySectionStyle = styled.section<Props>`
     padding: 30px ${({ theme }: Props) => theme.gridSpace} 30px;
     position: relative;
     .swiper-wrapper{
        /* display: flex;
        justify-content: space-between;
        margin: 34px auto 0; */
        margin-top: 34px;
        max-width: 1200px;
        .swiper-slide{
            width: auto;
            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                color: black;
                .image_container{
                    height: 143px;
                    width: 200px;
                }
                h3{
                    font-weight: normal;
                    font-size: 20px;
                    text-align: center;
                    margin-top: 12px;
                }
            }
        }
     }
`