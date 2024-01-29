import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 20px 0;

  p {
    text-align: center;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>&copy; {new Date().getFullYear()}</p>
  </StyledFooter>
);

export default Footer;
