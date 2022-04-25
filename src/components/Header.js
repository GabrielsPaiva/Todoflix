import React from "react"


import {
    Link
} from "react-router-dom"

// images & components
import siteLogo from "../assets/site_logo.png"
import profilePic from "../assets/profile_pic.png"
import lupa from "../assets/pesquisa_lupa.png"
import Modal from './CategoryModal'
import FilmModal from "./AddFilmModal"
import AddButton from "./RedButton"

// styles
import styled from "styled-components"


const Div = styled.div`
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
height: 6em;
`
const Container = styled.div`
display: flex;
align-items: center;
width: 50%;
height: 100%;

.logoLink{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    margin-left: 5%;
}
.homeLink{
    margin-left: 5%;
    text-decoration: none;
}
.searchLink{
    width: 44%;
    height: 2.3em;
    margin-left: 8%;
}
`
const Logo = styled.img`
width: 100%;
`
const Home = styled.p`
font-size: 22px;
font-weight: bolder;
`
const CategoryModal = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
width: 8em;
margin-left: 3%;
top: 2.4em;
left: 16%;
`
const Category = styled.details`
font-size: 20px;
font-weight: 400;
margin-left: 3%;
`

const Search = styled.input`
background-color: #2C2C2C;
font-size: 20px;
border-radius: 6px;
border: none;
width: 100%;
height: 100%;

::placeholder{
    color: white;
    font-size: 15px;
    font-weight: lighter;
}
`
const Profile = styled.img`
margin-left: 5%;
`


export default class Header extends React.Component {

    state = {
        categoryIsOpen: false,
        addFilmIsOpen: false
    }

    render() {
        return (
            <Div>
                <Container>
                    <Link to="/" className="logoLink"> <Logo src={siteLogo} alt="" /> </Link>
                    <Link to="/" className="homeLink"> <Home>Inicio</Home></Link>
                    <CategoryModal
                        onMouseEnter={() => { this.setState({ categoryIsOpen: true }) }}
                        onMouseLeave={() => { this.setState({ categoryIsOpen: false }) }}
                    >
                        <Category>
                            <summary>Categorias</summary>
                        </Category>
                        <Modal open={this.state.categoryIsOpen} />
                    </CategoryModal>
                </Container>

                <Container>
                    <div>
                        <AddButton
                            click={() => { this.setState({ addFilmIsOpen: true }) }}
                            buttonText="Adicionar filme"
                        />
                        <FilmModal
                            open={this.state.addFilmIsOpen}
                            close={() => { this.setState({ addFilmIsOpen: false }) }}
                        />
                    </div>
                    <Link to="search" className="searchLink"><Search type='text' placeholder="                Pesquisa"/></Link>
                    <Profile src={profilePic} />
                </Container>

            </Div>
        )
    }
}