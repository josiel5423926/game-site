import React from "react";
import PropTypes from "prop-types";
export default function Teste({children, valor}) {
 
 
  return (
    <div>
   
    
     {children} {valor}
     <h1>Teste</h1>
 
    </div>
  );
}

Teste.prototype = {
  children: PropTypes.node.isRequired,
  valor: PropTypes.oneOf(["azul","vermelho"]).isRequired
};
Teste.defaultProps = {
  valor: "red",
}
