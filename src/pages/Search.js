import React from "react"
import styled from "styled-components"
import FilmsLibrary from "../FilmsLibrary.json"
import * as S from "../pages/styles/FilmBoxesStyle"
import FavoriteButton from "../components/FavoriteButton"
import ThumbUpGreen from "../assets/thumbUpGreen.png"
import ThumbUpWhite from "../assets/thumbUpWhite.png"
import ThumbUpOrange from "../assets/thumbUpOrange.png"

import {
    Link
} from "react-router-dom"

const Div = styled.div`
display: flex;
flex-wrap: wrap;
width: 85%;
height: fit-content;
margin: 1.5em 0 0 3em;
`
const SearchBar = styled.input`
position: absolute;
background-color: #2C2C2C;
font-size: 20px;
border-radius: 6px;
border: none;
width: 22%;
height: 1.8em;
outline: none;
top: 1.5em;
right: 11em;

::placeholder{
    color: white;
    font-size: 15px;
    font-weight: lighter;
}
`

export default class Search extends React.Component {

    state = {
        Film: FilmsLibrary,
        searchResult: FilmsLibrary
    }

    filter = (e) => {
        const search = this.state.Film.filter(item => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                return true;
            }
        })
        this.setState({
            searchResult: search
        })
    }

    render() {
        return (
            <>
              <SearchBar autoFocus type='text' placeholder="Pesquisa" onChange={this.filter}/>
              <Div>
                  {this.state.searchResult.map(item => (
                      <S.FilmDiv key={item.id}>
                      <S.FilmPoster src={item.poster} alt="" />
                      <FavoriteButton/>
                      <S.Container>
                        <S.FilmTitle>{item.name}</S.FilmTitle>
                        <S.FilmRateDiv key={item.id}>
                          <S.FilmRate>{`${item.rate}/5`}</S.FilmRate>
                          <S.GreenThumb src={ThumbUpGreen} alt="" />
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