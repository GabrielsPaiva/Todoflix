import React from "react"
import styled from "styled-components"
import ReactStars from "react-rating-stars-component"
import selectedImage from "../assets/display_image.png"


const info = {
    count: 5,
    size: 50,
    char: "☆",
};

const P = styled.p`
margin-bottom: 14px;
`
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
const ModalTitle = styled.h2`
font-size: 29px;
font-family: Arial, Regular;
margin-bottom: 1.5em;
`
const InputTitle = styled.p`
    margin-bottom: 14px;
`
const NameInput = styled.input`
background-color: #2C2C2C;
border: none;
border-radius: 5px;
width: 400px;
height: 30px;
margin-bottom: 2.5em;
outline: none;
`
const OverviewInput = styled.textarea`
background-color: #2C2C2C;
border: none;
border-radius: 5px;
font-size: 14.5px;
width: 400px;
height: 80px;
margin-bottom: 2.5em;
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
`
const Input = styled.input`
display: none;
`
const FilmImage = styled.img`
    border: solid 1px gray;
    border-radius: 4px;
`
const Status = styled.div`
margin-left: 5em;
`
const RadioInputsDiv = styled.div`
display: flex;
justify-content: space-between;
width: 120%;

div{
    display: flex;
}
`
const RadioInput = styled.input`
    width: 30px;
    height: 24px;
`
const Label = styled.label`
    margin-top: 0.3em
`
const RateDiv = styled.div`
margin-left: 5em;
`
const RateTitle = styled.h3`
margin-top: 1em;
`
const BottomButtons = styled.div`
display: flex;
width: 210px;
height: 40px;
margin: 4em 0 0 38%;
`
const CancelButton = styled.button` 
background: black;
border: none;
font-size: 16px;
width: 50%;
height: 100%;
cursor: pointer;
`
const ConfirmButton = styled.button`
background: #E71B27;
border-radius: 6px;
border: none;
width: 50%;
height: 100%;
cursor: pointer;

&:hover{
    border: solid 1px white;
}:active{
    border: none;
}
`

export default class FilmModal extends React.Component {

    state = {
        overviewLenght: 0
    }

    handleOverviewChange = (e) => {
        if(e.target.value.length > 0){
            this.setState({
                overviewLenght: e.target.value.length
            })
        }else{
            this.setState({
                overviewLenght: 0
            })
        }
      };

    render() {
        const {overviewLenght} = this.state
        const {close, open} = this.props
        if (!open) return null
        return (
            <Div>
                <CloseButton onClick={close}>+</CloseButton>
                <Container>
                    <Main>
                        <ModalTitle>Adicionar Filme</ModalTitle>
                        <div>
                            <InputTitle>nome</InputTitle>
                            <NameInput type="text" />
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <InputTitle>descrição</InputTitle>
                                <P>{`${overviewLenght}/ 200`}</P>
                            </div>
                            <OverviewInput maxLength={200} onChange={this.handleOverviewChange} />
                        </div>
                    </Main>
                    <ImageSection>
                        <SelectImage for="selectButton">Selecione imagem</SelectImage>
                        <Input type="file" name="myImage" accept="image/*" id="selectButton" />
                        <FilmImage src={selectedImage} alt="" />
                        <P>Imagem de Capa</P>
                    </ImageSection>
                </Container>
                <Status>
                    <P>Status</P>
                    <RadioInputsDiv>
                        <div>
                            <RadioInput type="radio" name="status" value="seen" />
                            <Label>Já Assisti</Label>
                        </div>
                        <div>
                            <RadioInput type="radio" name="status" value="not seen" />
                            <Label>Não assisti ainda</Label>
                        </div>
                    </RadioInputsDiv>
                </Status>
                <RateDiv>
                    <RateTitle>Nota</RateTitle>
                    <ReactStars {...info} />
                </RateDiv>
                <BottomButtons>
                    <CancelButton onClick={close}>Cancelar</CancelButton>
                    <ConfirmButton>Confirmar</ConfirmButton>
                </BottomButtons>
            </Div>
        )
    }
}