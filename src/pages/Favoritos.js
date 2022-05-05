import React from "react"
import styled from "styled-components"
import { generateMedia } from "styled-media-query";

// components
import FilmsLibrary from "../FilmsLibrary.json"
import FavoriteButton from "../components/FavoriteButton"
import * as S from "./styles/FilmBoxesStyle"

// images
import ThumbUpGreen from "../assets/thumbUpGreen.png"
import ThumbUpWhite from "../assets/thumbUpWhite.png"
import ThumbUpOrange from "../assets/thumbUpOrange.png"

const customMedia = generateMedia({
    laptop: "1024px"
  })

const PageTitle = styled.h2`
font-size: 40px;
font-weight: lighter;
margin: 2em 0 0 1em;

${customMedia.lessThan("laptop")`
  margin-left: 2.5em;
  `}
`
const Div = styled.div`
display: flex;
flex-wrap: wrap;
width: 85%;
height: fit-content;
margin: 1.5em 0 0 3em;

${customMedia.lessThan("laptop")`
  justify-content: center;
  `}
`

export default class Search extends React.Component {

    state = {
        Film: [...FilmsLibrary],
        searchResult: []
    }

    componentDidMount = () => {
        this.filter()
    }

    filter = () => {
        const search = this.state.Film.filter(item => {
            if (item.favorite === true) {
                return true
            }
        })
        this.setState({
            searchResult: search
        })
    }

    render() {
        const { searchResult } = this.state
        return (
            <>
            <PageTitle>Favoritos</PageTitle>
            <Div>
                {searchResult.map((item, id) =>(
                    <S.FilmDiv key={id}>
                    <S.FilmPoster src={item.poster} alt="" />
                    <FavoriteButton indexNumber={item.number}/>
                    <S.Container>
                      <S.FilmTitle>{item.name}</S.FilmTitle>
                      <S.FilmRateDiv key={item.id}>
                        <S.FilmRate>{`${item.rate}/5`}</S.FilmRate>
                        <S.GreenThumb src={item.rate <= 1 ? ThumbUpWhite : item.rate <= 3 ? ThumbUpOrange : ThumbUpGreen} alt="" />
                      </S.FilmRateDiv>
                    </S.Container>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                      <S.Overview>{item.overview}</S.Overview>
                    </div>
                  </S.FilmDiv>
                ))}
            </Div>
            </>
        )

    }
}