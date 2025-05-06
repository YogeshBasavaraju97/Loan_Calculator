import LoanForm from './components/LoanForm';
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import ExchangeRates from './components/ExchangeRates';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body';




function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<LoanForm />} />
            <Route path='exchange-rates' element={<ExchangeRates />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path="/*" element={<ErrorPage />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
