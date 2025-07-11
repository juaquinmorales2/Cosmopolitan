import React from 'react';
import { Utensils, Music, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            Experiencia Única
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Rouge Lounge es más que un lugar, es una experiencia. Combinamos la elegancia de un lounge sofisticado 
            con la energía vibrante de un club nocturno y la calidad gastronómica de un resto pub de primer nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-pink-600 to-pink-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Utensils size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Gastronomía</h3>
            <p className="text-gray-300 leading-relaxed">
              Menú exclusivo con platos gourmet y cócteles artesanales preparados por nuestro chef especializado.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Music size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Entretenimiento</h3>
            <p className="text-gray-300 leading-relaxed">
              Shows en vivo, DJ's internacionales y entretenimiento de primera clase todas las noches.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-pink-600 to-amber-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Ambiente VIP</h3>
            <p className="text-gray-300 leading-relaxed">
              Espacios privados, servicio exclusivo y una atmósfera única para momentos especiales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}