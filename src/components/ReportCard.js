import React from 'react';
import styled from 'styled-components';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';

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

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
  rgba(0,0,0,0.01) 0%, 
  rgba(14,50,41,1) 100%
  );

  &:hover {
    background: linear-gradient(
  rgba(0,0,0,0.01) 50%, 
  rgba(14,50,41,1) 100%
  );
  }
`;

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%
`;

const StyledContent = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;
  max-width: 280px;

  transform: translateY(38%);

  &:hover {
    transform: translateY(0%)
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
      <StyledOverlay/>
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