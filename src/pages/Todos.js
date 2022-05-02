import React from "react";
import styled from "styled-components";

// components
import FilmsLibrary from "../FilmsLibrary.json";
import FavoriteButton from "../components/FavoriteButton";
import * as S from "./styles/FilmBoxesStyle"

// images
import ThumbUpGreen from "../assets/thumbUpGreen.png"
import ThumbUpWhite from "../assets/thumbUpWhite.png"
import ThumbUpOrange from "../assets/thumbUpOrange.png"


// Films Catalogue

const PageTitle = styled.h2`
font-size: 40px;
font-weight: lighter;
margin: 2em 0 0 1em;
`
const FilmsCatalogueDiv = styled.div`
display: flex;
flex-wrap: wrap;
width: 85%;
height: fit-content;
margin: 1.5em 0 0 3em;
`

export default function Todos() {

  const Films = [...FilmsLibrary]

  const toggleFavorite = () => {
    return 
  }

  return (
    <>
      <PageTitle>Todos</PageTitle>
      <FilmsCatalogueDiv>
        {Films.map(item => (
          <S.FilmDiv key={item.id}>
            <S.FilmPoster src={item.poster} alt="" />
            <FavoriteButton onClick={toggleFavorite}/>
            <S.Container>
              <S.FilmTitle>{item.name}</S.FilmTitle>
              <S.FilmRateDiv key={item.id}>
                <S.FilmRate>{`${item.rate}/5`}</S.FilmRate>
                <S.GreenThumb src={ThumbUpGreen} alt=""/>
              </S.FilmRateDiv>
            </S.Container>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <S.Overview>{item.overview}</S.Overview>
            </div>
          </S.FilmDiv>
        ))}
      </FilmsCatalogueDiv>
    </>
  )
}