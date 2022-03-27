import React from "react";
import { ContainerBox, ContainerConteudo } from "./styles";
//import { Carousel } from 'rsuite';
import mapa from "../assets/img/Fundo.jpg";
import "../index.css";
import Lore from "./components/Lore/Lore";
//import { Link } from "react-router-dom";
//import Foot from "./components/Foot/foot";
//import { Button } from 'react-bootstrap';
//import { ImageBackground } from 'react';

const Home = () => {
  return (
    //background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit;
    <ContainerBox
      style={{
        backgroundImage: `url(${mapa})`,
        height: "600vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ zIndex: "2" }}>
        <div className="star3"></div>
        <div className="star2"></div>
        <div className="star"></div>
        <div className="star1"></div>
      </div>
      <ContainerConteudo>
        <div>
          <div style={{ flexDirection: "center", marginTop: "350px" }}>
            <iframe
              width="560"
              height="315"
              align-center="center"
              src="https://www.youtube.com/embed/0ioN_Xwap-g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Lore  style={{ flexDirection: "center", marginTop: "550px" }}/>
      </ContainerConteudo>
    </ContainerBox>
  );
};

export default Home;
