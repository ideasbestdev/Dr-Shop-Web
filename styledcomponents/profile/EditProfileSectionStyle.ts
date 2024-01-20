import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const EditProfileSectionStyle = styled.section<Props>`
     flex: 1;
    display: flex;
    position: relative;
    h2{
        width: 100%;
    }
    form{
         display: flex;
         align-items: center;
         flex-direction: column;
         padding: 48px 30px 20px;
         select{
            background-color: #fff;
        }
         .content{
             width: 100%;
             display: flex;
         }
         ul{
             margin-top: 25px;
             width: 100%;
             display: flex;
             flex-wrap: wrap;
             li{
                &:last-child{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    label{
                        &::before{
                            margin-right: 10px;
                        }
                    }
                }
                label{
                    &:first-child{
                        margin-bottom: 10px;
                        display: block;
                    }
                }
                 input[type="text"],  input[type="number"],  input[type="password"],  input[type="email"],  input[type="tel"], select{
                    font-size: 20px;
                }
                div{
                    height: 50px;
                }
                 width: 50%;
                 &:nth-child(even){
                     padding-left: 15px;
                 }
                 &:nth-child(odd){
                     padding-right: 15px;
                 }
                 div{
                     width: 100%;
                 }
                 &:not(even){
                     margin-top: 25px;
                 }
             }
         }
         button{
             width: 100%;
             margin-top: 80px;
             height: 50px;
          }
     }
`