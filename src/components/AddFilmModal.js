import React from "react"
import styled from "styled-components"
import selectedImage from "../assets/display_image.png"

const Div = styled.div`
background-color: #000;
position: fixed;
color: white;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 900px;
height: 638px;
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
                    <img src={selectedImage} alt=""/>
                    <p>Imagem de Capa</p>
                </ImageSection>
            </Container>
        </Div>
    )
}