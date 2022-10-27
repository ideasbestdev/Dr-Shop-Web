import styled from 'styled-components';
import { Theme } from './Theme';


export const AppHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    height: ${({ theme }: Theme) => theme.height.header};
    width: 100%;
    z-index: 99;
    >div{
        background-color:  ${({ theme }: Theme) => theme.backgroundcolors.background_top_header};
        height: ${({ theme }: Theme) => theme.height.top_header};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 0 4%;
        color:  ${({ theme }: Theme) => theme.textColors.text_color_top_header};
    }
    nav{
        ul{
            display: flex;
            width: 100%;
            align-items: center;
            padding: 0 4%;
            color:  ${({ theme }: Theme) => theme.textColors.text_color_middle_header};
        }
       
        &:nth-child(2){
            background-color: ${({ theme }: Theme) => theme.backgroundcolors.background_middle_header};

            ul{
                height: ${({ theme }: Theme) => theme.height.middle_header};

                li{
                    &:nth-child(1){
                        display: flex;
                        > a{
                            max-width: 244px;
                        }
                    }
                    &:nth-child(2){
                        font-size: 24px;
                        margin: 0 32px;
                        font-family: ${({ theme }: Theme) => theme.fonts.semi_bold};
                        color: #6E6E6E;
                    }
                    &:nth-child(3){
    flex: 1;
                    }
                    &:nth-child(4){
                        display: flex;
                        a{
                            &:nth-child(1){
                                margin: 0 34px;
                            }
                        }
                    }
                }
            }
        }

        &:nth-child(3){
            background-color: ${({ theme }: Theme) => theme.globalColors.primary_color};
            ul{
                height: ${({ theme }: Theme) => theme.height.bottom_header};
                margin-left: -64px;
                width: calc(100% + 64px);
                padding-left: 129px;
                li{
                    margin-left: 64px;
                    a{
                        color:  ${({ theme }: Theme) => theme.textColors.text_color_bottom_header};
                    }
                }

            }
        }
    }
`