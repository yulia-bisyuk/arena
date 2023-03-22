import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  .logo {
    max-height: 50px;
  }

  .number a {
    color: #06487e;
  }

  .tuam-nav .navbar .navbar-brand {
    margin-right: 0px;
  }

  .call-us-top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .call-us-top-icon-text-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .call-us-top .text {
    color: #333;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
  }

  .call-us-top span {
    font-weight: 600;
  }

  .call-us-top .icon {
    width: 40px;
    height: 40px;
    margin-right: 6px;
    line-height: 40px;
    border-radius: 50%;
    color: #06487e;
    font-size: 20px;
    background-color: #f1f4f4;
    text-align: center;
    transition: 0.5s;
  }

  nav a.default-btn {
    background-color: #000;
    padding: 10px 15px;
  }

  .navbar-area.navbar-style-two .tuam-nav .navbar .others-option .default-btn {
    margin-left: 0;
  }
  @media (min-width: 480px) {
    .call-us-top {
      flex-direction: row;
    }
    .call-us-top-icon-text-wrap {
      margin-bottom: 0px;
      margin-right: 6px;
    }
  }

  @media (max-width: 767px) {
    .large-scr {
      display: none;
    }

    .tuam-nav .navbar .navbar-nav {
      margin-top: 10px;
    }
  }

  @media (min-width: 768px) {
    .number a {
      color: white;
    }
    .nav-presentation-btn {
      display: none;
    }
    .call-us-top {
      display: none;
    }
    .small-scr {
      display: none;
    }
  }

  @media (max-width: 991px) {
    .navbar-area {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;
