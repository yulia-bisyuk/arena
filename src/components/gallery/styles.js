import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  .single-gallery-box {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .carousel-img {
    height: 210px;
    object-fit: cover;
  }

  @media (min-width: 380px) {
    .carousel-img {
      height: 248px;
    }
  }
  @media (min-width: 480px) {
    .carousel-img {
      height: 314px;
    }
  }
`;
