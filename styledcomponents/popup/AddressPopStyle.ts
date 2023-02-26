import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
    theme: Theme,
}

export const AddressPopStyle = styled.div`
        border-radius: 16px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;

        .close{
            align-self: flex-end;
        }
   

`