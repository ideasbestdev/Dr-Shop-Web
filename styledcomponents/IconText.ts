import styled from 'styled-components';

interface Props {
    marginRight?: string,
}

export const IconText = styled.div<Props>`
        display: flex;
        align-items: center;
        i{
            display: flex;
            margin-right:  ${({ marginRight }: Props) => marginRight ? marginRight : "8px"};
        }
`