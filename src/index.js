import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/all_beers' element={<AllBeers/>}/>
        <Route path='all_beers/:beerId' element={<BeerDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
