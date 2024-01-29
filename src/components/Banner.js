import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins } from '../styles';

import bannerImage from '../images/bannerImage.png';

const StyledBanner = styled.section`
  ${sectionMargins()};
`;

const StyledInner = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const StyledText = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  font-family: Georgia, serif;
  color: #124848;
`;

const StyledHeader = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 58px;
`

const StyledSubHeader = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: #c74e18;
  line-height: 58px;
`  

const StyledBody = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    width: 478px;
    height: 150px;
`  

const Banner = ({ heading, yearfounded, body }) => {

  const foundedDate = new Date(yearfounded); 
  const currentDate = new Date()
  let foundedYear = foundedDate.getFullYear();
  let currentYear = currentDate.getFullYear();  

  return (
    <StyledBanner>
      <Container>
        <StyledInner>
          <StyledText>
            <StyledHeader>{heading}</StyledHeader>
            <StyledSubHeader>{currentYear - foundedYear} years of experience</StyledSubHeader>
            <StyledBody>{body}</StyledBody>
          </StyledText>
          <img
            src={bannerImage}
            alt="Two people laughing sat at a desk with laptops and notepads "
          />
        </StyledInner>
      </Container>
    </StyledBanner>
  );
}



export default Banner;
