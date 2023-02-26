import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}


export const BannerSectionStyle = styled.section`
    display: flex;
    position: relative;
    .content{
        z-index: 1;
        position: absolute;
        padding: 0 ${({ theme }: Props) => theme.gridSpace};
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1{
            max-width: 470px;
            color: #fff;
        }
        a{
            color: #fff;
            background-color: #89CA00;
            width: 266px;
            height: 70px;
        }
    }
    .image_container{
        width: 100%;
        min-height: 550px;
        img{
            object-fit: cover;
        }
    }
`