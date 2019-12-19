import React, { Component } from 'react';
import styled from '@emotion/styled';
import Logo from './images/nav-logo.svg';
import LogoMobile from './images/logo-mobile.svg';
import './navigation.css';

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Bar = styled.nav`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */
  max-width: 960px;
  display: flex;
  padding: 1em 1.5em;
  justify-content: space-between;
  align-items: center;
  margin-top: 0em;
    width: 100%;
    background-color: white;
  ul {
    li {
      display: inline;
      a {
        color: white;
      }
    }
  }
  }
`;
const MobileList = styled.div`
  display: grid;
  grid-template-rows: 35px 35px 35px 35px 35px;
  grid-row-gap: 0.5em;
  grid-template-columns: 100%;
  justify-content: end;
  text-align: right;
  font-weight: bold;
  z-index: 0;
  a {
    color: #494949;
    font-size: 1.25em;
    text-transform: uppercase;
    font: 'Didot';
    font-weight: 300;

    padding-right: 1em;
  }
  a:hover {
    text-decoration: none;
  }
`;
const MobileContainer = styled.div`
  padding: 3em 0;
  background-color: rgba(255, 255, 255, 0.9);
`;

class NavigationMobile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sidebarOpen: false,
      animate: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    this.animateSvg();
    console.log('clicked');
  }

  toggleMenu() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  closeMenu() {
    if (this.state.sidebarOpen === true) {
      this.setState({ sidebarOpen: false });
    }
  }

  animateSvg() {
    this.setState({ animate: true });
  }

  render() {
    return (
      <Absolute onClick={() => this.closeMenu()}>
        <Bar>
          <img className='mobileLogo' src={LogoMobile} />
          <svg
            onClick={() => this.handleMouseDown()}
            onAnimationEnd={() => this.setState({ animate: false })}
            className={this.state.animate ? 'animate-pulse' : ''}
            width='25px'
            height='21px'
            viewBox='0 0 25 21'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              id='Page-1'
              stroke='none'
              stroke-width='1'
              fill='none'
              fill-rule='evenodd'
              opacity='0.742373512'
            >
              <g
                id='Cafe-Bar-Black---Mobile'
                transform='translate(-356.000000, -32.000000)'
                fill='#000000'
              >
                <path
                  d='M379.75,50 L357.25,50 C356.560008,50 356,50.6719988 356,51.4999755 C356,52.3280012 356.560008,53 357.25,53 L379.75,53 C380.439992,53 381,52.3280012 381,51.4999265 C381,50.6719988 380.439992,50 379.75,50 Z M357.25,35 L379.75,35 C380.439992,35 381,34.3280392 381,33.5 C381,32.6719608 380.439992,32 379.75,32 L357.25,32 C356.560008,32.000049 356,32.6720098 356,33.500049 C356,34.3280392 356.560008,35 357.25,35 Z M379.75,41 L357.25,41 C356.560008,41 356,41.6719988 356,42.5000245 C356,43.3280502 356.560008,44 357.25,44 L379.75,44 C380.439992,44 381,43.3280012 381,42.5000245 C381,41.6720478 380.439992,41 379.75,41 Z'
                  id='Fill-1'
                />
              </g>
            </g>
          </svg>
        </Bar>
        <div
          className={'menu' + this.state.sidebarOpen}
          onClick={() => this.toggleMenu()}
        >
          <MobileContainer>
            <MobileList>
              <a href='#karte'>Karte</a>
              <a href='#about'>Über Uns</a>
              <a href='#kontakt'>Kontakt</a>
              <a href='#events'>Events</a>
            </MobileList>
          </MobileContainer>
        </div>
      </Absolute>
    );
  }
}

export default NavigationMobile;
