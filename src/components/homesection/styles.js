import styled from 'styled-components';
import homeBanner from './media/3.jpg';

export const HomeWrap = styled.div`
  h1 {
    color: white;
  }

  .item-bg5 {
    background-image: url(${homeBanner});
  }

  .banner-footer {
    z-index: 2;
  }
`;
