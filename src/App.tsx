import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Reservation />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;