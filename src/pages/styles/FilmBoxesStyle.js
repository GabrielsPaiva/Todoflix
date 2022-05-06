import styled from "styled-components";
import media, {generateMedia} from "styled-media-query"


const customMedia = generateMedia({
    laptop: "1024px"
})

export const FilmDiv = styled.div`
display: flex;
flex-direction: column;
width: 360px; 
height: 350px;
margin: 0 1em 5em 0;
`
export const FilmPoster = styled.img`
border-radius: 5px;
width: 362px;
height: 207px;

${media.lessThan("huge")`
width: 270px;
height: 150px;
`}
${customMedia.lessThan("laptop")`
width: 190px;
height: 130px;
`}
`
export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin: 0.5em 0 0.5em 0;
`
export const FilmTitle = styled.h2`
font-size: 15px;
width: 100%;


${customMedia.lessThan("laptop")`
font-size: 12px;
`}
`

export const FilmRateDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100px;
height: fit-content;
`
export const FilmRate = styled.p`
font-size: 16px;
`
export const GreenThumb = styled.img`
width: 28%;
margin: 0 0 0.4em 8%;
`
export const Overview = styled.p`
height: 5.7em;
overflow-y: auto;

&::-webkit-scrollbar{
    width: 10px;
}
`