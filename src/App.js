import React, { Component } from 'react';
import logo from './logo.svg';
import Decrement from "./Decrement";
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Decrement start={5} />
        <Decrement start={15} />
        <Decrement start={50} />
      </header>
    </div>
    </>
  );
}

export default App;
