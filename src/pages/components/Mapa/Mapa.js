import React from "react";
import { Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Canvas, Button,Container } from "../Mapa/styles";
import { /* pageAnimation, */ scrollReveal } from "../AnimacaoMapa/animation";
import mapa from "../../../assets/img/mapa.png";
//import styled from "styled-components";
//import { motion } from "framer-motion";
//import {motion} from "framer-motion"
//import { useState } from "react";
import { useScroll } from "../../../hooks/useScroll";
//import { Button } from 'react-bootstrap';
//import Button from "rsuite/Button";

export default function Mapa() {
  const [element, controls] = useScroll();
  /*  const boxMouseOverHandler = () => {
    alert("Navegue até há cidade usando o zoom");
  };
 */

  //é preciso isntalar um cara chamado framer-motion para fazer animações
  // também é intalado o yarn add react-intersection-observer    ele observa se um ítem está na tela ou não

  return (
    <Container>
      <Canvas /* onMouseOver={boxMouseOverHandler}  */
        /*  initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnimation}> */
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
        >
          <TransformComponent>
            {/*     <Button class="float-left" variant="primary">  <Link to={"/"}>Midgard</Link></Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
<Button variant="warning">Warning</Button>{' '} */}
            <Button>
              <button className="styleButtonContact">
                <Link to={"/jogo"}>Midgard</Link>
              </button>
            </Button>

            <img src={mapa} alt="mapa" /* className="maxWidth" */></img>
          </TransformComponent>
        </TransformWrapper>
      </Canvas>
    </Container>
  );
}
