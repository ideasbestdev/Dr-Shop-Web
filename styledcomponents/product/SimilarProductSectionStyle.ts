import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const SimilarProductSectionStyle = styled.div`
   background-color: #EBEBEB;
   padding: 40px 0 40px 40px;
   h1{
      margin-bottom: 30px;
      text-align: start;
        font-size: 19px;
    }
   .swiper-wrapper{
      .swiper-slide{
        width: auto;
        &:last-child{
         padding-right: 40px;
        }
        >div{
            >div{
                &:nth-child(1){
                    width: 220px;
                    height: 220px;
                    span{
                        max-width: 150px;
                        max-height: 170px;
                        img{
                            object-fit: contain;
                        }
                    }
                    i{
                        right: 3px;
                        bottom: -37px;
                        svg{
                            width: 48px;
                        }
                    }
                }
                svg{
                    width: 12px;
                }
                ul{
                    margin-top: 10px;
                }
                h2, h3{
                    margin-top: 5px;
                }
            }
        }
    }
   }
`