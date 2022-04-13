import React from "react"

// images
import siteLogo from "../assets/site_logo.png"
import profilePic from "../assets/profile_pic.png"

// styles
import styled from "styled-components"


const Div = styled.div`
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
height: 6em;
`
const Logo = styled.img`
width: 18%;
margin-left: 6%;
`
const Home = styled.p`
font-size: 20px;
font-weight: bolder;
margin-left: 5%;
`
const Category = styled.p`
font-size: 20px;
font-weight: 400;
margin-left: 3%;
`
const Container = styled.div`
display: flex;
align-items: center;
width: 50%;
height: 100%;
`
const AddButton = styled.button`
background: #E71B27;
border-radius: 6px;
border: none;
width: 13%;
height: 2.6em;
margin-left: 10em;
cursor: pointer;

&:hover{
    border: solid 1px white;
}
`
const Search = styled.input`
background-color: #2C2C2C;
border-radius: 6px;
border: none;
width: 44%;
height: 2.4em;
margin-left: 1.6%;

::placeholder{
    color: white;
    font-weight: lighter;
}
`
const Profile = styled.img`
margin-left: 5%;
`

export default function Header(){
    return(
        <Div>
            <Container>
            <Logo src={siteLogo} alt=""/>
            <Home>Inicio</Home>
            <Category>Categorias</Category>
            </Container>
            
            <Container>
                <AddButton>Adicionar filme</AddButton>
                <Search type='text' placeholder="            Pesquisar"/>
                <Profile src={profilePic}/>
            </Container>
        </Div>
    )
}