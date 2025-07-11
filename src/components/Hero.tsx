import React from 'react';
import hero from '../assets/hero.mp4';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={hero}
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Capa oscura encima del video */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Contenido del hero */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-amber-500 to-pink-500 bg-clip-text text-transparent">
          COSMOPOLITAN
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          Donde la noche cobra vida <br /> Resto Pub • Lounge • Entretenimiento
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Descubre Más
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-amber-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Hacer Reserva
          </button>
        </div>
      </div>
    </section>
  );
}
