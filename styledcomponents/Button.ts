import styled from 'styled-components';

interface Props {
    backgroundColor?: string
}

export const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        min-width: 206px;
        height: 49px;
        color: #fff;
        background-color: ${({ backgroundColor }: Props) => backgroundColor != undefined ? backgroundColor : "#000"};
`