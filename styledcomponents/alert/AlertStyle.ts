import styled from 'styled-components';

interface Props {
    show: boolean;
    type?: string;
}

export const AlertStyle = styled.div`
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    z-index: 100;
    color: white;
    display: ${({ show }: Props) => show ? "block" : "none"};
    background-color: ${({ type }: Props) => type == "info" ? "deepskyblue" : "red"};;
    .icon{
        margin-right: 10px;
    }
`