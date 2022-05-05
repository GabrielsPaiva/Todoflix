import React from "react"
import styled from "styled-components"
import media, {generateMedia} from "styled-media-query"
import FilmsLibrary from "../FilmsLibrary.json"
import * as S from "../pages/styles/FilmBoxesStyle"
import FavoriteButton from "../components/FavoriteButton"
import ThumbUpGreen from "../assets/thumbUpGreen.png"
import ThumbUpWhite from "../assets/thumbUpWhite.png"
import ThumbUpOrange from "../assets/thumbUpOrange.png"

const customMedia = generateMedia({
    laptop: "1024px"
})

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

${media.lessThan("huge")`
right: 5.2em;
`}
${customMedia.lessThan("laptop")`
right: 4em
`}
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
                  {this.state.searchResult.map((item, id) => (
                      <S.FilmDiv key={id}>
                      <S.FilmPoster src={item.poster} alt="" />
                      <FavoriteButton indexNumber={item.number}/>
                      <S.Container>
                        <S.FilmTitle>{item.name}</S.FilmTitle>
                        <S.FilmRateDiv>
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