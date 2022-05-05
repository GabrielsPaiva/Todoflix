import React from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    laptop: "1024px"
})

const AddButton = styled.button`
background: #E71B27;
border-radius: 6px;
border: none;
width: 50%;
height: 2.6em;
margin: 0 1.5em 0 10em;
cursor: pointer;

&:hover{
    border: solid 1px white;
}:active{
    border: none;
}

    ${customMedia.lessThan("laptop")`
        width: 65%;
        margin: 0 0.9em 0 5em;
    `}
`

export default function redButton({buttonText, click}){
    return(
        <div>
            <AddButton onClick={click}>{buttonText}</AddButton>
        </div>
    )
}