import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <span className="font-bold text-lg sm:text-xl text-gray-900">Julio Campos Machado</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-gray-900">Sobre</Link>
            <Link to="/cadastro" className="text-gray-700 hover:text-gray-900">Cadastro</Link>
            <Link to="/contato" className="text-gray-700 hover:text-gray-900">Contato</Link>
            <Link
              to="/cadastro"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Cadastre-se Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/cadastro"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastro
            </Link>
            <Link
              to="/contato"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/cadastro"
              className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-white hover:bg-yellow-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastre-se Agora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;