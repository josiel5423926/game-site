import React from 'react';
import './App.css';
//import Home from './pages/Home';
import NavBar from './pages/components/NavBar/NavBar';
import { Route, Routes } from "react-router-dom";
import Foot from './pages/components/Foot/foot';
import Mapa from './pages/components/Mapa/Mapa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Jogo from './pages/components/Jogo/Jogo';
import Jogo2 from "./pages/components/Jogo/Jogo2"


function App() {
  return (
    <div /* style={{width:"100%", height:"1000px", margin: 0, padding: 0}} */>
      <NavBar /* style={{position: "fixed"}}  *//>
     
   
     


     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mapa" element={<Mapa />} />
        <Route exact path="/foot" element={<Foot />} />
         <Route exact path="/jogo" element={<Jogo />} /> 
         <Route exact path="/jogo2" element={<Jogo2 />} /> 
       
        {/* <Route  path="/portfolio/:id" element={<PortfolioDatail />} /> */}
      </Routes>
     <Foot /> 
    </div>
  );
}

export default App;
