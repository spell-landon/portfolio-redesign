import React from 'react';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Other from './components/Other/Other';
// Scroll
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Element id='navigation' name='navigation'>
        <Navigation />
      </Element>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Other />
    </>
  );
}

export default App;
