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
  padding: 20px;

  ${minBreakpointQuery.small`
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
  `};

  ${minBreakpointQuery.medium`
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 100px;
    padding-right: 100px;
  `};

  ${minBreakpointQuery.mlarge`
     max-width: 980px;
  `};
`;

const StyledHeader = styled.h2`
  font-family: ${brandFonts.serif};
  font-size: 40px;
  font-weight: 700;
  color: ${brandColours.senary};
  line-height: 55px;
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 0px;
  border-radius: 10px;

  ${minBreakpointQuery.smedium`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      grid-column-gap: 25px;
      grid-row-gap: 0px;
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
  width: 100%;
  margin-top: 20px;

  ${minBreakpointQuery.smedium`
    &:nth-child(3) {
      grid-column: span 2
    }
    &:nth-child(4) {
      grid-column: span 2
    }
    &:nth-child(5) {
      grid-column: span 2
    }
  `}
`;

const StyledTextInput = styled.input`
  border-radius: 30px;
  padding: 15px;
  background: ${brandColours.tertiary};
  border: none;
  height: 60px;
  margin-top: 5px;
`;

const StyledTextArea = styled.textarea`
  border-radius: 10px;
  padding: 15px;
  margin-top: 5px;
  background: ${brandColours.tertiary};
  border: none;
  resize: vertical;
  min-height: 120px;
  max-height: 200px;
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
  margin-top: 35px;

  ${minBreakpointQuery.small`
      max-width: 220px;
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
