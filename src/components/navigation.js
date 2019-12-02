import React, { Component } from 'react';
import styled from '@emotion/styled';
import Logo from './images/nav-logo.svg';
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1.45em;
  ul {
          margin-bottom: 0rem;
          margin-left: 0;

    li {
      display: inline;
          margin-bottom: 0rem;
          padding-right: 1.5em;
      a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Didot Medium" !important;
        font-style: normal;
        font-weight: 300;
        text-shadow: black 1px 1px 10px;
      }
      a:hover {
        text-decoration: none;
  
      }
    }
  }

  /* @media screen and (max-width: 649px) {
    margin-top: 0em;
    width: 100%;
    background-color: white;
    img.desktopLogo {
      display: none;
    }
    ul {
      display: none;
    }
  }
  @media screen and (min-width: 650px) {
 
    img.mobileLogo {
      display: none;
    } */
  }
`;
const Button = styled.a`
  button {
    background-color: white;
    padding: 0.5em;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Didot Medium' !important;
    font-style: normal;
    font-weight: 300;
    border: solid 1px black;
    cursor: pointer;
  }
  button:hover {
    color: white;
    background-color: black;
  }
`;

const NavigationDesk = () => (
  <Absolute>
    <Bar>
      <img className='desktopLogo' src={Logo} width='25%' />
      <ul>
        <li>
          <a href='#karte'>Karte</a>
        </li>
        <li>
          <a href='#about'>Über uns</a>
        </li>

        <li>
          <a href='#events'>Events</a>
        </li>
      </ul>
      <Button href='#kontakt'>
        <button>Kontaktiere Uns</button>
      </Button>
    </Bar>
  </Absolute>
);

export default NavigationDesk;
