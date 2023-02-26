import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme
}

export const SupplierSectionStyle = styled.section`
       padding: 166px 0 241px;
        background-color: #EBEBEB;
        padding-left: calc(${({ theme }: Props) => theme.gridSpace} + 80px);
        .swiper {
            mix-blend-mode: darken;
        }
        .swiper-wrapper{
            padding-top: 110px;
            align-items: center;
            .swiper-slide{
                width: auto;
                &:last-child{
                    padding-right: 40px;
                }
            }
        }
        
`