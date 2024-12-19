import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />

        {/* Hero Section - Wrapped in Element with name "home" */}
        <Element name="home">
          <HeroSection />
        </Element>

        {/* Other sections */}
        <Element name="about">
          <AboutSection />
        </Element>
        <Element name="projects">
          <ProjectsSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
      </div>
    </Router>
  );
}

export default App;
