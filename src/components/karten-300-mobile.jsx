import React from 'react'
import './style.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Document, Page } from 'react-pdf'
import styled from '@emotion/styled'
import Wrapper from './Wrapper'
import Karten from './karten'

const DocWrapper = styled.div`
  /*  width: calc(100% - 10%); */
  max-width: 1110px;
  margin-bottom: 4em;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  font-size: 19px;
`
const Spacer = styled.div`
  padding: 2em;
`
const LinkContainer = styled.div`
  text-align: center;
`
const DownloadLink = styled.a`
  color: black;
  text-decoration: underline;
  font-family: 'didot';
  font-style: normal;
  padding: 0.75em;
  background-color: white;
`

const KartenMobile = ({ data, kartenText }) => (
  <Karten kartenText={kartenText}>
    <Tabs>
      <Wrapper>
        <TabList className="tab-list">
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte1text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte2text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte3text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte4text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte5text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte6text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte7text.text}
          </Tab>
          <Tab className="tab" selectedClassName="tab-open">
            {data.karte8text.text}
          </Tab>
        </TabList>
        <Spacer />
      </Wrapper>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte1pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte1pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte2pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte2pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte3pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte3pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte4pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte4pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte5pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte5pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte6pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte6pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte7pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte7pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <TabPanel>
        <DocWrapper>
          <Document
            className="docpdf_mobile"
            file={data.karte8pdf.url}
            loading={<div className="react-pdf__message_mobile" />}
            renderMode="svg"
          >
            <Page width="340" className="pagepdf_mobile" pageNumber={1} />
          </Document>
        </DocWrapper>
        <LinkContainer>
          <DownloadLink href={data.karte8pdf.url} rel="noopener noreferrer" target="_blank">
            {data.ctadownload.text}
          </DownloadLink>
        </LinkContainer>
      </TabPanel>
      <Spacer />
    </Tabs>
  </Karten>
)

export default KartenMobile
