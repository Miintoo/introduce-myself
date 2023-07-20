import React, { useRef } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSkillClick = () => {
    skillRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <Header
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onSkillClick={handleSkillClick}
        onContactClick={handleContactClick}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
