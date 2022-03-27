import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
//import mapa from "../src/img/fundo13.jpeg";



export default function Team(){
    const menuOptions = {
        about: '<Allan  />',
        contact: '<Gil />',
        portifolio: '<Josiel />'
    }

    return(
        <StyleNav
        /*       style={{
        backgroundImage: `url(${mapa})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat" ,
      
        
    }} */>
       
            <h1>Vamos ficar bilionários</h1>
            <ul>
                <li>{menuOptions.about}</li>
                <li>{menuOptions.portifolio}</li>
                <li>{menuOptions.contact}</li>
                <div /* style={{zIndex: 1, justifyItems: "center", position: "relative", overflow:"hidden"}} */
            >
            </div>
          

            </ul>
             <div style={{flexDirection:"center", marginTop:"150px"}}>
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
        </StyleNav>
    )
}

const StyleNav = styled.div`

width: 90%;
height: 100vh;
background-color: transparent;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 3;
margin-top: 300px;
font-size: 40px;


   
`;