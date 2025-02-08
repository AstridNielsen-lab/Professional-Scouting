import React from 'react';
import { Search, Filter, User } from 'lucide-react';

const Admin = () => {
  // This is a mock data array. In a real application, this would come from your backend
  const mockTalents = [
    {
      id: 1,
      name: 'Ana Silva',
      age: 24,
      city: 'São Paulo',
      area: 'Atriz',
      status: 'Pendente',
    },
    {
      id: 2,
      name: 'Carlos Santos',
      age: 28,
      city: 'Rio de Janeiro',
      area: 'Modelo',
      status: 'Aprovado',
    },
    {
      id: 3,
      name: 'Marina Costa',
      age: 22,
      city: 'Curitiba',
      area: 'Apresentadora',
      status: 'Em Análise',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar talentos..."
                  className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                Filtros
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
              <option value="">Área de Interesse</option>
              <option value="ator">Ator/Atriz</option>
              <option value="modelo">Modelo</option>
              <option value="apresentador">Apresentador(a)</option>
            </select>
            
            <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
              <option value="">Status</option>
              <option value="pendente">Pendente</option>
              <option value="aprovado">Aprovado</option>
              <option value="analise">Em Análise</option>
            </select>
            
            <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
              <option value="">Cidade</option>
              <option value="sao-paulo">São Paulo</option>
              <option value="rio">Rio de Janeiro</option>
              <option value="curitiba">Curitiba</option>
            </select>
            
            <select className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
              <option value="">Faixa Etária</option>
              <option value="18-25">18-25 anos</option>
              <option value="26-35">26-35 anos</option>
              <option value="36+">36+ anos</option>
            </select>
          </div>

          {/* Talents Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Idade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cidade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Área
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockTalents.map((talent) => (
                  <tr key={talent.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="w-8 h-8 bg-gray-100 rounded-full p-1 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{talent.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {talent.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {talent.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {talent.area}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        talent.status === 'Aprovado'
                          ? 'bg-green-100 text-green-800'
                          : talent.status === 'Pendente'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {talent.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-yellow-600 hover:text-yellow-900 mr-4">
                        Visualizar
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-900">
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
            <div className="flex justify-between flex-1 sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Anterior
              </button>
              <button className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Próxima
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Mostrando <span className="font-medium">1</span> até{' '}
                  <span className="font-medium">3</span> de{' '}
                  <span className="font-medium">12</span> resultados
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Anterior</span>
                    &larr;
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Próxima</span>
                    &rarr;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;