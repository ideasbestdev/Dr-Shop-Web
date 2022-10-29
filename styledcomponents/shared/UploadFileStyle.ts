import styled from 'styled-components';


export const UploadFileStyle = styled.div`
    display: inline-block;
    > div{
        position: absolute;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    >label{
        display: flex;
        justify-content: center;
    }
`