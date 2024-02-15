import React from 'react';
import styled from 'styled-components';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';

const StyledReportCard = styled.article`
  position: relative;
  display: grid;
  cursor: pointer;
  max-width: 380px;
  border-radius: 15px;
`;

const StyledImage = styled.img`
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  position: relative;
  border-radius: 15px;
`;

const StyledPillWrapper = styled.div`
  border-radius: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  height: fit-content;
  background: ${brandColours.quaternary};
`;

const StyledPill = styled.span`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${brandColours.tertiary};
`;

const StyledContentInner = styled.div`
  transition: transform 0.4s ease-in-out;
  transform: translateY(100px);
`;

const StyledContentOuter = styled.div`
  position: relative;
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
  padding: 20px;
  border-radius: 15px;
  max-height: 490px;

  ${minBreakpointQuery.medium`
    padding: 40px;
  `}

  ${minBreakpointQuery.smedium`
    padding: 30px;
  `}

  &:hover ${StyledContentInner} {
    transform: translateY(40px);
  }

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.01) 0%,
      rgba(14, 50, 41, 1) 100%
    );
  }
`;

const StyledHeader = styled.h3`
  font-family: ${brandFonts.serif};
  font-size: 25px;
  font-weight: 700;
  color: ${brandColours.tertiary};
  line-height: 35px;
  justify-self: start;
  margin-bottom: 20px;

  ${minBreakpointQuery.medium`
    font-size: 20px;
  `}

  ${minBreakpointQuery.large`
    font-size: 30px;
    margin-bottom: 30px;
  `}
`;

const StyledLink = styled.a`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  color: ${brandColours.quinary};

  &:hover {
    text-decoration: underline;
  }
`;

const ReportCard = ({ reportImage, alt }) => {
  return (
    <StyledReportCard>
      <StyledImage src={reportImage} alt={alt} />
      <StyledContentOuter>
        <StyledPillWrapper>
          <StyledPill>Report</StyledPill>
        </StyledPillWrapper>
        <StyledContentInner>
          <StyledHeader>
            Travel & Covid-19 The Financial Loss States
          </StyledHeader>
          <StyledLink>Read post</StyledLink>
        </StyledContentInner>
      </StyledContentOuter>
    </StyledReportCard>
  );
};

export default ReportCard;
