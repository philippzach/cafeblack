import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import MobileMapS from './images/mapmobile.png'
import DesktopMapS from './images/mapdesktop.png'

const Background = styled.div`
  background-color: #1e1e1e;
`
const StyledFooter = styled.footer`
  max-width: ${props => props.theme.maxWidth};
  margin: -4rem auto 0 auto;
  padding: 0rem 2rem 2rem 2rem;
  color: white;
`
const Container = styled.div``

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1.5em;
  transform: translateY(-8em);
`

const DesktopMap = styled.img`
  @media (max-width: 559px) {
    display: none;
  }
`
const MobileMap = styled.img`
  @media (min-width: 560px) {
    display: none;
  }
`
class Footer extends Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Background>
          <a
            className="maplink"
            href="https://www.google.com/maps/place/Cafe+Black/@47.3622898,8.5374162,14z/data=!4m5!3m4!1s0x0:0xa3fcc7f226975c6f!8m2!3d47.3617368!4d8.5485268"
          >
            <MapContainer>
              <DesktopMap className="mapcontainer" src={DesktopMapS} alt="cafe black 1966 zurich map" />
              <MobileMap className="mapcontainer" src={MobileMapS} alt="cafe black 1966 zurich map" />
            </MapContainer>
          </a>
          <StyledFooter>{children}</StyledFooter>
        </Background>
      </Container>
    )
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
