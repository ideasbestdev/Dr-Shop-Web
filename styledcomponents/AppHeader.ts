import styled from 'styled-components';
import { Theme } from './Theme';


export const AppHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    height: ${({ theme }: Theme) => theme.height.header};
    width: 100%;
    z-index: 99;
    color:  ${({ theme }: Theme) => theme.textColors.text_color_header};
    >div{
        background-color:  ${({ theme }: Theme) => theme.backgroundcolors.background_top_header};
        height: ${({ theme }: Theme) => theme.height.top_header};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4%;

    }
    >ul{
        display: flex;
        height: ${({ theme }: Theme) => theme.height.bottom_header};
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 4%;

        >li{
            &:first-child{
                display: flex;
               > a{
                    margin-right: 65px;
                }
                >ul{
                    display: flex;
                    align-items: center;
                    margin-left: -65px;
                    >li{
                        margin-left: 65px;
                        svg{
                            margin-top: 6px;
                        }
                    }
                }
            }
            &:last-child{
                display: flex;
                >div{
                    &:last-child{
                        margin-left: 33px;
                        display: flex;
                        align-items: center;
                        div{
                            &:first-child{
                                margin-right: 44px;
                                position: relative;
                                &:before{
                                    content: '';
                                    position: absolute;
                                    right: -22px;
                                    top: -2px;
                                    width: 2px;
                                    border-left: 2px solid #fff;
                                    height: 27px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`