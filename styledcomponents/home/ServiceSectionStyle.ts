import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const ServiceSectionStyle = styled.section`
    padding: 135px 0 241px;
    ul{
        display: flex;
        justify-content: space-around;
        max-width: 80%;
        margin: 0 auto;
        margin-top: 135px;
        li{
            color: #6E6E6E;
            text-align: center;
            margin-left: 50px;
            &:first-child{
                margin-left: 0;
            }
            h1{
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                font-size: 24px;
                margin-top: 14px;
            }
            article{
                display: flex;
                align-items: center;
                flex-direction: column;
                div{
                    &:nth-child(1){
                        position: relative;
                        max-width: 150px;
                        height: 100px;
                    }
                    &:last-child{
                        font-family: ${({ theme }: Props) => theme.fonts.italic};
                        font-size: 11px;   
                        max-width: 180px;
                        margin-top: 14px;                
                    }

                }
            }
        }
    }
`