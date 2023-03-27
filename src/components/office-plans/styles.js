import styled from 'styled-components';

const PlansWrap = styled.div`
  .floor-plans-area {
    padding-top: 40px;
  }
  
  .tab .tabs {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .tab .tabs li {
      padding: 10px 24px;
      font-size: 12px;
    }
  }
  @media (min-width: 992px) {
    .tab .tabs li {
      padding: 14px 36px;
      font-size: 16px;
    }
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .row .align-items-center {
      flex-wrap: nowrap;
      align-items: flex-start !important;
    }
    .tabs_item_image img.first {
      margin-top: 48px;
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1200px) {
    .tabs_item_image img.first {
      height: 366px;
    }
  }
`;

export { PlansWrap };
