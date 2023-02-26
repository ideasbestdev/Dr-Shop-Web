import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}
export const DescriptionStyle = styled.div`
    font-weight: normal;
    h3{
        font-family: ${({ theme }: Props) => theme.fonts.semi_bold};
        font-size: 18px;
        margin-bottom: 8px;
    }
    ul{
        padding-left: 10px;
        li{
            display: flex;
            position: relative;
            padding-left: 18px;
            color: #999999;
            font-size: 18px;
            font-family: ${({ theme }: Props) => theme.fonts.regular};

            &:not(:first-child){
                margin-top: 8px;
            }
            &::before{
                content: "";
                height: 6px;
                width: 6px;
                background-color: #999999;
                border-radius: 50%;
                position: absolute;
                top: 10.5px;
                left: 0;
            }

        }
    }
`