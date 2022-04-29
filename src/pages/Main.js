import React from "react";
import styled from "styled-components";

// components
import FilmsLibrary from "../FilmsLibrary.json"
import * as S from "./styles/FilmBoxesStyle"
import * as LFS from "./styles/LastFilmStyle"

// images
import FavoriteIcon from "../assets/favorite_icon.png"
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
const SliderFavorite = styled.img`
position: absolute;
width: 0.5%;
margin: 0.5em 0 0 20.1em;
`


export default function Main() {

    const Films = [
        ...FilmsLibrary
    ]

    const carouselStyle = {
        slidesToShow: 5,
        wrapAround: true,
        pagination: false,
        autoplay: true,
        defaultControlsConfig: {
            nextButtonStyle: {background: `url(${rightArrow}) no-repeat center`, color: "transparent", height: "10em", marginBottom: "10em"  },
            prevButtonStyle: {background: `url(${leftArrow}) no-repeat center`, color: "transparent", height: "10em", marginBottom: "10em"  },
            
        }
    }

    return (
        <div>
            <LFS.LastFilmDiv>
                <LFS.LastFilmBox>
                    <div>
                        <LFS.Poster src={Films[0].poster} alt="" />
                    </div>
                    <LFS.AboutLastFilmDiv>
                        <LFS.Favorite src={FavoriteIcon} alt='' />
                        <LFS.P>Visto recentemente</LFS.P>
                        <LFS.FilmsTitle>{Films[0].name}</LFS.FilmsTitle>
                        <LFS.Overview>{Films[0].overview}</LFS.Overview>

                        <LFS.LastFilmRateDiv>
                            <LFS.LastFilmRate>{`${Films[0].rate}/5`}</LFS.LastFilmRate>
                            <LFS.GreenThumb src alt="" />
                        </LFS.LastFilmRateDiv>

                    </LFS.AboutLastFilmDiv>
                </LFS.LastFilmBox>
            </LFS.LastFilmDiv>

            <CarouselDiv>
                <H2>Destaques</H2>
                <Carousel {...carouselStyle}>
                    {Films.map(item => (
                        <S.FilmDiv key={item.id}>
                            <S.FilmPoster src={item.poster} alt='' />
                            <SliderFavorite src={FavoriteIcon} alt="" />
                            <S.Container>
                                <S.FilmTitle>{item.name}</S.FilmTitle>
                                <S.FilmRateDiv>
                                    <S.FilmRate>{`${item.rate}/5`}</S.FilmRate>
                                    <S.GreenThumb src alt="" />
                                </S.FilmRateDiv>
                            </S.Container>

                            <S.Overview>{item.overview}</S.Overview>
                        </S.FilmDiv>
                    ))}
                </Carousel>
            </CarouselDiv>
        </div>
    )
}