import React from "react";
import styled from 'styled-components';
const StyledImg =styled.img`
margin-left: 230px;
border-radius: 50%;
border 3px solid black; `
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
