import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as bootstrap from 'bootstrap';
import {BrowserRouter}from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
 import 'rsuite/dist/rsuite.min.css';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



