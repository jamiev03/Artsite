import React from 'react';
import './App.css';
import { Navbar, Feature, Feature2, About, Footer, HeaderText, Process, Works } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar/>
      </div>
      <div className="body">
        <Feature/>
        <About/>
        <Feature2/>
        <Process/>
        <Works/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
      
    </div>
  )
}

export default App

