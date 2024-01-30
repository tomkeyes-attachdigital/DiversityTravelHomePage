import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins, minBreakpointQuery } from '../styles';

const StyledVideo = styled.section`
  ${sectionMargins()};
`;

const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  
`;

const StyledIframe = styled.iframe`
   border-radius: 15px;
   width: 500px;
   height: 300px;
  

  ${minBreakpointQuery.smedium`
    width: 980px;
    height: 541px;
  `}
`;

const Video = () => {
  return (
    <StyledVideo>
      <Container>
        <StyledVideoContainer>
          <StyledIframe
            src="https://www.youtube.com/embed/-NRYsckU9W4?si=z7fg1ago3dpFpNOe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </StyledVideoContainer>
      </Container>
    </StyledVideo>
  );
};

export default Video;