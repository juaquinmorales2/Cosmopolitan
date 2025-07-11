import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Resto Pub",
      description: "Comida gourmet con el ambiente relajado de un pub inglés tradicional.",
      gradient: "from-pink-600 to-pink-800"
    },
    {
      title: "Lounge VIP",
      description: "Área exclusiva con servicio premium y ambiente sofisticado.",
      gradient: "from-amber-600 to-amber-800"
    },
    {
      title: "Shows en Vivo",
      description: "Entretenimiento de calidad internacional todas las noches.",
      gradient: "from-pink-600 to-amber-600"
    },
    {
      title: "Eventos Privados",
      description: "Organizamos tu evento especial con servicio personalizado.",
      gradient: "from-amber-600 to-pink-600"
    },
    {
      title: "Cócteles Artesanales",
      description: "Bebidas únicas creadas por nuestros mixólogos expertos.",
      gradient: "from-pink-800 to-amber-800"
    },
    {
      title: "Música en Vivo",
      description: "DJ's y artistas que crean la atmósfera perfecta.",
      gradient: "from-amber-800 to-pink-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${service.gradient} p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}