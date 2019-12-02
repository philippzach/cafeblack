import React from 'react'
import styled from '@emotion/styled'
import Slider from './sliderabout'
import Wrapper from '../Wrapper'

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
`

class SimpleSlider extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Paragraph>{this.props.aboutText.about.text}</Paragraph>
        </Wrapper>
        <Slider data={this.props.data} />
      </div>
    )
  }
}

export default SimpleSlider
