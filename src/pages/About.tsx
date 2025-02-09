import React from 'react';
import { Award, Star, Tv, Users } from 'lucide-react';

const About = () => {
  const testimonials = [
    {
      name: 'Ana Clara Souza',
      role: 'Atriz',
      quote: "O Julio foi fundamental para minha carreira. Sua experiência e dedicação abriram portas que eu jamais imaginei possíveis.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    {
      name: 'Carlos Lima',
      role: 'Ator',
      quote: "Graças ao Julio, consegui meu primeiro papel em uma novela da Globo. Sua orientação foi essencial para eu me destacar nas audições.",
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80',
    },
    {
      name: 'Rafael Mendes',
      role: 'Ator',
      quote: "Sempre sonhei em ser ator, e o Julio foi fundamental para eu conseguir meu primeiro trabalho na Record. Sou muito grato por toda a ajuda!",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre Julio Campos Machado
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Com mais de duas décadas de experiência, Julio Campos Machado é reconhecido como um dos principais scouters de talentos do Brasil, trabalhando diretamente com as maiores emissoras de TV do país.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Equipe de produção"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Experiência Comprovada</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Tv className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Grandes Emissoras</h3>
                    <p className="text-gray-600">Parceria direta com Globo, SBT, Record e outras emissoras líderes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Talentos de Sucesso</h3>
                    <p className="text-gray-600">Centenas de talentos descobertos e desenvolvidos ao longo dos anos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Reconhecimento</h3>
                    <p className="text-gray-600">Referência no mercado de entretenimento e publicidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div>Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div>Talentos Descobertos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Parcerias com Emissoras</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div>Projetos Realizados</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
