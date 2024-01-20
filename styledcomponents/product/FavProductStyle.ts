import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const FavProductStyle = styled.section<Props>`
    padding: 87px ${({ theme }: Props) => theme.gridSpace} 0;
    .table_container{
        padding: 77px 0px 0px  100px;
    }
    ul{
        display: table;
        border-collapse: collapse;
        width: 100%;
        li{
            display: table-row;
            font-size: 20px;
            &:first-child{
                height: 50px;
            }
            &:not(:first-child){
                height: 200px;
                border-top: 1px solid #979797;
                border-bottom: 1px solid #979797;
            }
            >div{
                display: table-cell;
                vertical-align: middle;
                position: relative;  
            }
            .product_first{
                padding-left: 258.28px;
            }
            .image_container{
                width: 110px;
            }
            .unit_price{
                width: calc(100% - 940px);
                div{
                    display: flex;
                    justify-content: center;
                    span{
                        min-width: 111.43px;
                    }
                }
            }
            .content{
                display: flex;
                align-items: center;
                .image{
                    padding-left: 30px;
                    display: flex;
                    align-items: center;
                }
                .close{
                    margin-right: 40px;
                }
                .product_title{
                    margin-left: 55px;
                }
            }
            .product_content{
                width: 520px;
            }
            .button{
                width: 420px;
            }
            .button_content{
                display: flex;
                align-items: center;
                .status{
                    margin-right: 130px;
                }
            }
        }
    }

    &.noItems{
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        a{
            margin: 0 auto;
            margin-top: 40px;
            font-family: ${({ theme }: Props) => theme.fonts.medium};
            font-size: 20px;
        }
    }
`