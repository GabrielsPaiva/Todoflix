import React from "react"
import styled from "styled-components"

import favorite from "../assets/favorite_icon.png"

const Favorite = styled.img`
position: absolute;
width: 1.4%;
margin: 0.3em 0 0 20.5em;
cursor: pointer;
`

export default function favoriteButton(){
    return <Favorite src={favorite} alt="" />
}