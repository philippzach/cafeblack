import React from 'react'
import styled from '@emotion/styled'
import { AST_PropAccess } from 'terser'

const Boton = styled.button`
  color: black;
  border: solid black 2px;
  box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 8px;
  padding: 1em 2.5em;
  font-family: 'Didot';
  cursor: pointer;
  transition: ease-in-out;
  text-transform: uppercase;
  font-style: normal;
  :hover {
    transform: translateY(5px);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px;
    background-color: black;
    color: white;
  }
`

const Button = ({ link, text }) => (
  <a href={link}>
    <Boton>{text}</Boton>
  </a>
)

export default Button
