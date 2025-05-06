import LoanForm from './components/LoadForm';
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import ExchangeRates from './components/ExchangeRates';



function App() {

  return (
    <>
      <Navbar />
      {/* <LoanForm /> */}
      <ExchangeRates />
    </>
  );
}

export default App;
