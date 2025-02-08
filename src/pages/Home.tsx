import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Tv, Camera, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80"
            alt="Studio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Julio Campos Machado
          </h1>
          <p className="text-2xl text-white mb-8">
            Descobrindo Novos Talentos para a TV
          </p>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl">
            Com mais de 20 anos de experiência, trabalhando com as principais emissoras do Brasil:
            Globo, SBT, Record e muito mais.
          </p>
          <Link
            to="/cadastro"
            className="bg-yellow-500 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-yellow-600 transition-colors"
          >
            Cadastre-se Agora
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Por que se cadastrar?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Tv className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grandes Emissoras</h3>
              <p className="text-gray-600">
                Oportunidades diretas com as principais emissoras de TV do Brasil
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Camera className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Publicidade</h3>
              <p className="text-gray-600">
                Trabalhe com as maiores agências de publicidade do mercado
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">
                Conecte-se com profissionais e expanda suas oportunidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Histórias de Sucesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1507003211169-0a1dd7228f2d' : i === 2 ? '1494790108377-be9c29b29330' : '1539571696357-5a69c17a67c6'}?auto=format&fit=crop&q=80`}
                  alt={`Talento ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Graças ao Julio Campos Machado, realizei meu sonho de trabalhar na TV. Sua orientação e oportunidades foram fundamentais para minha carreira."
                  </p>
                  <p className="font-semibold">- Talento Descoberto {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Seu talento pode estar na próxima grande produção!
          </h2>
          <Link
            to="/cadastro"
            className="inline-block bg-white text-yellow-500 px-8 py-4 rounded-md text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Cadastre-se Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;