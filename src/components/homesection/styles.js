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

  @media screen and (min-width: 992px) {
    .resized {
      width: 30%;
    }
    .resized-content {
      width: 70%;
    }

    .home-section .banner-footer .banner-contact-info {
      padding: 32px;
    }

    .home-section .banner-footer .banner-contact-info ul li span {
      font-size: 20px;
    }
    .home-section .banner-footer .banner-contact-info ul li {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 1200px) {
    .resized {
      width: 22%;
    }
    .resized-content {
      width: 78%;
    }

    .home-section .banner-footer .banner-contact-info {
      padding: 39px;
    }

    .home-section .banner-footer .banner-contact-info ul li span {
      font-size: 22px;
    }
    .home-section .banner-footer .banner-contact-info ul li {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1600px) {
    .home-section .banner-footer .banner-contact-info ul li span {
      font-size: 26px;
    }
    .home-section .banner-footer .banner-contact-info ul li {
      font-size: 22px;
    }
  }
`;
