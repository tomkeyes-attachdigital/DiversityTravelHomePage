import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { brandColours, brandFonts, sectionMargins } from '../styles';

const StyledContactForm = styled.section`
  ${sectionMargins()};
`;

const StyledInner = styled.section`
  background: ${brandColours.primary};
  padding-top: 82px;
  padding-bottom: 87px;
  padding-left: 101px;
  padding-right: 101px;
  border-radius: 10px;
`;
const StyledForm = styled.form`
`;

const StyledHeader = styled.h2`
    font-family: ${brandFonts.serif};
    font-size: 40px;
    font-weight: 700;
    color: #d3f0c8;
    line-height: 55px;
    margin-bottom: 43px;
`;

const StyledLabel = styled.label`
    font-family: ${brandFonts.sans};
    font-size: 16px;
    font-weight: 400;
    color: ${brandColours.senary};
    line-height: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const StyledTextInput = styled.input`
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
    background: ${brandColours.tertiary};
    border: none;
`;

const StyledTextArea = styled.textarea`
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
    background: ${brandColours.tertiary};
    border: none;
`;

const StyledButton = styled.button`
    border-radius: 40px;
    padding: 10px;
    margin-top: 35px;
    background: ${brandColours.senary};
    width: 221px;
    height: 65px;
    font-family: ${brandFonts.sans};
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${brandColours.primary};
`;

const ContactForm = () => {
  return (
    <StyledContactForm>
      <Container>
        <StyledInner>
          <StyledHeader>Contact Us</StyledHeader>
          <StyledForm>
            <StyledLabel>
              First Name
              <StyledTextInput type="text" name="firstName" id="firstName" />
            </StyledLabel>
            <StyledLabel>
              Second Name
              <StyledTextInput type="text" name="secondName" id="secondName" />
            </StyledLabel>
            <StyledLabel>
              Email address
              <StyledTextInput type="email" name="email" id="email" />
            </StyledLabel>
            <StyledLabel>
              Message
              <StyledTextArea type="message" name="message" rows="4" />
            </StyledLabel>
            <StyledButton type="submit" value="Submit">
              Submit
            </StyledButton>
          </StyledForm>
        </StyledInner>
      </Container>
    </StyledContactForm>
  );
};

export default ContactForm;