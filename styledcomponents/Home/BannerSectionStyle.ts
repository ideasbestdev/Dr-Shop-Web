import styled from 'styled-components';


export const BannerSectionStyle = styled.section`
    display: flex;
    height: 100vh;
    max-height: 800px;
    > div{
        &:nth-child(1){
            flex: 1;
            min-width: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            article{
                max-width: 550px;
            }
        }
        &:nth-child(2){
            position: relative;
            max-width: 55%;
            div{
                height: 100%;
            }
            span{
                min-height: 100%;
                img{
                    object-fit: cover;
                }
            }
        }
    }
`