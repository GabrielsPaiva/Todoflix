import React from "react";
import styled from "styled-components";

// components
import Films from "./FilmsLibrary";

// libs
import Carousel from "nuka-carousel";


const LastFilmDiv = styled.div`
width: 64%;
height: 300px;
margin: 5em 0 0 3%;
`
const CarouselDiv = styled.div`
width: 97%;
height: fit-content;
margin: 13% 0 0 3%;
`
const H2 = styled.div`
font-size: 25px;
margin-bottom: 1em;
`


export default function Main(){

    const carouselSlider = {
        slidesToShow: 5,
        wrapAround: true,
    }

    return(
        <div>
            <LastFilmDiv>
                <Films lastAdded object={0}/>
            </LastFilmDiv>

            <CarouselDiv>
                <H2>Destaques</H2>
            <Carousel {...carouselSlider}>
                <Films slider object={0}/>
                <Films slider object={0}/>
                <Films slider object={0}/>
                <Films slider object={0}/>
                <Films slider object={0}/>

            </Carousel>
            </CarouselDiv>
        </div>
    )
}