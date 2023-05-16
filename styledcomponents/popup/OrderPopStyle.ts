import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const OrderPopStyle = styled.div`
        border-radius: 16px;
        padding: 30px;
        padding-bottom: 70px;
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
        div{
            font-size: 25px;
        }
        a{
            margin-left: auto;
            margin-right: auto;
        }
`