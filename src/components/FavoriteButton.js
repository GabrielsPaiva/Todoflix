import React from "react"
import styled from "styled-components"
import FilmsLibrary from "../FilmsLibrary.json"

import favorite from "../assets/favorite_icon.png"
import favoriteRed from "../assets/favoriteRed_icon.png"


const Favorite = styled.img`
position: absolute;
width: 1.4%;
margin: 0.3em 0 0 20.5em;
cursor: pointer;
`

export default class favoriteButton extends React.Component {

    state = {
        favoriteImage: FilmsLibrary[this.props.indexNumber].favorite ? favoriteRed : favorite 
    }

    toggleFavorite = () => {
        const { indexNumber } = this.props
        if (FilmsLibrary[indexNumber].favorite) {

            FilmsLibrary[indexNumber].favorite = false
            this.setState({ favoriteImage: favorite })

        } else {

            FilmsLibrary[indexNumber].favorite = true
            this.setState({ favoriteImage: favoriteRed })
        }

    }

    render() {
        return <Favorite src={this.state.favoriteImage} alt="" onClick={this.toggleFavorite} />
    }
}