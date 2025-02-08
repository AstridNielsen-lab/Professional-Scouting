import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Camera, Link as LinkIcon, Send } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 16, {
    message: 'Idade deve ser maior que 16 anos',
  }),
  email: z.string().email('Email inválido'),
  phone: z.string().min(11, 'Telefone inválido'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().length(2, 'Estado inválido'),
  area: z.string().min(1, 'Área de interesse é obrigatória'),
  socialMedia: z.string().url('URL inválida'),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here we would handle the form submission
  };

  const areas = [
    'Ator/Atriz',
    'Modelo',
    'Apresentador(a)',
    'Cantor(a)',
    'Influenciador(a)',
    'Outro',
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Cadastro de Talentos</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                {...register('fullName')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Seu nome completo"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Idade
              </label>
              <input
                type="number"
                {...register('age')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Sua idade"
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </span>
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </span>
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="(11) 99999-9999"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Cidade
                  </span>
                </label>
                <input
                  type="text"
                  {...register('city')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Sua cidade"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <input
                  type="text"
                  {...register('state')}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="SP"
                  maxLength={2}
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Área de Interesse
                </span>
              </label>
              <select
                {...register('area')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="">Selecione uma área</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors.area && (
                <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Link para Redes Sociais ou Portfólio
                </span>
               </label>
              <input
                type="url"
                {...register('socialMedia')}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="https://instagram.com/seu.perfil"
              />
              {errors.socialMedia && (
                <p className="mt-1 text-sm text-red-600">{errors.socialMedia.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fale sobre você
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Conte-nos sobre sua experiência e objetivos..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-yellow-500 text-white px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors"
              >
                <Send className="w-5 h-5" />
                Enviar Cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;