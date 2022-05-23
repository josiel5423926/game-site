import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
//import { Carousel } from 'rsuite';
import {Carousel} from "react-bootstrap"

// or




export default function Lore(){

    return(
       <StyleNav>
          <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Personagens </h3>
      <p>Descrição de alguns Personagens.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Personagens </h3>
      <p>Descrição de alguns Personagens.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/10010697/pexels-photo-10010697.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Personagens </h3>
      <p>Descrição de alguns Personagens.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </StyleNav>
    )
}

const StyleNav = styled.div`

width: 50vw;
height: 100vh;
margin-top: 150px;
background-color: transparent;
margin: 0;
padding: 0;
display: flex;
//flex-direction: column;
align-items: center;
z-index: 3;

   
`; 

