import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const VerificatePopStyle = styled.div`
        background: rgba(255, 255, 255, 0.8);
        border-radius: 16px;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        filter: brightness(100%);
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 700px;
        justify-content: center;
        text-align: center;
        margin: 0 auto;
        .close{
            align-self: flex-end;
        }
        
        .countdown{
            color: #2262BC;
            font-size: 32px;
            font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
            margin-top: 20px;
        }

        button{
            margin-top: 20px;
        }

        .description{
            margin-top: 20px;
            font-size: 25px;
            font-family: ${({ theme }: Props) => theme.fonts.light};

        }
        .ReactInputVerificationCode__container {
            margin-top: 43px;
          --ReactInputVerificationCode-itemWidth: 40px;
          --ReactInputVerificationCode-itemHeight: 40px;
        }

         .ReactInputVerificationCode__item {
          position: relative;
          color: #2262BC;
          font-weight: 500;
        }

         .ReactInputVerificationCode__item,
        .ReactInputVerificationCode__item.is-active {
          box-shadow: none;
        }

        .ReactInputVerificationCode__item {
            &:after{
                content: "";
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                height: 3px;
                background-color: black;
                transition: background-color 0.2s ease-out;
            }

            &.is-filled{
                &::after{
                    background-color: #046cde;
                }
            }
            &.is-active{
                &::after{
                    background-color: #046cde;
                }
            }

        }

`