import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `Hola! Mi nombre es ${nombre}. Asunto: ${asunto}. Mensaje: ${mensaje}`;
    const numeroWhatsApp = '59891234567'; // Reemplaza con tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300">
            Reserva tu mesa o solicita información sobre nuestros servicios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-pink-600 to-pink-800 w-12 h-12 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400">Dirección</h3>
                <p className="text-gray-300">Av. Principal 123, Centro de la Ciudad</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 w-12 h-12 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">Teléfono</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-pink-600 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-400">Email</h3>
                <p className="text-gray-300">info@rougelounge.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-amber-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">Horarios</h3>
                <p className="text-gray-300">Miércoles a Domingo: 8:00 PM - 4:00 AM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                <input
                  type="text"
                  value={asunto}
                  onChange={(e) => setAsunto(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Reserva, evento, consulta, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Cuéntanos sobre tu reserva o consulta..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-pink-700 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
