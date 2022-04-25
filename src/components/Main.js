import React from "react";
import styled from "styled-components";

// components
import FilmsLibrary from "../FilmsLibrary.json"

// images
import FavoriteIcon from "../assets/favorite_icon.png"
import ThumbUp from "../assets/thumbUp.png"

// libs
import Carousel from "nuka-carousel";






// Last Added Styles

const LastFilmDiv = styled.div`
width: 64%;
height: 300px;
margin: 5em 0 0 3%;
`

const LastFilmBox = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 300px;
`

const Poster = styled.img`
border-radius: 5px;
height: 100%;
`
const AboutLastFilmDiv = styled.div`
width: 50%;
`
const Favorite = styled.img`
margin-bottom: 0em;
cursor: pointer;
`
const P = styled.p`
font-size: 20px;
margin-bottom: 0em;
`
const FilmsTitle = styled.h2`
font-size: 30px;
font-weight: 700;
margin-bottom: 0.5em;
`
const Overview = styled.p`
margin-bottom: 0em;
`
const LastFilmRateDiv = styled.div`
display: flex;
align-items: center;
width: 000px;
height: fit-content;
`
const LastFilmRate = styled.p`
font-size: 20px;
`
const GreenThumb = styled.img`
width: 28%;
margin: 0 0 0.4em 8%;
`


// Slider Styles

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
`
const SliderFilmPoster = styled.img`
border-radius: 5px;
`
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`
const SliderFilmTitle = styled.h2`
font-size: 14px;
width: 100%;
`

const SliderFilmRateDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100px;
height: fit-content;
`
const SliderFilmRate = styled.p`
font-size: 16px;
`
const SliderGreenThumb = styled.img`
width: 28%;
margin: 0 0 0.4em 8%;
`
const SliderOverview = styled.p`
overflow-y: auto;

&::-webkit-scrollbar{
    width: 10px;
}
`


export default function Main() {

    const Films = [
        ...FilmsLibrary
    ]

    const carouselSlider = {
        slidesToShow: 5,
        wrapAround: true,
        pagination: false
    }

    return (
        <div>
            <LastFilmDiv>
                <LastFilmBox>
                    <div>
                        <Poster src={Films[0].poster} alt="" />
                    </div>
                    <AboutLastFilmDiv>
                        <Favorite src={FavoriteIcon} alt='' />
                        <P>Visto recentemente</P>
                        <FilmsTitle>{Films[0].name}</FilmsTitle>
                        <Overview>{Films[0].overview}</Overview>

                        <LastFilmRateDiv>
                            <LastFilmRate>{`${Films[0].rate}/5`}</LastFilmRate>
                            <GreenThumb src={ThumbUp} alt="" />
                        </LastFilmRateDiv>

                    </AboutLastFilmDiv>
                </LastFilmBox>
            </LastFilmDiv>

            <CarouselDiv>
                <H2>Destaques</H2>
                <Carousel {...carouselSlider}>
                    {Films.map(item => (
                        <SliderFilmDiv key={item.id}>
                            <SliderFilmPoster src={item.poster} alt='' />

                            <Container>
                                <SliderFilmTitle>{item.name}</SliderFilmTitle>
                                <SliderFilmRateDiv>
                                    <SliderFilmRate>{`${item.rate}/5`}</SliderFilmRate>
                                    <SliderGreenThumb src={ThumbUp} alt="" />
                                </SliderFilmRateDiv>
                            </Container>

                            <SliderOverview>{item.overview}</SliderOverview>
                        </SliderFilmDiv>
                    ))}
                </Carousel>
            </CarouselDiv>
        </div>
    )
}