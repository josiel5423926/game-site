import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import styled from "styled-components";
//import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
//import { Link } from "react-router-dom";


export default function NavBar() {
  const menuOptions = {
    Lore: '< Lore/>',
    marketiplace: '< Marketiplace />',
    Team: '< Team />',
    WorkWithus: '< WorkWithus />',
    whitepaper: '< whitepaper />',
  /*   mapa: '<Mapa />', */
}

return(
    <div className="p-3 mb-2 bg-primary text-white">
        <Nav className="justify-content-center xs={12} text-white " activeKey="/">
            <Nav.Item >
            {/* <li><Link to={"/"}>{menuOptions.about}</Link></li> */}
                <Nav.Link className="justify-content-center xs={12} text-white " href="/">{menuOptions.Lore}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justify-content-center xs={12} text-white " href="/marketiplace">{menuOptions.marketiplace}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justify-content-center xs={12} text-white " href="/team">{menuOptions.Team}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justify-content-center xs={12} text-white " href="/workWithus">{menuOptions.WorkWithus}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justify-content-center xs={12} text-white " href="/whitepaper">{menuOptions.whitepaper}</Nav.Link>
            </Nav.Item>
        </Nav>
        <p className="text-center text-white  p-0"><Nav.Link className="justify-content-center xs={12} text-white " href="/mapa">PLay Now</Nav.Link></p>
       
    </div>
  );
}
/* 
const StyleNav = styled.nav`
    flex-direction: column;
  display: flex;
  width: 100%;
  height: 15vh;
 
   min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background: blue;
  position: fixed; 
  top: 0;
  z-index: 10;

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
    margin-bottom: 1px;
    margin-right: 130px;
  }
`;
 */