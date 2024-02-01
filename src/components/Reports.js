import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import ReportCard from './ReportCard';
import planeWing from '../images/PlaneWing.png';
import palmTrees from '../images/PalmTrees.png';
import childrenSmiling from '../images/ChildrenSmiling.png';
import {
  brandColours,
  brandFonts,
  minBreakpointQuery,
  sectionMargins,
} from '../styles';

const StyledReports = styled.section`
  ${sectionMargins()};
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${brandFonts.serif};
  font-size: 40px;
  font-weight: 700;
  color: ${brandColours.primary};
  line-height: 58px;
  margin-bottom: 30px;

  ${minBreakpointQuery.medium`
    margin-bottom: 53px;
  `}
`;

const StyledCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${minBreakpointQuery.medium`
    flex-direction: row;
    justify-content: center;
  `}
`;

const Reports = () => (
  <StyledReports>
    <Container>
      <StyledHeader>Reports</StyledHeader>
      <StyledCards>
        <ReportCard reportImage={palmTrees} alt={'Palm Trees'} />
        <ReportCard reportImage={childrenSmiling} alt={'Children Smiling'} />
        <ReportCard reportImage={planeWing} alt={'Plane Wing'} />
      </StyledCards>
    </Container>
  </StyledReports>
);

export default Reports;
