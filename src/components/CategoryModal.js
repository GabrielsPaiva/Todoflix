import React from "react"
import styled from "styled-components"

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

h2{
  font-size: 13px;
  margin: 6px;
  cursor: pointer;

  &:hover{
      font-weight: bolder;
  }
}
`

export default function Modal( { open } ){
  if (!open) return null
  return(
    <Div>
        <h2>Todos</h2>
        <h2>Favoritos</h2>
        <h2>Já Vistos</h2>
        <h2>Adicionados</h2>
    </Div>
  )
}