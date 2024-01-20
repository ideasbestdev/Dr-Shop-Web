import styled from 'styled-components';
import { Theme } from '../Theme';

interface Props {
  theme: Theme,
}

export const OrderCardAdressSectionStyle = styled.section<Props>`
  width: 50%;
  padding-right: 40px;
  &.v2{
    .card{
      max-width: 100%;
    }
  }
  .order_number{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.16);
    height: 70px;
    align-items: center;
    padding: 0 20px;
    h4, h5{
      font-weight: normal;
    }
    h4{
      font-family: ${({ theme }: Props) => theme.fonts.bold};
      font-size: 25px;
    }
    h5{
      font-family: ${({ theme }: Props) => theme.fonts.medium};
      font-size: 21px;
      color: #2262BC;
    }
  }
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