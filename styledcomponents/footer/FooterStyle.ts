import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const FooterStyle = styled.footer`
    padding: 50px 4%;
    width: 100%;
    height: 300px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #ffffff;
    background-color: ${({ theme }: Props) => theme.globalColors.primary_color};
    display: flex;

    >div{
        &:nth-child(1){
            margin-right: 50px;
            article{
                div{
                    &:nth-child(1){
                        max-width: 200px;
                    }
                    &:nth-child(2){
                        max-width: 360px;
                        font-size: 13px;
                        margin-top: 30px;
                        line-height: 19px;
                    }
                }
            }
        }
        &:nth-child(2){
            >ul{
                display: flex;
                padding-top: 70px;
                margin-left: -60px;
                width: calc(100% + 60px);
                >li{
                    margin-left: 60px;
                    ul{
                        margin-top: -15px;
                        li{
                            margin-top: 15px;
                            a{
                                color: #ffffff;
                                font-size: 16px;
                                transition: color 0.3s;
                                &:hover{
                                    color: ${({ theme }: Props) => theme.globalColors.secondary_color};
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`