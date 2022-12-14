import React from "react";
import ReactDOM from "react-dom";
import ".//index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Landingpage,
  Navigation,
  Footer,
  } from ".//components";


  ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        Test2
      </Routes>
      <Footer />
    </Router>,

    document.getElementById("root")
  );







/*


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
*/