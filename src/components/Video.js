import React from 'react';
import styled from 'styled-components';
import { Container } from './ui';
import { sectionMargins, minBreakpointQuery } from '../styles';
import PlayButtonArrow from '../images/PlayButton/PlayButtonArrow.svg';
import PlayButtonBackground from '../images/PlayButton/PlayButtonBackground.svg';

const StyledVideo = styled.section`
  ${sectionMargins()};
`;

const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
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

const StyledPlayButton = styled.img`
  position: absolute;
  top: 35%;

  ${minBreakpointQuery.mlarge`
    max-width: 194px;
    max-height: 168px;
  `}
`;

const StyledArrow = styled.img`
  position: absolute;
  top: 48%;
`;

const Video = () => {
  return (
    <StyledVideo>
      <Container>
        <StyledVideoContainer>
          <StyledIframe
            src="https://www.youtube.com/embed/-NRYsckU9W4?si=z7fg1ago3dpFpNOe?enablejsapi=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <StyledPlayButton src={PlayButtonBackground} />
          <StyledArrow src={PlayButtonArrow} />
        </StyledVideoContainer>
      </Container>
    </StyledVideo>
  );
};

export default Video;
