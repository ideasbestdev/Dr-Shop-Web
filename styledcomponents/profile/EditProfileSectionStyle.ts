import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const EditProfileSectionStyle = styled.section<Props>`
    flex: 1;
    background-color: #FAFAFA;
    min-height: 500px;
    padding: 28px 60px;
    display: flex;
    form{
        display: flex;
        flex-direction: column;
        flex: 1;
        h1{
            color: #486B92;
            margin-top: 20px;
            margin-bottom: 80px;
            font-size: 17px;
        }
        >div{
            &:first-child{
                width: 129px;
                height: 129px;
                position: relative;
                border-radius: 50%;
                margin-left: auto;
                margin-right: auto;
                border: 1px solid ${({ theme }: Props) => theme.globalColors.primary_color};
                img{
                    object-fit: cover;
                    border-radius: 50%;
                }
                label{
                    position: absolute;
                    bottom: -10px;
                    right: 21px;
                    z-index: 1;
                    cursor: pointer;
                }
            }
        }

        button{
            background: transparent;
            margin: 0 auto;
            display: block;
            a{
                margin-top: 80px;
            }
        }
        article{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            flex: 1;
            > ul{
                display: flex;
                flex-wrap: wrap;
                margin-top: -50px;
                width: 100%;
                justify-content: space-between;
                >li{
                    margin-top: 50px;
                    width: 50%;
                }
            }
        }
    }
`