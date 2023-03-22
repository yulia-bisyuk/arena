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
  .footer-area {
    background-color: #06487e;
  }

  .single-footer-widget h3::before {
    background-color: white;
  }

  .single-footer-widget h3 {
    border-bottom: 1px solid #b6b092;
  }

  .single-footer-widget .footer-contact-info li a:hover,
  .copyright-area ul li a:hover {
    color: #b6b092;
  }

  .copyright-area {
    border-top: 1px solid #b6b092;
  }

  @media (max-width: 767px) {
    .footer-area {
      padding-bottom: 60px;
    }
    .copyright-area {
      margin-top: 30px;
      padding: 0;
      border: none;
    }
  }
`;

export { FooterWrap };
