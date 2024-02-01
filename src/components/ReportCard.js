import React from 'react';
import styled from 'styled-components';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';

//Initialised for transform hover animation
const StyledContent = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  max-width: 280px;
  transition: transform 0.4s ease-in-out;
  transform: translateY(38%);
  margin-left: 25px;
  margin-bottom: 35px;

  ${minBreakpointQuery.medium`
    left: 0px;
    bottom: 0px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
  `}

  ${minBreakpointQuery.large`
    margin-left: 45px;
    margin-right: 45px;
    margin-bottom: 40px;
  `}
`;

//Initialised for gradient hover effect
const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.01) 0%, rgba(14, 50, 41, 1) 100%);
`;

const StyledReportCard = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 30px;

  ${minBreakpointQuery.medium`
    margin-left: 10px;
    margin-right: 10px;
  `}

  &:hover ${StyledContent} {
    transform: translateY(0%);
  }

  &:hover ${StyledOverlay} {
    background: linear-gradient(
      rgba(0, 0, 0, 0.01) 20%,
      rgba(14, 50, 41, 1) 100%
    );
  }
`;

const StyledPill = styled.div`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${brandColours.tertiary};
  background: ${brandColours.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 28px;
  border-radius: 20px;
  position: absolute;
  left: 25px;
  top: 25px;

  ${minBreakpointQuery.medium`
    left: 25px;
    top: 25px;
  `}

  ${minBreakpointQuery.large`
    left: 40px;
    top: 40px;
  `}
`;

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const StyledHeader = styled.h3`
  font-family: ${brandFonts.serif};
  font-size: 25px;
  font-weight: 700;
  color: ${brandColours.tertiary};
  line-height: 35px;
  margin-bottom: 20px;

  ${minBreakpointQuery.medium`
    font-size: 20px;
  `}

  ${minBreakpointQuery.large`
    font-size: 30px;
    margin-bottom: 40px;
  `}
`;

const StyledLink = styled.a`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${brandColours.quinary};

  &:hover {
    text-decoration: underline;
  }
`;

const ReportCard = ({ reportImage, alt }) => {
  return (
    <StyledReportCard>
      <StyledOverlay />
      <StyledImage src={reportImage} alt={alt} />
      <StyledPill>Report</StyledPill>
      <StyledContent>
        <StyledHeader>Travel & Covid-19 The Financial Loss States</StyledHeader>
        <StyledLink>READ POST</StyledLink>
      </StyledContent>
    </StyledReportCard>
  );
};

export default ReportCard;
