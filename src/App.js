import React from "react"
import { createGlobalStyle } from "styled-components"

// components
import Header from "./components/Header"
import Main from "./pages/Main"
import Todos from "./pages/Todos"
import Favoritos from "./pages/Favoritos"
import JaVistos from "./pages/JaVistos"
import Search from "./pages/Search"
import Adicionados from "./pages/Adicionados"
import FilmsLibrary from "./FilmsLibrary.json"

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"



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

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />


      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="todos" element={<Todos />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="jaVistos" element={<JaVistos />} />
        <Route path="search" element={<Search />} />
        <Route path="adicionados" element={<Adicionados />} />
      </Routes>

    </Router>
  )
}
