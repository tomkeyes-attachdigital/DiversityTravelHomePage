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

const StyledInner = styled.div`
  display: grid;
  gap: 30px;

  ${minBreakpointQuery.medium`
    gap: 150px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;   
  `}
`;

const StyledText = styled.div`
  font-family: ${brandFonts.serif};
  color: ${brandColours.primary};

  ${minBreakpointQuery.medium`
    max-width: 480px; 
  `}
`;

const StyledHeader = styled.h1`
  font-size: 50px;
  font-weight: 700;
  font-size: 40px;

  ${minBreakpointQuery.small`
    font-size: 50px;
  `}
`;

const StyledSubHeader = styled.h2`
  font-weight: 400;
  color: ${brandColours.secondary};
  margin-top: 10px;
  font-size: 26px;

  ${minBreakpointQuery.small`
    font-size: 30px;
  `}
`;

const StyledBody = styled.p`
  font-family: ${brandFonts.sans};
  font-weight: 400;
  line-height: 30px;
  margin-top: 20px;
  font-size: 16px;

  ${minBreakpointQuery.small`
    font-size: 18px;
  `}
`;

const StyledImage = styled.img`
  display: flex;
  justify-self: center;
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
