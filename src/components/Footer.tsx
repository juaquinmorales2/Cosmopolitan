import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">
  <span className="text-white">C</span>
  <span className="text-red-600">O</span>
  <span className="text-white">S</span>
  <span className="text-red-600">M</span>
  <span className="text-white">O</span>
  <span className="text-pink-400">P</span>
  <span className="text-white">O</span>
  <span className="text-pink-400">L</span>
  <span className="text-pink-400">I</span>
  <span className="text-white">T</span>
  <span className="text-white">A</span>
  <span className="text-white">N</span>
</div>

          <p className="text-gray-400 mb-6">
            Donde cada noche es una experiencia única
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61553545862212" className="text-gray-400 hover:text-blue-400 transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/cosmopolitan_uy/?__pwa=1" className="text-gray-400 hover:text-pink-400 transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/59893347979" className="text-gray-400 hover:text-green-400 transition-colors">
              Whatsapp
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Vos Marketing. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}