import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import logo from '../images/diversityTravelLogo.svg';

import { minBreakpointQuery } from '../styles';

const StyledHeader = styled.header``;

const StyledLogo = styled.img`
  margin-top: 30px;

  ${minBreakpointQuery.mlarge`
    margin-top: 10px;
  `}
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledLogo src={logo} alt="Diversity Travel Logo" />
    </Container>
  </StyledHeader>
);

export default Header;
