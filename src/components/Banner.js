import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins } from '../styles';

const StyledBanner = styled.section`
  ${sectionMargins()};
`;

const Banner = ({ heading }) => (
  <StyledBanner>
    <Container>{heading}</Container>
  </StyledBanner>
);

export default Banner;
