import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const HeaderStyle = styled.header<Props>`
    position: fixed;
    left: 0;
    top: 0;
    height: ${({ theme }: Props) => theme.height.header};
    width: 100%;
    z-index: 99;
    transition: height 0.3s;
    background-color: white;
    .top_section{
        padding: 0 ${({ theme }: Props) => theme.gridSpace};
        background-color: white;
        height: ${({ theme }: Props) => theme.height.top_header};
        display: flex;
        width: 100%;
        border-bottom: 1px solid #E8E8E8;
        align-items: center;
        justify-content: flex-end;
        nav{
            >ul{
                display: flex;
                align-items: center;
                li{
                    position: relative;
                    display: flex;
                    align-items: center;
                    min-height: 22px;
                    a{
                        display: flex;
                        align-items: center;
                    }
                    &:not(:first-child){
                        margin-left: 22px;
                        &::before{
                            content: "";
                            height: 18px;
                            width: 1px;
                            border-left: 1px solid #A5A5A5;
                            left: -10px;
                            position: absolute;
                        }
                    }
                }
                i {
                    margin-right: 10px;
                }
            }
        }
    }

    .bottom_section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${({ theme }: Props) => theme.gridSpace};
        height: ${({ theme }: Props) => theme.height.bottom_header};

        nav{
            width: 100%;
            >ul{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .icon_group{
            display: flex;
            a{
                .notifcation_icon{
                    cursor: pointer;
                }
                position: relative;
                &:not(:first-child){
                    margin-left: 25px;
                }

            }
        }
    }

    &.header_scroll{
     
    }
`