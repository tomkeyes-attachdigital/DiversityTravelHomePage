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

const StyledOuter = styled.section`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInner = styled.section`
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
  padding: 20px;

  ${minBreakpointQuery.medium`
    padding-top: 82px;
    margin-bottom: 43px;
    margin-left: 100px;
    margin-right: 100px;
  `}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-radius: 10px;
  margin: 20px;

  ${minBreakpointQuery.medium`
      margin-left: 100px;
      margin-right: 100px;
    `}
`;

const StyledName = styled.div`
  ${minBreakpointQuery.medium`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
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
`;

const StyledTextInput = styled.input`
  border-radius: 30px;
  padding: 10px;
  margin: 5px;
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
  width: 221px;
  height: 65px;
  margin-bottom: 20px;

  ${minBreakpointQuery.medium`
      margin-bottom: 87px;
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
              <StyledName>
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
              </StyledName>
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
                  rows="4"
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
