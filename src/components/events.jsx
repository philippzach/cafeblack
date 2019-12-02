import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Wrapper from './Wrapper';
import Button from './button';

const Paragraph = styled.p`
  color: black;
  text-align: center;
  font-family: 'Didot Medium';
  font-size: 1.2em;
  @media (max-width: 649px) {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  @media (min-width: 650px) {
    max-width: 600px;
    margin: 3em auto 3em;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5em;
`;
const Events = ({ eventText, image }) => (
  <div>
    <Wrapper>
      <Paragraph>{eventText.events.text}</Paragraph>
      <ButtonContainer>
        <Button link={image.ctalink.url} text={image.ctaevents.text} />
      </ButtonContainer>
    </Wrapper>
    <Img fluid={image.eventimage.localFile.childImageSharp.fluid} />
  </div>
);

export default Events;
