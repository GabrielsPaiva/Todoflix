import React from 'react';
import styled from 'styled-components';

// images
import FavoriteIcon from "../assets/favorite_icon.png"
import ThumbUp from "../assets/thumbUp.png"


// Last Added Styles

const LastFilmDiv = styled.div`
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
margin-bottom: 1em;
cursor: pointer;
`
const P = styled.p`
font-size: 20px;
margin-bottom: 1em;
`
const FilmsTitle = styled.h2`
font-size: 30px;
font-weight: 700;
margin-bottom: 0.5em;
`
const Overview = styled.p`
margin-bottom: 1em;
`
const LastFilmRateDiv = styled.div`
display: flex;
align-items: center;
width: 100px;
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


const SliderMovieBox = styled.div`
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

export default function FilmsLibrary({ lastAdded, slider, filmsCatalogue, object }) {
    const Films = [
        {
            poster: 'https://i.pinimg.com/736x/21/d3/f2/21d3f2c91bde87c00bce25fb2edd3fc2.jpg',
            name: 'Homem-Aranha: Sem Volta Para Casa',
            overview: 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
            rate: 5,
        },
        {
            poster:
                'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
            name: 'Homem-Aranha: Sem Volta Para Casa',
            overview:
                'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
        },
        {
            poster:
                'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
            name: 'Homem-Aranha: Sem Volta Para Casa',
            overview:
                'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
        },
        {
            poster:
                'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
            name: 'Homem-Aranha: Sem Volta Para Casa',
            overview:
                'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
        },
        {
            poster:
                'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
            name: 'Homem-Aranha: Sem Volta Para Casa',
            overview:
                'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
        },
    ];

    if (lastAdded) {
        return (
            <LastFilmDiv>
                <div>
                    <Poster src={Films[object].poster} alt="" />
                </div>
                <AboutLastFilmDiv>
                    <Favorite src={FavoriteIcon} alt='' />
                    <P>Visto recentemente</P>
                    <FilmsTitle>{Films[object].name}</FilmsTitle>
                    <Overview>{Films[object].overview}</Overview>

                    <LastFilmRateDiv>
                        <LastFilmRate>{`${Films[object].rate}/5`}</LastFilmRate>
                        <GreenThumb src={ThumbUp} alt="" />
                    </LastFilmRateDiv>

                </AboutLastFilmDiv>
            </LastFilmDiv>
        )
    }
    if (slider) {
        return (
            <SliderMovieBox>
                <SliderFilmPoster src={Films[object].poster} alt='' />
                
                <Container>
                    <SliderFilmTitle>{Films[object].name}</SliderFilmTitle>
                    <SliderFilmRateDiv>
                        <SliderFilmRate>{`${Films[object].rate}/5`}</SliderFilmRate>
                        <SliderGreenThumb src={ThumbUp} alt="" />
                    </SliderFilmRateDiv>
                </Container>

                <p>{Films[object].overview}</p>
            </SliderMovieBox>
        )
    }
}
