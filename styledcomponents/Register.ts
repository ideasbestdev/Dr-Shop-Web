import styled from 'styled-components';
import { Theme } from './Theme';


export const Register = styled.main`
    padding: 40px 4%;
    h1{
        text-align: center;
        color: #E7B944;
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 400;
    }

    h2{
        font-size: 30px;
        color: #845FA1;
    }

    form{
        > ul{
            margin-top: -33px;
            >li{
                margin-top: 33px;
                >ul{
                     display: flex;
                     flex-wrap: wrap;
                    >li{
                        width: 50%;
                        &:nth-child(2n + 2){
                            display: flex;
                            justify-content: flex-end;
                        }
                       > div{
                            width: 330px;
                            margin-top: 22px;
                            position: relative;
                        }

                        label{
                            display: block;
                            color: ${({ theme }: Theme) => theme.textColors.text_color_label};
                            margin-bottom: 5px;
                        }
                        input{
                            border-radius: 8px;
                            border: 1px solid #E1E1E1;
                        }
               
                    }
                }
            }
        }
        >div{
             margin-top: 35px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: center;
        }
    }

    button{
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
    }
`