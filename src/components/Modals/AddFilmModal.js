import React from "react"
import ReactStars from "react-rating-stars-component"
import selectedImage from "../../assets/display_image.png"
import * as S from "./style"
import FilmsLibrary from "../../FilmsLibrary.json"


const info = {
    count: 5,
    size: 50,
    char: "☆",
};

export default class FilmModal extends React.Component {

    state = {
        display: "none",
        overviewLenght: 0,
        poster: "",
        name: "",
        overview: "",
        rate: 0,
        status: "",
        number: 0,
    }

    handleChange = (e) => {
        if (e >= 1) {
            this.setState({ rate: e })
        } else if (e.target.name === "name") {
            this.setState({ name: e.target.value })
        } else if (e.target.name === "overview") {
            this.setState({ overview: e.target.value })
            if (e.target.value.length > 0) {
                this.setState({
                    overviewLenght: e.target.value.length
                })
            } else {
                this.setState({
                    overviewLenght: 0
                })
            }
        } else if (e.target.name === "image") {
            this.setState({ poster: e.target.value })
        } else if (e.target.name === "status") {
            this.setState({ status: e.target.value })
        }
    }

    FilmsSubmit = () => {
        const { poster, name, overview, rate, status } = this.state
        FilmsLibrary.push({
            poster: poster,
            name: name,
            overview: overview,
            rate: rate,
            status: status,
            favorite: false,
            number: FilmsLibrary.length,
            adicionado: true
        })
        return this.cancel()
    }

    cancel = () => {
        this.setState({
            overviewLenght: 0,
            poster: "",
            name: "",
            overview: "",
            rate: null,
            status: "",
            favorite: false,
            number: null,
        })
        return this.props.close()
    }

    render() {
        const { overviewLenght } = this.state
        const { open } = this.props
        if (!open) return null
        return (
            <S.Div>
                <S.CloseButton onClick={this.cancel}>+</S.CloseButton>
                <S.Container>
                    <S.Main>
                        <S.ModalTitle>Adicionar Filme</S.ModalTitle>
                        <div>
                            <S.InputTitle>nome</S.InputTitle>
                            <S.NameInput type="text" name="name" onChange={this.handleChange} />
                        </div>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <S.InputTitle>descrição</S.InputTitle>
                                <S.P>{`${overviewLenght}/ 200`}</S.P>
                            </div>
                            <S.OverviewInput
                                maxLength={200}
                                name="overview"
                                onChange={this.handleChange}
                            />
                        </div>
                    </S.Main>
                    <S.ImageSection>
                        <input
                            type="url"
                            name="image"
                            accept="image/*"
                            id="selectButton"
                            style={{ display: this.state.display, position: "absolute", top: "32em", width: "33.5%", color: "black", outline: "none" }}
                            onChange={this.handleChange}
                        />
                        <S.SelectImage for="selectButton" onClick={() => { this.setState({ display: "inherit" }) }}>Selecione imagem</S.SelectImage>
                        <S.FilmImage src={this.state.poster === "" ? selectedImage : this.state.poster} alt="" />
                        <S.P>Imagem de Capa</S.P>
                    </S.ImageSection>
                </S.Container>
                <S.Status>
                    <S.P>Status</S.P>
                    <S.RadioInputsDiv>
                        <div>
                            <S.RadioInput type="radio" name="status" value="Já Assisti" onChange={this.handleChange} />
                            <S.Label>Já Assisti</S.Label>
                        </div>
                        <div>
                            <S.RadioInput type="radio" name="status" value="Não Assisti" onChange={this.handleChange} />
                            <S.Label>Não assisti ainda</S.Label>
                        </div>
                    </S.RadioInputsDiv>
                </S.Status>
                <S.RateDiv>
                    <S.RateTitle>Nota</S.RateTitle>
                    <ReactStars {...info} onChange={this.handleChange} />
                </S.RateDiv>
                <S.BottomButtons>
                    <S.CancelButton onClick={this.cancel}>Cancelar</S.CancelButton>
                    <S.ConfirmButton onClick={this.FilmsSubmit}>Confirmar</S.ConfirmButton>
                </S.BottomButtons>
            </S.Div>
        )
    }
}