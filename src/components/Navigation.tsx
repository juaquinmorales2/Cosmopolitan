import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/cosmopo.png';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:mt-2 mt-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 md:ml-8 bg-clip-text text-transparent">
            <img src= {logo} alt="Cosmopolitan" className='h-12' />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 md:mr-8">
            <button onClick={() => handleNavClick('home')} className="hover:text-pink-400 transition-colors">
              Inicio
            </button>
            <button onClick={() => handleNavClick('about')} className="hover:text-pink-400 transition-colors">
              Nosotros
            </button>
            <button onClick={() => handleNavClick('gallery')} className="hover:text-pink-400 transition-colors">
              Galería
            </button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-pink-400 transition-colors">
              Contacto
            </button>
            <button onClick={() => handleNavClick('reservation')} className="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-2 rounded-full hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105">
              Reservar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('home')} className="text-left hover:text-pink-400 transition-colors">
                Inicio
              </button>
              <button onClick={() => handleNavClick('about')} className="text-left hover:text-pink-400 transition-colors">
                Nosotros
              </button>
              <button onClick={() => handleNavClick('services')} className="text-left hover:text-pink-400 transition-colors">
                Servicios
              </button>
              <button onClick={() => handleNavClick('gallery')} className="text-left hover:text-pink-400 transition-colors">
                Galería
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-left hover:text-pink-400 transition-colors">
                Contacto
              </button>
              <button className="bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-2 rounded-full hover:from-pink-700 hover:to-pink-800 transition-all duration-300 text-center">
                Reservar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}