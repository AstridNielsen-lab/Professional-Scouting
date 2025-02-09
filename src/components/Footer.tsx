import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <span className="font-bold text-lg sm:text-xl">Julio Campos Machado</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Descobrindo e desenvolvendo talentos para a TV brasileira desde 2000.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white">Sobre</Link></li>
              <li><Link to="/cadastro" className="text-gray-400 hover:text-white">Cadastro</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">+55 11 99294-6688</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400">+55 11 97060-3441</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 break-all">juliocamposmachado@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Modelos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="https://likelook.wixsite.com/showroomfittings" className="text-gray-400 hover:text-white">Casting</Link></li>
                         </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Julio Campos Machado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
