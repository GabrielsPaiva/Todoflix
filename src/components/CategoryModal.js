import React from "react"
import styled from "styled-components"

import {
  Link
} from "react-router-dom"


const Div = styled.div`
background-color: #000;
position: relative;
color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 136px;
height: 120px;
top: 1em;
left: 20%;
z-index: 1;

a{
  text-decoration: none;
}

h2{
  font-size: 16px;
  margin: 9px 0 0 5px;
  cursor: pointer;

  &:hover{
      font-weight: bolder;
  }
}
`

export default function Modal({ open }) {
  if (!open) return null
  return (
    <Div>
      <Link to="todos"><h2>Todos</h2></Link>
      <Link to="favoritos"><h2>Favoritos</h2></Link>
      <Link to="jaVistos"><h2>Já Vistos</h2></Link>
      <Link to="adicionados"><h2>Adicionados</h2></Link>
    </Div>
  )
}