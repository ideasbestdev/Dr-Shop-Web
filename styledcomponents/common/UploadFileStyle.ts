import styled from 'styled-components';


export const UploadFileStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid #8E8E8E80;
    color: #8E8E8E;

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