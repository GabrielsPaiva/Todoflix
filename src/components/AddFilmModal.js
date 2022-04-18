import React from "react"
import styled from "styled-components"
import ReactStars from "react-rating-stars-component"
import selectedImage from "../assets/display_image.png"


const info = {
    count: 5,
    size: 50,
    char: "☆",
  };



const Div = styled.div`
background-color: #000;
position: fixed;
color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 900px;
height: 750px;
border: solid white 1px;
border-radius: 10px;
top: 6em;
left: 29%;
z-index: 1;

h2{
    font-size: 29px;
    font-family: Arial, Regular;
    margin-bottom: 1.5em;
}
input{
    margin-bottom: 2.5em;
    border-radius: 5px;
}
p{
    margin-bottom: 14px;
}
`
const CloseButton = styled.p`
font-size: 40px;
margin: 0.5em 0 0 94%;
transform: rotate(45deg);
cursor: pointer;
`
const Container = styled.div`
display: flex;
`
const Main = styled.div`
display: flex;
flex-direction: column;
margin: 1.5em 0 0 5em;
`
const NameInput = styled.input`
    background-color: #2C2C2C;
    border: none;
    width: 400px;
    height: 30px;
    outline: none;
`
const OverviewInput = styled.textarea`
    background-color: #2C2C2C;
    border: none;
    border-radius: 5px;
    width: 400px;
    height: 80px;
    outline: none;
    text-align: top;
`
const SelectImage = styled.label`
    background-color: whitesmoke;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 6px;
    border: none;
    width: 139px;
    height: 2.6em;
    margin-top: 1em;
    cursor: pointer;
`
const ImageSection = styled.div`
display: flex;
flex-direction: column-reverse;
width: 300px;
height: 15.2em;
margin: 6.3em 0 0 2em;

img{
    border: solid 1px gray;
    border-radius: 4px;
}
`
const Input = styled.input`
display: none;
`
const Status = styled.div`
margin-left: 5em;
`
const RadioInputs = styled.div`
display: flex;
justify-content: space-between;
width: 120%;

div{
    display: flex;
}

div input{
    width: 30px;
    height: 24px;

    &:checked{
    background: transparent;
    }
}
div label{
    margin-top: 0.3em
}
`
const Rate = styled.div`
margin-left: 5em;
`

export default function FilmModal({ open, close }) {
    if (!open) return null

    return (
        <Div>
            <CloseButton onClick={close}>+</CloseButton>
            <Container>
                <Main>
                    <h2>Adicionar Filme</h2>
                    <div>
                        <p>nome</p>
                        <NameInput type="text" />
                    </div>
                    <div>
                        <p>descrição</p>
                        <OverviewInput maxLength={200} />
                    </div>
                </Main>
                <ImageSection>
                    <SelectImage for="selectButton">Selecione imagem</SelectImage>
                    <Input type="file" id="selectButton" />
                    <img src={selectedImage} alt="" />
                    <p>Imagem de Capa</p>
                </ImageSection>
            </Container>
            <Status>
                <p>Status</p>
                <RadioInputs>
                    <div>
                        <input type="radio" name="status" value="seen" />
                        <label>Já Assisti</label>
                    </div>
                    <div>
                        <input type="radio" name="status" value="not seen" />
                        <label>Não assisti ainda</label>
                    </div>
                </RadioInputs>
            </Status>
            <Rate>
                <h3>Nota</h3>
                <ReactStars { ...info } />
            </Rate>
        </Div>
    )
}