import React from 'react'
import styled from '@emotion/styled'

const GreyHeadlineContainer = styled.div`
  background-color: ${props => props.color};
  width: 50%;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 550px) {
    width: 50%;
  }
  @media (min-width: 1051px) {
    width: 33%;
  }
`
const Text = styled.h3`
  font-family: 'Didot';
  margin-bottom: 0;
  width: 50%;
  padding-left: 1em;
  line-height: 1.5em;
  @media (max-width: 650px) {
    width: 95%;
  }
  @media (min-width: 651px) {
    width: 56%;
  }
`

const Headline = props => (
  <div id={props.idlink}>
    <GreyHeadlineContainer color={props.color}>
      <Text>{props.headline}</Text>
    </GreyHeadlineContainer>
  </div>
)

export default Headline
