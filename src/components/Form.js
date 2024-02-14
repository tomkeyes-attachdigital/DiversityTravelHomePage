import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import {
  brandColours,
  brandFonts,
  sectionMargins,
  minBreakpointQuery,
} from '../styles';

const StyledContactForm = styled.section`
  ${sectionMargins()};
`;

const StyledOuter = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInner = styled.div`
  background: ${brandColours.primary};
  border-radius: 10px;
  width: 100%;

  ${minBreakpointQuery.mlarge`
     max-width: 980px;
  `}
`;

const StyledHeader = styled.h2`
  font-family: ${brandFonts.serif};
  font-size: 40px;
  font-weight: 700;
  color: ${brandColours.senary};
  line-height: 55px;
  margin: 20px;

  ${minBreakpointQuery.smedium`
    padding-top: 40px;
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 60px;
    margin-right: 60px;
  `}

  ${minBreakpointQuery.medium`
    padding-top: 80px;
    margin-top: 0px;
    margin-bottom: 45px;
    margin-left: 100px;
    margin-right: 100px;
  `}
`;

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 0px;
  border-radius: 10px;
  margin: 20px;

  ${minBreakpointQuery.smedium`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-column-gap: 25px;
      grid-row-gap: 0px;
      margin-left: 60px;
      margin-right: 60px;
    `}

  ${minBreakpointQuery.medium`
      margin-left: 100px;
      margin-right: 100px;
    `}
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
  margin-bottom: 20px;
  width: 100%;

  ${minBreakpointQuery.smedium`
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
    }
    &:nth-child(4) {
      grid-area: 3 / 1 / 4 / 3;
    }
    &:nth-child(5) {
      grid-area: 4 / 1 / 5 / 3;
    }
  `}
`;

const StyledTextInput = styled.input`
  border-radius: 30px;
  padding: 10px;
  background: ${brandColours.tertiary};
  border: none;
  height: 60px;
`;

const StyledTextArea = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background: ${brandColours.tertiary};
  border: none;
  margin-bottom: 20px;
  resize: vertical;
`;

const StyledButton = styled.button`
  background-color: ${brandColours.senary};
  font-family: ${brandFonts.sans};
  color: ${brandColours.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 40px;
  border: none;
  height: 65px;
  margin-bottom: 20px;

  ${minBreakpointQuery.small`
      margin-bottom: 50px;
      max-width: 220px;
    `}

  ${minBreakpointQuery.medium`
      max-width: 220px;
      margin-bottom: 80px;
    `}

  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${brandColours.septenary};
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    message: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <StyledContactForm>
      <Container>
        <StyledOuter>
          <StyledInner>
            <StyledHeader>Contact Us</StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                First Name
                <StyledTextInput
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledLabel>
                Second Name
                <StyledTextInput
                  type="text"
                  name="surname"
                  id="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledLabel>
                Email address
                <StyledTextInput
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledLabel>
                Message
                <StyledTextArea
                  type="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                />
              </StyledLabel>
              <StyledButton type="submit" value="Submit">
                Submit
              </StyledButton>
            </StyledForm>
          </StyledInner>
        </StyledOuter>
      </Container>
    </StyledContactForm>
  );
};

export default ContactForm;
