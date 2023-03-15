import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  .logo {
    max-height: 50px;
  }

  .number a {
    color: #06487e;
  }

  @media (min-width: 768px) {
    .number a {
      color: white;
    }
  }
`;
