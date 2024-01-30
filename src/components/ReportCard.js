import React from 'react';
import styled from 'styled-components';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';
import GradientOverlay from "../images/GradientCard.png"



const StyledReportCard = styled.div`

  overflow: hidden;
  position: relative;
  cursor: pointer;

  max-width: 380px;
  max-height: 488px;
  margin-bottom: 30px;

  ${minBreakpointQuery.medium`
    margin-left: 10px;
    margin-right: 10px;
  `}
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
  left: 40px;
  top: 40px;

  ${minBreakpointQuery.medium`
    left: 25px;
    top: 25px;
  `}

  ${minBreakpointQuery.large`
    left: 40px;
    top: 40px;
  `}
`;

const StyledOverlay = styled.img`
  position: absolute;
  border-radius: 15px;
`;

const StyledImage = styled.img`
  z-index: -1;
  border-radius: 15px;
`;

const StyledContent = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;
  max-width: 280px;

  &:hover {
    transform: translate( 0, 0, 100px);
  }

  ${minBreakpointQuery.medium`
    left: 25px;
    bottom: 25px;
  `}

  ${minBreakpointQuery.large`
    left: 40px;
    bottom: 40px;
  `}
`;

const StyledHeader = styled.h3`
  font-family: ${brandFonts.serif};
  font-size: 30px;
  font-weight: 700;
  color: ${brandColours.tertiary};
  line-height: 35px;
  margin-bottom: 25px;

  ${minBreakpointQuery.medium`
    font-size: 20px;
  `}

  ${minBreakpointQuery.large`
    font-size: 30px;
  `}
`;

const StyledLink = styled.p`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${brandColours.quinary};
`;

const ReportCard = ({ reportImage, alt }) => {
  return (
    <StyledReportCard>
      <StyledOverlay src={GradientOverlay} alt={alt} />
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