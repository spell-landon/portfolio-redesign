import React from 'react';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
