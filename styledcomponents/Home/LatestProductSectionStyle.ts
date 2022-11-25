import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
   theme: Theme
}

export const LatestProductSectionStyle = styled.section`
   background-color: #EBEBEB;
   padding: 142px 0 126px calc(${({ theme }: Props) => theme.gridSpace} + 80px);
   h1{
      margin-bottom: 80px;
   }
   .swiper-wrapper{
      .swiper-slide{
        width: auto;
        &:last-child{
         padding-right: 40px;
        }
    }
   }
`