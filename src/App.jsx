import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
    </>
  );
}

export default App;
