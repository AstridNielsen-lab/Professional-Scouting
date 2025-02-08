import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-xl text-gray-900">Julio Campos Machado</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;