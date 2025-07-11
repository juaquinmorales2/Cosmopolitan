import React from 'react';
import { Image } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Ambiente Principal',
      category: 'Lounge'
    },
    {
      url: 'https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Bar Premium',
      category: 'Bar'
    },
    {
      url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Área VIP',
      category: 'VIP'
    },
    {
      url: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Pista de Baile',
      category: 'Dance Floor'
    },
    {
      url: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Resto Pub',
      category: 'Restaurant'
    },
    {
      url: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Shows en Vivo',
      category: 'Entertainment'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            Galería
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre los diferentes ambientes y espacios que hacen de Cosmopolitan una experiencia única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-12 bg-gray-800">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Image size={16} className="text-amber-400 mr-2" />
                    <span className="text-amber-400 text-sm font-medium">{image.category}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}