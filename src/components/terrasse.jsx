import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Wrapper from './Wrapper';

const PicGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-template-rows: auto;
`;
const GridOne = styled.div`
  grid-column: 1/1;
  grid-row: 1/1;
  z-index: -1;
`;
const GridTwo = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
  z-index: -1;
`;
const GridThree = styled.div`
  grid-column: 1/3;
  grid-row: 2/2;
  z-index: -1;
`;
const Svg = styled.svg`
  z-index: 100;
  @media screen and (max-width: 650px) {
    width: 50% !important;
    margin-bottom: -50%;
  }
  @media (min-width: 651px) {
    width: 509px;
    height: 547px;
    margin-bottom: -30%;
  }
`;
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

const Top = ({ text, image }) => (
  <div>
    <Wrapper>
      <Paragraph>{text.text.text}</Paragraph>
    </Wrapper>

    <Wrapper>
      <PicGrid>
        <GridOne>
          <Img fluid={image.image1.localFile.childImageSharp.fluid} />
        </GridOne>
        <GridTwo>
          <Img fluid={image.image2.localFile.childImageSharp.fluid} />
        </GridTwo>
        <GridThree>
          <Img fluid={image.image3.localFile.childImageSharp.fluid} />
        </GridThree>
      </PicGrid>
    </Wrapper>
  </div>
);

export default Top;
