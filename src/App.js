import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./components/Header"
import Main from "./components/Main"

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
      <Main/>
    </div>
  )
}
