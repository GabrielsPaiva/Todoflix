import styled from "styled-components";
import media, {generateMedia} from "styled-media-query";

const customMedia = generateMedia({
    laptop: "1024px"
})

export const LastFilmDiv = styled.div`
width: 64%;
height: 300px;
margin: 5em 0 0 3%;

${media.lessThan("huge")`
width: 75%;
`}
${customMedia.lessThan("laptop")`
width: 90%;
`}
`

export const LastFilmBox = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 300px;
`

export const Poster = styled.img`
border-radius: 5px;
height: 100%;
padding-right: 2.5em;
`
export const AboutLastFilmDiv = styled.div`
width: 50%;
`
export const Favorite = styled.img`
width: 5%;
margin-bottom: 0.5em;
cursor: pointer;
`
export const P = styled.p`
font-size: 24px;
font-weight: bolder;
margin-bottom: 0.5em;
`
export const FilmsTitle = styled.h2`
font-size: 30px;
font-weight: 700;
margin-bottom: 0.5em;

${customMedia.lessThan("laptop")`
font-size: 25px;
`}
`
export const Overview = styled.p`
font-size: 20px;
margin-bottom: 0.5em;

${media.lessThan("huge")`
font-size: 18px;
`}
${customMedia.lessThan("laptop")`
font-size: 16.6px;
`}
`
export const LastFilmRateDiv = styled.div`
display: flex;
align-items: center;
width: 000px;
height: fit-content;
`
export const LastFilmRate = styled.p`
font-size: 20px;
`
export const GreenThumb = styled.img`
background: blue;
width: 10%;
margin: 0 0 0.4em 8%;
`