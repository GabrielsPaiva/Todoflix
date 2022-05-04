import React from "react";
import styled from "styled-components";

// components
import FilmsLibrary from "../FilmsLibrary.json"
import CarouselModal from "../components/Modals/CarouselModal";
import FavoriteButton from "../components/FavoriteButton"
import * as S from "./styles/FilmBoxesStyle"
import * as LFS from "./styles/LastFilmStyle"

// images
import FavoriteIcon from "../assets/favorite_icon.png"
import FavoriteRedIcon from "../assets/favoriteRed_icon.png"
import ThumbUpGreen from "../assets/thumbUpGreen.png"
import ThumbUpWhite from "../assets/thumbUpWhite.png"
import ThumbUpOrange from "../assets/thumbUpOrange.png"
import rightArrow from "../assets/right_arrow.png"
import leftArrow from "../assets/left_arrow.png"

// libs
import Carousel from "nuka-carousel";


// Styles

const CarouselDiv = styled.div`
width: 97%;
height: fit-content;
margin: 6em 0 0 3%;
`
const H2 = styled.div`
font-size: 25px;
margin-bottom: 1em;
`
const SliderFilmDiv = styled.div`
display: flex;
flex-direction: column;
width: 360px; 
height: 350px;
margin: 0 1em 5em 0;
cursor: pointer;

&:hover{
    background-color: #2C2C2C;
}
`
const SliderFavorite = styled.img`
position: absolute;
width: 0.5%;
margin: 0.5em 0 0 20.1em;
z-index: 1;
cursor: pointer;
`

const carouselStyle = {
    slidesToShow: 5,
    wrapAround: true,
    pagination: false,
    autoplay: true,
    defaultControlsConfig: {
        nextButtonStyle: { background: `url(${rightArrow}) no-repeat center`, color: "transparent", height: "10em", marginBottom: "10em" },
        prevButtonStyle: { background: `url(${leftArrow}) no-repeat center`, color: "transparent", height: "10em", marginBottom: "10em" },

    }
}

export default class Main extends React.Component {

    state = {
        Films: FilmsLibrary,
        carouselModal: false,
        favoriteImage: FavoriteIcon,
        id: null,
        poster: "",
        jaVisto: "",
        name: "",
        overview: "",
        rate: null
    }

    toggleFavorite = () => {
        const { id } = this.state
        if (FilmsLibrary[id].favorite === true) {
            FilmsLibrary[id].favorite = false
        } else {
            FilmsLibrary[id].favorite = true
        }
    }
    toggleFavoriteLastAdded = () => {
        if(FilmsLibrary[0].favorite){
            FilmsLibrary[0].favorite = false
        } else {
            FilmsLibrary[0].favorite = true
        }
    }

    render() {
        return (
            <div>
                <LFS.LastFilmDiv>
                    <LFS.LastFilmBox>
                        <div>
                            <LFS.Poster src={this.state.Films[0].poster} alt="" />
                        </div>
                        <LFS.AboutLastFilmDiv>
                            <LFS.Favorite src={FilmsLibrary[0].favorite ? FavoriteRedIcon : FavoriteIcon} alt='' onClick={this.toggleFavoriteLastAdded}/>
                            <LFS.P>Visto recentemente</LFS.P>
                            <LFS.FilmsTitle>{this.state.Films[0].name}</LFS.FilmsTitle>
                            <LFS.Overview>{this.state.Films[0].overview}</LFS.Overview>

                            <LFS.LastFilmRateDiv>
                                <LFS.LastFilmRate>{`${this.state.Films[0].rate}/5`}</LFS.LastFilmRate>
                                <LFS.GreenThumb src={this.state.favoriteImage} alt="" />
                            </LFS.LastFilmRateDiv>

                        </LFS.AboutLastFilmDiv>
                    </LFS.LastFilmBox>
                </LFS.LastFilmDiv>

                <CarouselDiv>
                    <CarouselModal
                        open={this.state.carouselModal}
                        close={() => { this.setState({ carouselModal: false }) }}
                        poster={this.state.poster}
                        jaVisto={this.state.jaVisto}
                        name={this.state.name}
                        overview={this.state.overview}
                        rate={this.state.rate}
                    />
                    <H2>Destaques</H2>
                    <Carousel {...carouselStyle}>
                        {this.state.Films.map((item, id, id2) => (
                            <div key={id}>
                                <SliderFavorite src={FilmsLibrary[id].favorite ? FavoriteRedIcon : FavoriteIcon} alt="" onClick={this.toggleFavorite} />
                                <SliderFilmDiv
                                    onClick={() => {
                                        this.setState({
                                            carouselModal: true,
                                            poster: FilmsLibrary[id].poster,
                                            jaVisto: FilmsLibrary[id].status,
                                            name: FilmsLibrary[id].name,
                                            overview: FilmsLibrary[id].overview,
                                            rate: FilmsLibrary[id].rate
                                        })
                                    }}
                                    onMouseEnter={() => { this.setState({ id: id }) }}>

                                    <S.FilmPoster src={item.poster} alt='' />
                                    <S.Container>
                                        <S.FilmTitle>{item.name}</S.FilmTitle>
                                        <S.FilmRateDiv>
                                            <S.FilmRate>{`${item.rate}/5`}</S.FilmRate>
                                            <S.GreenThumb src={this.state.favoriteImage} alt="" />
                                        </S.FilmRateDiv>
                                    </S.Container>

                                    <S.Overview>{item.overview}</S.Overview>
                                </SliderFilmDiv>
                            </div>
                        ))}
                    </Carousel>
                </CarouselDiv>
            </div>
        )
    }
}