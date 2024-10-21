import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// import reportWebVitals from './reportWebVitals' ;

const rootId = document.getElementById('root')
if(rootId){
  const fontAwesome = document.createElement('link');
  fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
  fontAwesome.crossOrigin = 'anonymous';
  fontAwesome.rel="stylesheet";
  fontAwesome.integrity ="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
  document.body.appendChild(fontAwesome);
const root = ReactDOM.createRoot(rootId);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
