import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const SwiperProductListSectionStyle = styled.section<Props>`
     padding: 30px ${({ theme }: Props) => theme.gridSpace};
     position: relative;
     &.home_margin{
         margin-top: 50px;
     }
     
     &.bigger_active{
        .swiper{
            padding-top: 30px;
            height: auto;
            padding-bottom: 40px;
        }
        .swiper-slide{
            transition: transform 0.3s;
            padding-left: 30px;
            padding-right: 30px;
            
            &:first-child{
                padding-left: 0;
            }
            &:last-child{
                padding-right: 0;
            }
        }

        .swiper-slide-active{
            transform: scale(1.2);
            padding-left: 60px;
            padding-right: 60px;
        }

     }

     .swiper {
        height: 429px;
        margin-top: 54px;
        padding-left: 3px;
        .swiper-slide{
            margin-top: 6px;
            width: auto;
        }
    }
`