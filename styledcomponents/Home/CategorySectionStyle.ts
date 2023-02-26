import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme
}

export const CategorySectionStyle = styled.section<Props>`
     padding: 30px ${({ theme }: Props) => theme.gridSpace} 30px;
     position: relative;
     ul{
        display: flex;
        justify-content: space-between;
        margin: 34px auto 0;
        max-width: 1200px;
        li{
            a{
                display: flex;
                flex-direction: column;
                align-items: center;
                .image_container{
                    height: 143px;
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