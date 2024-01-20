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
    .cart_number{
        position: absolute;
        top: -11px;
        left: 6px;
        color: ${({ theme }: Props) => theme.globalColors.secondary_color};
        width: 14px;
        font-size: 13px;
        text-align: center;
        font-weight: bold;
    }
    .burger{
        display: none;
    }
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
                >li{
                    position: relative;
                    display: flex;
                    align-items: center;
                    min-height: 34px;
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

        .account_info{
            position: absolute;
            top: 34px;
            background: white;
            padding: 20px;
            z-index: 1;
            width: 240px;
            left: -70px;
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.13);
            display: none;
            h3{
                font-size: 23px;
                font-weight: normal;
                font-family: ${({ theme }: Props) => theme.fonts.bold};
            }
            li{
                margin-top: 10px;
                a {
                    color: black;
                    font-size: 20px;
                }
            }
        }
        .account_container{
            &:hover{
                .account_info{
                    display: block;
                }
            }
        }
    }
    .notifcation_icon{
        cursor: pointer;
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
                    @media (max-width: 768px) {
                        margin-left: 13px;
                    }
                }

            }
        }
    }

    &.header_scroll{
     
    }

    .select_menu{
        width: 700px;
        max-width: max-content;
    }

    .select_control {
        border: none;
        min-width: 200px;
        .select_placeHolder, .selected_value{
            color: #2262BC;
            font-family: ${({ theme }: Props) => theme.fonts.bold};

        }
        .select_indicator{
            span{
                display: none;
            }
            svg{
                path {
                    fill: #2262BC;
                }
            }
        }

    }
    .cust_select_container{
        display: flex;
        align-items: center;
        position: relative;
        >i{
            height: 19px;
            position: absolute;
            left: 0;
            z-index: 1;
        }
    }
    .group-heading-wrapper{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid black;
            margin: 0 10px;
            svg{
                margin-top: -4px;
            }
            div{
                color: black;
                background-color: none;
                margin-bottom: 0;
                display: flex;
                height: 23px;
                font-size: 12px;
                padding: 0;
                padding-left: 5px;
            }
            &.group_open{
                border-color: #2262BC;
                div{
                    color: #2262BC;
                }
                path{
                    fill: #2262BC;
                }
            }
    }
    .categories{
        padding-left: 30px;
    }
    .select_control {
        padding-left: 20px;
        cursor: pointer;
        user-select: none;
        outline: none;
    }
    .select_option {
        padding: 0;
        padding-left: 15px;
        background: none !important;
        padding-top: 5px;
        font-size: 13px;
        color: #979797;
    }
    .search_input{
        flex: 1;
        padding: 0 20px;
        form{
            position: relative;
            .recomendation_container{
                position: absolute;
                left: 0;
                top: 51px;
                max-height: 400px;
                overflow: hidden;
                width: 100%;
                background: white;
                border-radius: 10px;
                border: 1px solid #bbb;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,.13);
                display: none;
                &.show{
                    display: block;
                }
                .recomendation_list{
                    li{
                        cursor: pointer;
                        a{
                            font-family: ${({ theme }: Props) => theme.fonts.bold};
                            font-size: 16px;
                            padding: 0 20px;
                            display: flex;
                            align-items: center;
                            height: 40px;
                            color: black;
                        }
                        &:hover{
                            background-color: #eee;
                        }
                        i{
                            height: 18px;
                            width: 18px;
                            margin-right: 20px;
                            svg{
                                height: 18px;
                                width: 18px;
                                path{
                                    fill: black;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 768px) {
        height: ${({ theme }: Props) => theme.height.phone_header};
        .bottom_section{
            height: ${({ theme }: Props) => theme.height.phone_header};
        }
        .categories {
            display: none;
        }
        .top_section{
            display: none;
        }
        .logo{
            svg{
                width: 90px;
                height: 46px;
            }
        }
    }

    .register_sigin{
        font-size: 13px;
        a{
            font-size: 13px;
            color: ${({ theme }: Props) => theme.globalColors.primary_color};
        }
        .register {
            display: flex;
            a {
                margin-left: 3px;
            }
        }
    }

    .group-heading-wrapper, .select_option  {
        cursor: pointer;
        div{
            cursor: pointer;
        }
    }
`