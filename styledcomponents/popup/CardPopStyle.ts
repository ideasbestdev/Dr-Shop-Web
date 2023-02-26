import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const CardPopStyle = styled.div`
        border-radius: 16px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        max-width: 700px;
        margin: auto;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 16px;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        filter: brightness(100%);
        .close{
            align-self: flex-end;
        }
        ul{
            width: 500px;
            li{
                width: 100%;
            }
        }

        .Add_Card{
            display: flex;
            align-items: center;
            a{
                font-family: ${({ theme }: Props) => theme.fonts.bold};
                color: #2262BC;
                text-decoration: underline;
                margin-left: 10px;
            }
        }

        .list_wrapper{
            width: 500px;
            overflow: hidden;
            ul{
                width: 520px;
                padding-right: 20px;
                overflow-y: auto;
                max-height: 350px;
            }
        }
        
        .bottom_section{
            width: 500px;
            padding-top: 50px;
            button{
                margin: auto;
                margin-top: 30px;
            }
        }

`