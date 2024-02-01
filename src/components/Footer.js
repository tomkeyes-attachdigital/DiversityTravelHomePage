import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';

const StyledFooter = styled.footer`
  height: 120px;
  background: ${brandColours.primary};
  display: flex;
  justify-items: space-between;
`;

const StyledInner = styled.div`
  height: 120px;
  font-family: ${brandFonts.sans};
  font-size: 14px;
  color: ${brandColours.tertiary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  ${minBreakpointQuery.medium`
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  `}
`;

const StyledFooterInfo = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <StyledInner>
        <StyledFooterInfo>
          Diversity Travel Ltd. Registered in England and Wales. Registered
          Number: 05993481
        </StyledFooterInfo>
        <StyledLink
          href="https://www.attachdigital.co.uk"
          target="_blank"
          rel="noopener"
        >
          Website by Attach Digital
        </StyledLink>
      </StyledInner>
    </Container>
  </StyledFooter>
);

export default Footer;
