import React from "react";
import styled from 'styled-components';
const StyledDiv = styled.div`
border:1px dotted steelblue;
width: 500px;
margin 0 auto;
background-color:white;
`
const StyledImg= styled.img`
margin-left: 100px;
margin-right: 100px`

const StyledP = styled.p`
margin-left: 200px;
margin-right: 200px;
color: steelblue;
 `

export default function CharacterCard(props) {
  return <StyledDiv>
    <StyledP>{props.name}</StyledP>
    <StyledImg src={props.image}></StyledImg>
    
    </StyledDiv>;
}
