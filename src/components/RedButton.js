import React from "react";
import styled from "styled-components";

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
`

export default function redButton({buttonText, click}){
    return(
        <div>
            <AddButton onClick={click}>{buttonText}</AddButton>
        </div>
    )
}