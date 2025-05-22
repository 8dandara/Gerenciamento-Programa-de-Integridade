import React from 'react';

export default function Relatorios() {
  const dados = [
    { id: 1, nome: 'Pilar', descricao: 'x' },
    { id: 2, nome: 'Outro Pilar', descricao: 'y' },
  ];

  return (
    <div className="min-h-screen bg-white text-black p-8 font-mono">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-mono text-blue-900 mb-6">Relatório</h2>
            <nav className="space-y-2">
              <button className="block w-full text-left px-2 py-1 rounded hover:bg-yellow-100 text-sm font-mono">
                Dashboard
              </button>
              <button className="block w-full text-left px-2 py-1 rounded hover:bg-yellow-100 text-sm font-mono">
                Cadastro de ações
              </button>
              <button className="block w-full text-left px-2 py-1 rounded bg-yellow-200 text-sm font-mono">
                Relatórios
              </button>
            </nav>
          </div>
          <button className="text-left text-sm text-gray-600">Sair</button>
        </aside>

        {/* Conteúdo */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">Relatório</h1>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Descrição</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 px-4 py-2">{item.nome}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.descricao}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button className="text-blue-600 hover:underline mr-4">Editar</button>
                      <button className="text-red-600 hover:underline">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
            Adicionar pilar
          </button>
        </main>
      </div>
    </div>
  );
}
