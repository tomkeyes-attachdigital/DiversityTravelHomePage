import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import logo from '../images/logo.svg';

const StyledHeader = styled.header``;

const StyledInner = styled.div``;

const StyledLogo = styled.img``;

const Header = () => (
  <StyledHeader>
    <Container>
      <StyledInner>
        <StyledLogo src={logo} alt="Logo" />
      </StyledInner>
    </Container>
  </StyledHeader>
);

export default Header;
