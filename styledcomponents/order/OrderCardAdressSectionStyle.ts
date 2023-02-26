import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
  theme: Theme,
}

export const OrderCardAdressSectionStyle = styled.section<Props>`
  width: 50%;
  padding-right: 40px;
  .card{
      width: 100%;
      max-width: 500px;
      a{
        font-family: ${({ theme }: Props) => theme.fonts.bold};
        color: #2262BC;
        text-decoration: underline;
      }
  }
  .selected_card{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    .image_container{
      max-width: 50px;
      margin-right: 10px;
    }
  }
  >ul{
    >li{
      &:last-child{
        display: none;

      }
    }
  }
  .selected_address {
    align-items: flex-start;
    a{
      margin-left: 32px;
    }
  }
`