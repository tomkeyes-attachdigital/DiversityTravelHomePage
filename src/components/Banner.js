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

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #124848;
    line-height: 30px;
    width: 478px;
    height: 150px;
  }
`;

const StyledHeader = styled.h1`
  font-family: Georgia, serif;
  font-size: 50px;
  font-weight: 700;
  color: #124848;
  line-height: 58px;
  `
const StyledSubHeader = styled.h2`
  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 400;
  color: #c74e18;
  line-height: 58px;
`  




const Banner = ({ heading, yearfounded, body }) => {

  const foundedDate = new Date(yearfounded); 
  const currentDate = new Date()

  let foundedYear = foundedDate.getFullYear();
  let currentYear = currentDate.getFullYear();  

  console.log(foundedYear, currentYear, currentYear - foundedYear)




  return (
    <StyledBanner>
      <Container>
        <StyledInner>
          <StyledText>
            <StyledHeader>{heading}</StyledHeader>
            <StyledSubHeader>{currentYear - foundedYear} years of experience</StyledSubHeader>
            <p>{body}</p>
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
