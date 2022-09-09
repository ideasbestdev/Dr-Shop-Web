import styled from 'styled-components';

interface Props {
    show: boolean;
}

export const AppCustomSelect = styled.div`
    position: relative;
    z-index: 1;
    span{
        border: 1px solid #E1E1E1;
        height: 64px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding-left: 10px;
         padding-right: 30px;
    }
    ul{
        max-height: 300px;
        overflow-y: auto;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #fff;
        border: 1px solid #E1E1E1;
        border-radius: 8px;
        li{
            padding: 10px;
            border-bottom: 1px solid #E1E1E1;
        }
        display: ${({ show }: Props) => show ? "block" : "none"};
    }
`