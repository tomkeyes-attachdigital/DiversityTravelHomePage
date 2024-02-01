import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';

import {
  brandColours,
  brandFonts,
  minBreakpointQuery,
  sectionMargins,
} from '../styles';

import bannerImage from '../images/bannerImage.png';

const StyledBanner = styled.section`
  ${sectionMargins()};
`;

const StyledInner = styled.section`
  display: grid;
  gap: 30px;

  ${minBreakpointQuery.small`
    gap: 40px;
  `}

  ${minBreakpointQuery.medium`
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;   
  `}
`;

const StyledText = styled.section`
  font-family: ${brandFonts.serif};
  color: ${brandColours.primary};
`;

const StyledHeader = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 58px;
`;

const StyledSubHeader = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: ${brandColours.secondary};
  line-height: 58px;
`;

const StyledBody = styled.p`
  font-family: ${brandFonts.sans};
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  ${minBreakpointQuery.medium`
      max-width: 478px;
  `}
`;
const StyledImage = styled.img`
  display: flex;
  justify-self: center;

  ${minBreakpointQuery.medium`
      justify-self: end;
  `}
`;

const Banner = ({ heading, yearfounded, body }) => {
  const foundedDate = new Date(yearfounded);
  const currentDate = new Date();
  let foundedYear = foundedDate.getFullYear();
  let currentYear = currentDate.getFullYear();

  return (
    <StyledBanner>
      <Container>
        <StyledInner>
          <StyledText>
            <StyledHeader>{heading}</StyledHeader>
            <StyledSubHeader>
              {currentYear - foundedYear} years of experience
            </StyledSubHeader>
            <StyledBody>{body}</StyledBody>
          </StyledText>
          <StyledImage
            src={bannerImage}
            alt="Two people laughing sat at a desk with laptops and notepads "
          />
        </StyledInner>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
