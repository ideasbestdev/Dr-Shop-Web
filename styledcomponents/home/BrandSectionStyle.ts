import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme
}

export const BrandSectionStyle = styled.section<Props>`
     padding: 30px ${({ theme }: Props) => theme.gridSpace};
     position: relative;
    .swiper {
        margin-top: 60px;

        .swiper-slide{
            //width: auto;

        }
    }
`