import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const FooterStyle = styled.footer<Props>`
    width: 100%;
    height: ${({ theme }: Props) => theme.height.footer};
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    border-top: 52px solid #2262BC;
    @media (max-width: 768px) {
        height: ${({ theme }: Props) => theme.height.phone_footer};

    }
    .middle_container{
        display: flex;
        padding: 96px ${({ theme }: Props) => theme.gridSpace} 75px;
        background-color: #97979726;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        .links_group{
            display: grid;
            grid-template-columns: auto auto auto;
            column-gap: 160px;
            @media (max-width: 768px) {
                grid-template-columns: auto;
            }
            h2{
                font-size: 20px;
                font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
                color: #000000;
            }
            .subItem{
                li{
                    margin-top: 14px;
                    a{
                        color: #594A42;
                    }
                }
            }
        }

        .contact_info{
            .top_content{
                display: flex;
                align-items: center;
                .right_content{
                    margin-left: 13px;
                    display: flex;
                    flex-direction: column;
                    span{
                        font-size: 16px;
                    }
                    a{
                        color: #000000;
                        font-size: 23px;
                    }
                }
            }
            .middle_content{
                margin-top: 44px;
                h2{
                    font-size: 20px;
                    font-family: ${({ theme }: Props) => theme.fonts.medium};
                    font-weight: normal;
                }
                address{
                    margin-top: 12px;
                    font-size: 16px;
                }
            }

            .bottom_content{
                margin-top: 38px;
                ul{
                    display: flex;
                    li{
                        &:not(:first-child){
                            margin-left: 45px;
                        }
                    }
                }
            }
        }
    }
    .bottom_container{
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${({ theme }: Props) => theme.gridSpace};
        background-color: #EAEAEA;
        a{
            color: #000000;
            font-size: 16px;
        }
        ul{
            display: flex;
            li{
                &:not(:first-child){
                    margin-left: 41px;
                }
            }
        }
    }
`