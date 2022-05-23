import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";

export default function Foot() {
  const menuOptions = {
    Lore: "Unity",
    Market: "Binance",
    Team: "Metamask",
    Work: "Team ",
    white: "PooCoin",
  };

  return (
    <StyleNav>
      <ul>
        <li>{menuOptions.Lore}</li>
        <li>{menuOptions.Market}</li>
        <li>{menuOptions.Team}</li>
        <li>{menuOptions.Work}</li>
        <li>{menuOptions.white}</li>
      </ul>
      <h1>Privacidade </h1>
      <h3>algumas coisas</h3>
    </StyleNav>
  );
}

const StyleNav = styled.nav`
    flex-direction: column;
  display: flex;
  width: 100%;
  height: 30vh;
 
   min-height: 10vh;
  //justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background: white;
 // position: fixed; //Menu stay fixed with the page, without following the scrollbar
 //margin-bottom: 1500px;
  z-index: 1;

  ul {
    display: flex;
    list-style: none;

  }
  li {
    padding-left: 5rem;
  }
  a {
    color: #072103;
    text-decoration: none;
  }
  h1{
    justify-content: center;
    align-items: center;
    padding: 1px;
    //margin-bottom: 1px;
    margin-right: 130px;
  }
`;
