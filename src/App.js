import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./components/Header"

const GlobalStyle = createGlobalStyle`
*{
  padding: 0; 
  margin: 0; 
  box-sizing: border-box;
  color: white;
  font-family: 'Monserrat', sans-serif;
}
body{
  background-color: black;
}
`

export default function App(){
  return(
    <div>
      <GlobalStyle/>
      <Header />
    </div>
  )
}
