import React from "react"
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import  FilmsLibrary from  "../../FilmsLibrary.json"
import * as S from "./style"
import Favorite from "../../assets/favorite_icon.png"
import editButton from "../../assets/edit_button.png"

const Div = styled.div`
background-color: #000;
position: fixed;
color: white;
display: flex;
flex-direction: column;
align-items: center;
width: 422px;
height: 527px;
border: solid white 1px;
border-radius: 10px;
top: 20%;
left: 40%;
z-index: 1;
`
const CloseButton = styled.p`
font-size: 40px;
margin: 0.2em 0 0 90%;
transform: rotate(45deg);
cursor: pointer;
`
const Container = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`
const Poster = styled.img`
border-radius: 5px;
`
const Status = styled.div`
background-color: #393939;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
width: 91px;
height: 26px;

p{
    text-transform: uppercase;
    font-size: 14px;
}
`
const FavoriteIcon = styled.img`
width: 6%;
margin-left: 10px;
cursor: pointer;
`
const EditButton = styled.img`
margin-left: 10px;
cursor: pointer;
`
const Title = styled.h2`
font-size: 20px;
margin-top: 10px;
`
const Overview = styled.p`
font-size: 14px;
margin-top: 10px;
height: 4.5em;
overflow-y: auto;

&::-webkit-scrollbar{
    width: 10px;
}
`
const RateDiv = styled.div`
display: flex;
align-items:
width: 100%;
height: fit-content;
margin-top: 10px;
`

export default class carouselModal extends React.Component {

    render() {
        const {close, open, poster, jaVisto, name, overview, rate} = this.props
        if (!open) return null
        return (
            <Div>
                <CloseButton onClick={close}>+</CloseButton>
                <Container>
                    <Poster src={poster} alt=""/>
                    <div style={{marginTop: "16px", display: "flex", alignItems: "center"}}>
                        <Status>
                        <p>{jaVisto}</p>
                        </Status>
                        <FavoriteIcon src={Favorite} alt=""/>
                        <EditButton src={editButton} alt=""/>
                    </div>
                    <Title>{name}</Title>
                    <Overview>{overview}</Overview>
                <RateDiv>
                    <ReactStars size={50} value={rate} edit={false}/>
                    <p style={{margin: "35px 0 0 10px"}}>{`(${rate}/5)`}</p>
                </RateDiv>
                </Container>
            </Div>
        )
    }
}