import React from "react"
import ReactStars from "react-rating-stars-component"
import selectedImage from "../../assets/display_image.png"
import * as S from "./style"


const info = {
    count: 5,
    size: 50,
    char: "☆",
};

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
            <S.Div>
                <S.CloseButton onClick={close}>+</S.CloseButton>
                <S.Container>
                    <S.Main>
                        <S.ModalTitle>Adicionar Filme</S.ModalTitle>
                        <div>
                            <S.InputTitle>nome</S.InputTitle>
                            <S.NameInput type="text" />
                        </div>
                        <div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <S.InputTitle>descrição</S.InputTitle>
                                <S.P>{`${overviewLenght}/ 200`}</S.P>
                            </div>
                            <S.OverviewInput maxLength={200} onChange={this.handleOverviewChange} />
                        </div>
                    </S.Main>
                    <S.ImageSection>
                        <S.SelectImage for="selectButton">Selecione imagem</S.SelectImage>
                        <S.Input type="file" name="myImage" accept="image/*" id="selectButton" />
                        <S.FilmImage src={selectedImage} alt="" />
                        <S.P>Imagem de Capa</S.P>
                    </S.ImageSection>
                </S.Container>
                <S.Status>
                    <S.P>Status</S.P>
                    <S.RadioInputsDiv>
                        <div>
                            <S.RadioInput type="radio" name="status" value="seen" />
                            <S.Label>Já Assisti</S.Label>
                        </div>
                        <div>
                            <S.RadioInput type="radio" name="status" value="not seen" />
                            <S.Label>Não assisti ainda</S.Label>
                        </div>
                    </S.RadioInputsDiv>
                </S.Status>
                <S.RateDiv>
                    <S.RateTitle>Nota</S.RateTitle>
                    <ReactStars {...info} />
                </S.RateDiv>
                <S.BottomButtons>
                    <S.CancelButton onClick={close}>Cancelar</S.CancelButton>
                    <S.ConfirmButton>Confirmar</S.ConfirmButton>
                </S.BottomButtons>
            </S.Div>
        )
    }
}