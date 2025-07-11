import React, { useState, FormEvent } from 'react';
import Local from '../assets/a-23-1600x1200_16_2135.jpeg';

interface ReservationData {
  name: string;
  date: string;
  time: string;
  guests: number;
  message: string;
}

export default function ReservationForm() {
  const [form, setForm] = useState<ReservationData>({
    name: '',
    date: '',
    time: '',
    guests: 1,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = '59896303338';
    const text = `*Reserva de Mesa*%0A
*Nombre:* ${encodeURIComponent(form.name)}%0A
*Fecha:* ${encodeURIComponent(form.date)}%0A
*Hora:* ${encodeURIComponent(form.time)}%0A
*Personas:* ${form.guests}%0A
*Comentarios:* ${encodeURIComponent(form.message)}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-black/70 py-12 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 px-4">
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl flex-1 space-y-6"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Reserva Tu Mesa
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 font-semibold mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="date" className="text-gray-300 font-semibold mb-1">
                Fecha
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="text-gray-300 font-semibold mb-1">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="text-gray-300 font-semibold mb-1">
              Cantidad de Personas
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min={1}
              value={form.guests}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 font-semibold mb-1">
              Comentarios Adicionales
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Enviar Reserva
            </button>
          </div>
        </form>

        {/* Mapa y foto del local */}
        <div className="flex-1 flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            ¿Dónde nos ubicamos?
          </h2>
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Maldonado%20Uruguay&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* Imagen del local */}
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <img
              src={Local}
              alt="Foto del Local"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
