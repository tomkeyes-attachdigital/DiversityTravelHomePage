import React from 'react';
import styled from 'styled-components';
import { brandColours, brandFonts, minBreakpointQuery } from '../styles';

//Initialised for transform hover animation
const StyledLink = styled.a`
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  color: ${brandColours.quinary};
  transition: transform 0.4s ease-in-out;
  transform: translateY(80px);

  &:hover {
    text-decoration: underline;
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
  transition: transform 0.4s ease-in-out;
  transform: translateY(80px);

  ${minBreakpointQuery.medium`
    font-size: 20px;
  `}

  ${minBreakpointQuery.large`
    font-size: 30px;
    margin-bottom: 50px;
  `}
`;

const StyledReportCard = styled.article`
  position: relative;
  display: grid;
  cursor: pointer;
  border-radius: 15px;
  max-width: 380px;

  ${minBreakpointQuery.medium`
    max-height: 470px;
  `}

  &:hover ${StyledLink} {
    transform: translateY(0px);
  }

  &:hover ${StyledHeader} {
    transform: translateY(0px);
  }

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    opacity: 1;
    transition: opacity 0.4s ease-out;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.01) 0%,
      rgba(14, 50, 41, 1) 100%
    );
  }

  &:hover:after {
    content: '';
    opacity: 0.7;
    transition: opacity 0.4s ease-in-out;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.01) 0%,
      rgba(14, 50, 41, 1) 100%
    );
  }
`;

const StyledPill = styled.span`
  position: relative;
  font-family: ${brandFonts.sans};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${brandColours.tertiary};
  background: ${brandColours.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 20px;
`;

const StyledImage = styled.img`
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  position: relative;
  border-radius: 15px;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const StyledContentOuter = styled.div`
  position: relative;
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  grid-template-rows: repeat(2, 1fr);

  overflow: hidden;
  z-index: 20;
  margin: 20px;

  ${minBreakpointQuery.medium`
    margin: 40px;
  `}

  ${minBreakpointQuery.smedium`
    margin: 30px;
  `}
`;

const StyledContentInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReportCard = ({ reportImage, alt }) => {
  return (
    <StyledReportCard>
      <StyledImage src={reportImage} alt={alt} />
      <StyledContentOuter>
        <StyledPill>Report</StyledPill>
        <StyledContentInner>
          <StyledHeader>
            Travel & Covid-19 The Financial Loss States
          </StyledHeader>
          <StyledLink>read post</StyledLink>
        </StyledContentInner>
      </StyledContentOuter>
    </StyledReportCard>
  );
};

export default ReportCard;
