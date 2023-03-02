import styled from 'styled-components';

const FooterWrap = styled.div`
  .map {
    width: 100%;
  }
  @media (min-width: 992px) {
    .footer-positioning {
      align-items: center;
      display: flex;
      justify-content: space-around;
    }

    .single-footer-widget {
      margin-right: 40px;
    }
  }
`;

export { FooterWrap };
