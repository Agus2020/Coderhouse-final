import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




//import variable from "../carpeta/archivo.js"
//import {variable} from "./archivo.js"
//import {variable} from "paquete"

import React from 'react';
//traeme todo lo que haya exportado desde el paquete "react" que esta en node_modules (porque no te especifique la direccion) y guarda ese valor en la variable llamada "React" (con mayuscula)

import ReactDOM from 'react-dom/client';
//traeme todo lo que haya exportado desde el paquete "react-dom/client" que esta en node_modules (porque no te especifique la direccion) y guarda ese valor en la variable llamada "ReactDOM" (con mayuscula)


function App(){
  return "Soy App test";
}

const elemento_del_dom = document.getElementById('root');
//elemento_del_dom.appendChild(App())

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(App()); 
root.render(<App/>); 