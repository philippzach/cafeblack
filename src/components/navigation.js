import React, { Component } from 'react';
import styled from '@emotion/styled';
import Logo from './images/nav-logo-noborder.svg';
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
  justify-content: flex-end;
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
        font-family: 'Didot Medium', 'sans-serif';
        font-style: normal;
        font-weight: 300;
        text-shadow: black 1px 1px 10px;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
`;

const Button = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Didot Medium', 'sans-serif';
  font-style: normal;
  font-weight: 300;
  text-shadow: black 1px 1px 10px;
  :hover {
  }
`;

const NavigationDesk = () => (
  <Absolute>
    <Bar>
      {/*  <img className="desktopLogo" src={Logo} width="20%" style={{ paddingLeft: '10px' }} /> */}
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
        <li>
          <a href='#kontakt'>Kontakt</a>
        </li>
      </ul>
      {/*  <Button href="#kontakt">Kontakt</Button> */}
    </Bar>
  </Absolute>
);

export default NavigationDesk;
