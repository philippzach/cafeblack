import React from 'react';
import styled from '@emotion/styled';
import Wrapper from './Wrapper';
import Button from './button';
import Background from './images/kontaktbg.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  text-align: right;
  div {
    margin-top: 3.5em;
  }
`;
const Paragraph = styled.p`
  font-family: 'didot';
  text-transform: uppercase;
  font-size: 1.1em;
  font-weight: 700;
`;
const Span = styled.span`
  display: block;
  font-family: 'didot';
`;
const Container = styled.div`
  /* margin-bottom: 8em; */
  background-image: url(${Background});
  background-repeat: repeat;
`;
const CustomLink = styled.a`
  color: rgb(28, 37, 43);
  font-family: 'didot';
  font-weight: 800;
  font-style: normal;
  padding: 0.25em 0;
  :hover {
    text-decoration: none;
    color: black;
  }
`;
const Social = styled.a`
  display: block;
  font-family: 'didot';
  font-weight: 800;
  font-style: normal;
  color: rgb(28, 37, 43);
  font-size: 1em;
  text-decoration: underline;
  :hover {
    text-decoration: none;
    color: black;
  }
`;

const Kontakt = ({ data }) => (
  <Container>
    <Wrapper>
      <Grid>
        <div className='kontakt-left'>
          <Paragraph>Adresse</Paragraph>
          <Span>{data.title.text}</Span>
          <Span>{data.strasse.text}</Span>
          <Span>{data.plz.text}</Span>
          <Span>{data.land.text}</Span>
        </div>
        <div>
          <Paragraph>Öffnungszeiten</Paragraph>
          <Span>{data.tage.text}</Span>
          <Span>{data.zeit.text}</Span>
          <Span>{data.dateextra.text}</Span>
          <Span>{data.timeextra.text}</Span>
          <div />
          <Social
            target='_blank'
            rel='noopener noreferrer'
            href='https://facebook.com/cafeblack1966'
          >
            Facebook
          </Social>
          <Social
            target='_blank'
            rel='noopener noreferrer'
            href='https://instagram.com/cafeblack1966'
          >
            Instagram
          </Social>
          <Social
            target='_blank'
            rel='noopener noreferrer'
            href=' https://www.tripadvisor.com/Restaurant_Review-g188113-d19721499-Reviews-Cafe_Bar_Black1966-Zurich.html?m=19905'
          >
            Tripadvisor
          </Social>
          <Social
            target='_blank'
            rel='noopener noreferrer'
            href=' https://linkedin.com/company/cafe-bar-black1966'
          >
            LinkedIn
          </Social>
        </div>
        <div className='kontakt-left'>
          <Paragraph>Kontakt</Paragraph>
          <CustomLink href={`mailto:${data.email.text}`}>
            <Span style={{ textDecoration: 'underline' }}>
              {data.email.text}
            </Span>
          </CustomLink>
          <CustomLink href={`tel:${data.phone.text}`}>
            <Span>{data.phone.text}</Span>
          </CustomLink>
        </div>
      </Grid>
    </Wrapper>
  </Container>
);

export default Kontakt;
