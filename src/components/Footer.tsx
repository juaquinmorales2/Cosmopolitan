import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent mb-4">
            ROUGE LOUNGE
          </div>
          <p className="text-gray-400 mb-6">
            Donde cada noche es una experiencia única
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Rouge Lounge. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}