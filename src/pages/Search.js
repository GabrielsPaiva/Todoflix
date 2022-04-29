import React from "react"
import styled from "styled-components"
import FilmsLibrary from "../FilmsLibrary.json"
import Header from "../components/Header"

import {
    Link
} from "react-router-dom"

const Div = styled.div`
width: 100%;
height: 10em;
`
const SearchBar = styled.input`
background-color: #2C2C2C;
font-size: 20px;
border-radius: 6px;
border: none;
width: 100%;
height: 100%;
outline: none;

::placeholder{
    color: white;
    font-size: 15px;
    font-weight: lighter;
}
`

export default class Search extends React.Component {

    state = {
        Film: this.FilmSearch
    }

    render() {
        console.log(this.state.Film, this.props.result)
        return (
            <div>
            </div>
        )
    }
}