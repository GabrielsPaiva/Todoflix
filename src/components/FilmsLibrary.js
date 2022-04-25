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

export default class FilmsLibrary extends React.Component {
    state = {
        Films: [
            {
                poster: 'https://i.pinimg.com/736x/21/d3/f2/21d3f2c91bde87c00bce25fb2edd3fc2.jpg',
                name: 'Homem-Aranha: Sem Volta Para Casa',
                overview: 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha.',
                rate: 5,
                status: "Já Assisti"
            },
            {
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GTjQXMCYm462PUjRWeN_n-utGKradPgh58dnL41ZwQ5rqfIB592WHfSXxucgP7QEi8s&usqp=CAU',
                name: 'O Jogo da Imitação',
                overview: 'Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de "Enigma", enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.',
                rate: 4,
                status: "Já Assisti"
            },
            {
                poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5121133ed593d8e5fdb29b659638cebe5d245fe3de56d5dc0b0b56b321e6ea97._UY500_UX667_RI_V_TTW_.jpg',
                name: 'A Origem',
                overview: 'Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono. Impedido de retornar para sua família, ele recebe a oportunidade de se redimir ao realizar uma tarefa aparentemente impossível: plantar uma ideia na mente do herdeiro de um império. Para realizar o crime perfeito, ele conta com a ajuda do parceiro Arthur, o discreto Eames e a arquiteta de sonhos Ariadne. Juntos, eles correm para que o inimigo não antecipe seus passos.',
                rate: 5,
                status: "Já Assisti"
            },
            {
                poster: 'https://i.ytimg.com/vi/ZyGVvAs3FUA/maxresdefault.jpg',
                name: 'Boneca Maldita',
                overview: 'Um fabricante de brinquedos e sua esposa são aterrorizados por um demônio depois que a sobrinha órfã tenta fazer contato com o espiríto da mãe.',
                rate: 1,
                status: "Já Assisti"
            },
            {
                poster: 'https://lumiere-a.akamaihd.net/v1/images/1920x1080_logo_d3a5a5f4.png',
                name: 'A Viúva Negra',
                overview: 'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.',
                rate: 3,
                status: "Já Assisti"
            },
        ]
    }

    render() {
        const { Films, } = this.state
        const { object, lastAdded, slider, filmsCatalogue } = this.props
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
                <SliderFilmDiv>
                    <SliderFilmPoster src={Films[object].poster} alt='' />

                    <Container>
                        <SliderFilmTitle>{Films[object].name}</SliderFilmTitle>
                        <SliderFilmRateDiv>
                            <SliderFilmRate>{`${Films[object].rate}/5`}</SliderFilmRate>
                            <SliderGreenThumb src={ThumbUp} alt="" />
                        </SliderFilmRateDiv>
                    </Container>

                    <SliderOverview>{Films[object].overview}</SliderOverview>
                </SliderFilmDiv>
            )
        }
        if (filmsCatalogue) {
            return (
                <FilmsCatalogueDiv>
                    {Films.map(item => (
                        <FilmsCatalogueBox>
                            <FilmsCataloguePoster src={item.poster} alt="" />
                            <FilmsCatalogueTitle>{item.name}</FilmsCatalogueTitle>

                            <FilmsCatalogueRateDiv>
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
    }
}