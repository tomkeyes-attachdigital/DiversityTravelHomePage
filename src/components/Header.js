import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import logo from '../images/diversityTravelLogo.svg';

import {
  minBreakpointQuery,
} from '../styles';

const StyledHeader = styled.header``;

const StyledInner = styled.div``;

const StyledLogo = styled.img`
  margin-top: 30px;

  ${minBreakpointQuery.mlarge`
    margin-top: 10px;
  `}
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledInner>
        <StyledLogo src={logo} alt="Diversity Travel Logo" />
      </StyledInner>
    </Container>
  </StyledHeader>
);

export default Header;
