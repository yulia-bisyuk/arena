import styled from 'styled-components';

export const AdvantagesWrap = styled.div`
  #advantages {
    padding-bottom: 0;
  }

  @media (max-width: 575px) {
    .last {
      margin-bottom: 0;
    }
  }

  .single-services-box {
    height: 226px;
  }

  @media (min-width: 440px) {
    .single-services-box {
      height: 200px;
    }
  }

  @media (min-width: 576px) {
    .single-services-box {
      height: 254px;
    }
  }

  @media (min-width: 768px) {
    .single-services-box {
      height: 286px;
    }
  }

  @media (min-width: 992px) {
    .single-services-box {
      height: 314px;
    }
  }

  @media (min-width: 1200px) {
    .single-services-box {
      height: 320px;
    }
  }

  @media (min-width: 1400px) {
    .single-services-box {
      height: 290px;
    }
  }

  .icon-additional {
    fill: #524552;
  }

  @media (min-width: 768px) {
    .icon-additional {
      width: 65px;
      height: 75px;
    }
  }
`;
