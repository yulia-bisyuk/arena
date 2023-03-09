import styled from 'styled-components';

const PlansWrap = styled.div`
  .section-title h2,
  .tab .tab_content .tabs_item .tabs_item_content h3 {
    color: #6a6654;
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
    .col-lg-6 {
      width: 100%;
    }
    .tab .tab_content .tabs_item .image.first {
      margin-top: 30px;
    }
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }

  .tab .tab_content .tabs_item .image {
    padding: 16px 0px;

    border-top: 1px solid #b6b092;
    border-bottom: 1px solid #b6b092;
  }
  .tab .tab_content .tabs_item .image.first {
    padding: 0px;
    border: none;
  }
`;

export { PlansWrap };
