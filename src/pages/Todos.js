import React from "react";
import styled from "styled-components";

// components
import FilmsLibrary from "../FilmsLibrary.json";

// images
import ThumbUp from "../assets/thumbUp.png"


// Films Catalogue

const FilmsCatalogueDiv = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height: fit-content;
`
const FilmsCatalogueBox = styled.div`
background-color: #2C2C2C;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
width: 430px;
height: fit-content;
margin: 5em;
`
const FilmsCataloguePoster = styled.img`
border-radius: 10px;
width: 100%;
height: 240px;
`
const FilmsCatalogueTitle = styled.h2`
font-size: 22px;
text-align: center;
margin-top: 10px;
`
const FilmsCatalogueOverview = styled.details`
margin: 10px 0 0 5%;
padding-bottom: 0.5em;
`
const FilmsCatalogueRateDiv = styled.div`
position: relative;
display: flex;
width: 15%;
top: 1.5em;
left: 10em;
`
const FilmsCatalogueRate = styled.p`
margin-top: 0.4em;
font-size: 16px;
`
const FilmsCatalogueGreenThumb = styled.img`
width: 40%;
height: 26px;
margin: 0 0 0.4em 8%;
`

export default function Todos() {

  const Films = [...FilmsLibrary]

  return (
    <FilmsCatalogueDiv>
      {Films.map(item => (
        <FilmsCatalogueBox key={item.id}>
          <FilmsCataloguePoster src={item.poster} alt="" />
          <FilmsCatalogueTitle>{item.name}</FilmsCatalogueTitle>

          <FilmsCatalogueRateDiv key={item.id}>
            <FilmsCatalogueRate>{`${item.rate}/5`}</FilmsCatalogueRate>
            <FilmsCatalogueGreenThumb src={ThumbUp} />
          </FilmsCatalogueRateDiv>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <FilmsCatalogueOverview>{item.overview}</FilmsCatalogueOverview>
          </div>
        </FilmsCatalogueBox>
      ))}
    </FilmsCatalogueDiv>
  )
}