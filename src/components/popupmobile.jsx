import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import styled from '@emotion/styled';

const Container = styled.div`
  padding-top: 2em;
  text-align: center;
`;
const DocWrapper = styled.div`
  width: calc(100% - 10%);
  max-width: 1110px;
  margin-bottom: 4em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  font-size: 19px;
`;
export default class Test extends Component {
  render() {
    console.log(this.props.data);
    return (
      <Container>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.data.data.text.html }}
        />
        <DocWrapper>
          <Document
            className='docpdf'
            file={this.props.data.data.menu.url}
            loading={<div className='react-pdf__message' />}
            renderMode='png'
          >
            <Page width='340' className='pagepdf_mobile' pageNumber={1} />
          </Document>
        </DocWrapper>
      </Container>
    );
  }
}
