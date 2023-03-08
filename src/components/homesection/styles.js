import styled from 'styled-components';
import homeBanner from './media/3.jpg';

export const HomeWrap = styled.div`
  h1 {
    color: white;
  }

  .item-bg5 {
    background-image: url(${homeBanner});
  }

  .home-section .banner-footer .banner-contact-info ul li i {
    background-color: #b6b092;
  }

  .banner-footer {
    z-index: 2;
  }
`;
