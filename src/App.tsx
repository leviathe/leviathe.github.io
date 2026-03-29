import React from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans dot-bg">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
