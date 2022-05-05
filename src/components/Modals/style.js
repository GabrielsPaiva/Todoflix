import styled from "styled-components";

export const P = styled.p`
margin-bottom: 14px;
`
export const Div = styled.div`
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
export const CloseButton = styled.p`
font-size: 40px;
margin: 0.5em 0 0 94%;
transform: rotate(45deg);
cursor: pointer;
`
export const Container = styled.div`
display: flex;
`
export const Main = styled.div`
display: flex;
flex-direction: column;
margin: 1.5em 0 0 5em;
`
export const ModalTitle = styled.h2`
font-size: 29px;
font-family: Arial, Regular;
margin-bottom: 1.5em;
`
export const InputTitle = styled.p`
    margin-bottom: 14px;
`
export const NameInput = styled.input`
background-color: #2C2C2C;
border: none;
border-radius: 5px;
width: 400px;
height: 30px;
margin-bottom: 2.5em;
outline: none;
`
export const OverviewInput = styled.textarea`
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
export const SelectImage = styled.label`
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
export const ImageSection = styled.div`
display: flex;
flex-direction: column-reverse;
width: 300px;
height: 15.2em;
margin: 6.3em 0 0 2em;
`
export const Input = styled.input`
display: none;
`
export const FilmImage = styled.img`
border: solid 1px gray;
border-radius: 4px;
width: 300px;
height: 160px;
`
export const Status = styled.div`
margin-left: 5em;
`
export const RadioInputsDiv = styled.div`
display: flex;
justify-content: space-between;
width: 120%;

div{
    display: flex;
}
`
export const RadioInput = styled.input`
    width: 30px;
    height: 24px;
`
export const Label = styled.label`
    margin-top: 0.3em
`
export const RateDiv = styled.div`
margin-left: 5em;
`
export const RateTitle = styled.h3`
margin-top: 1em;
`
export const BottomButtons = styled.div`
display: flex;
width: 210px;
height: 40px;
margin: 4em 0 0 38%;
`
export const CancelButton = styled.button` 
background: black;
border: none;
font-size: 16px;
width: 50%;
height: 100%;
cursor: pointer;
`
export const ConfirmButton = styled.button`
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