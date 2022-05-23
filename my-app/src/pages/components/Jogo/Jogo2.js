import React from "react";
//import { Link } from "react-router-dom";
import {
  ContainerConteudo,
  ContainerGame,
  Aviao1,
  Aviao2,
  Chegada1,
  Chegada2,
} from "./styles";
import FundoCeu from "../../../assets/img/FundoCeu.jpg";
import { FaPlane, FaFlagCheckered } from "react-icons/fa";
//import "./style.css";
//import Teste from "./Teste";
import Button from "rsuite/Button";

export default function Jogo() {

  function ReloaTest() {
    document.location.reload(true);
  }
  setTimeout(function() {
    return alert("Parabéns você ganhou !!!");
  }, 5100);

  /*   function adicionarCor() {
   
   
    return(
      <>
      <Aviao1 style={{ color: "red" }}>
        <FaPlane className="mov" />
      </Aviao1>

      <Aviao2 style={{ color: "green" }}>
        <FaPlane className="mov" />
      </Aviao2>

      <Chegada1 className="chegada1" style={{ color: "red" }}>
        <FaFlagCheckered />
      </Chegada1>
      <Chegada2 className="chegada2">
        <FaFlagCheckered style={{ color: "green" }} />
      </Chegada2>
    </> 
    )
    
  }

 */
  return (
    <ContainerConteudo>
      <ContainerGame
        style={{
          backgroundImage: `url(${FundoCeu})`,
          width: "80%",
          height: "80%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <Aviao1 style={{ color: "red" }}>
            <FaPlane className="mov" />
          </Aviao1>

          <Aviao2 style={{ color: "green" }}>
            <FaPlane className="mov" />
          </Aviao2>

          <Chegada1 className="chegada1" style={{ color: "red" }}>
            <FaFlagCheckered />
          </Chegada1>
          <Chegada2 className="chegada2">
            <FaFlagCheckered style={{ color: "green" }} />
          </Chegada2>
        </div>

        <Button
          style={{
            marginTop: "290px",
            width: "60px",
            height: "40px",
            marginLeft: "200px",
            color: "black",
            backgroundColor: "yellow",
          }}
          onClick={ReloaTest}
        >
          Start
        </Button>

        <Button
          style={{
            marginTop: "290px",
            width: "160px",
            height: "40px",
            marginLeft: "220px",
            color: "black",
            backgroundColor: "pink",
          }}
        
        >
         Receber seu prêmio!
        </Button>

        {/*  {valor === "azul" ? (
        <>
         <div>
        <Aviao1 style={{ color: "red" }} >
          <FaPlane   />
        </Aviao1>
        
         <Aviao2    style={{ color: "green" }}>
          <FaPlane  />
        </Aviao2> 

        <Chegada1 className="chegada1" style={{ color: "red" }}>
          <FaFlagCheckered />
        </Chegada1>
        <Chegada2 className="chegada2">
          <FaFlagCheckered style={{ color: "green" }} />
        </Chegada2>
        </div>
        <Teste valor="pink"  />
       <Button onClick={adicionarCor} style={{marginTop:"220px", width:"80px", marginLeft:"400px", color:"black", backgroundColor:"yellow" }} >Start</Button>

        </>

      ): (
        <>
         <div>
        <Aviao1 style={{ color: "red" }} >
          <FaPlane  className="mov" />
        </Aviao1>
        
         <Aviao2    style={{ color: "green" }}>
          <FaPlane className="mov" />
        </Aviao2> 

        <Chegada1 className="chegada1" style={{ color: "red" }}>
          <FaFlagCheckered />
        </Chegada1>
        <Chegada2 className="chegada2">
          <FaFlagCheckered style={{ color: "green" }} />
        </Chegada2>
        </div>
        <Teste valor="azul" />

       

        </>
      )}
        */}
      </ContainerGame>
    </ContainerConteudo>
  );
}
