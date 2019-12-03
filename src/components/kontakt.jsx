import React from 'react';
import styled from '@emotion/styled';
import Wrapper from './Wrapper';
import Button from './button';

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
  margin-bottom: 8em;
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
        <div>
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
          <div />
          <Social href='https://facebook.com/cafeblack1966'>Facebook</Social>
          <Social href='https://instagram.com/cafeblack1966'>Instagram</Social>
          <Social href='https://black1966.eventbrite.com'>Events</Social>
        </div>
        <div>
          <Paragraph>Kontakt</Paragraph>
          <CustomLink href={`mailto:${data.email.text}`}>
            <Span style={{ textDecoration: 'underline' }}>
              {data.email.text}
            </Span>
          </CustomLink>
          <CustomLink href={`tel:${data.phone.text}`}>
            <Span>{data.phone.text}</Span>
          </CustomLink>
          {/*           <Button link={`mailto:${data.email.text}`} text={data.email.text} />
          <Button link={`tel:${data.phone.text}`} text={data.phone.text} /> */}
        </div>
      </Grid>
    </Wrapper>
  </Container>
);

export default Kontakt;
