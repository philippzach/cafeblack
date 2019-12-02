import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

const Content = styled.div``;

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </Content>
);

export default Image;
