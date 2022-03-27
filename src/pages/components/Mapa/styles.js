import styled from "styled-components";
import { motion } from "framer-motion/dist/es/index";
//aqui pode tá usando mais pra frente esse scrooll 
//https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

export const Container = styled.button`
  width: 90vw;
  height: 90vh;
  justify-content: center;
  margin-left: 60px;
  //overflow: " hidden";
  display: block;
  

`;

export const Canvas = styled(motion.div)`
  display: flex;
  justify-content: center;
  //flex-wrap: wrap;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 0px;
  height: 100%;
  background-repeat: no-repeat;
 // overflow-y: scroll;
  //scroll-behavior: smooth;
  //width: 98vw;
  //background-size: cover;
 


  /*    .maxWidth { 
      // background: url("/assets/img/logo.png"); 
       //background-image: url("/assets/img/logo.png") 
      background-size: cover; 
     background-repeat: no-repeat; 
  
      width: 100%; 
       height: 80vh; 
       margin: 0 auto; 
       padding-bottom: 20px; 
       background-color: blue; 
     } 
  
   @media (min-width: 1024px) {
    padding: 35px;
    //height: 70vh ;
    width:100vh ;
  }  */

  .btnWrap{
    position:relative;
    text-align:center;
}
.btnWrap button{
    position:absolute;
    z-index:1;
    top:0%;
    left:-160%;
    width:80px;
    height:30px;
    padding:50px;
    margin:-15px 0 0 500px;
    border:0 none;
    color: green;
}

`;


export const Button = styled.button`
position: absolute;
   color: blue;
  font-size: 1em;
  left: 550px;
  top: 350px;
  margin: 1em;
  padding: 0.2em 0.2em;
  border: 2px solid gray;
  border-radius: 5px;
  .styleButtonContact {
    border-radius: 5px;
    border: 2px solid gray;

   }

`;
