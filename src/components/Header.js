import React from "react"


// images & components
import siteLogo from "../assets/site_logo.png"
import profilePic from "../assets/profile_pic.png"
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
const Logo = styled.img`
width: 18%;
margin-left: 6%;
`
const Home = styled.p`
font-size: 20px;
font-weight: bolder;
margin-left: 5%;
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

const Container = styled.div`
display: flex;
align-items: center;
width: 50%;
height: 100%;
`
const Search = styled.input`
background-color: #2C2C2C;
border-radius: 6px;
border: none;
width: 44%;
height: 2.6em;
margin-left: 8%;

::placeholder{
    color: white;
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
                    <Logo src={siteLogo} alt="" />
                    <Home>Inicio</Home>
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
                            buttonText="Adicionar"
                        />
                        <FilmModal
                            open={this.state.addFilmIsOpen}
                            close={() => { this.setState({ addFilmIsOpen: false }) }}
                        />
                    </div>
                    <Search type='text' placeholder="            Pesquisar" />
                    <Profile src={profilePic} />
                </Container>
            </Div>
        )
    }
}