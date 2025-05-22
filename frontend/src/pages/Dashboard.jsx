import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-mono text-blue-900 mb-6">Dashboard</h2>
          <nav className="space-y-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="block w-full text-left px-2 py-1 rounded bg-yellow-200 text-sm font-mono"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/cadastro-acoes')}
              className="block w-full text-left px-2 py-1 rounded hover:bg-yellow-100 text-sm font-mono"
            >
              Cadastro de ações
            </button>
            <button
              onClick={() => navigate('/relatorios')}
              className="block w-full text-left px-2 py-1 rounded hover:bg-yellow-100 text-sm font-mono"
            >
              Relatórios
            </button>
          </nav>
        </div>
        <button className="text-left text-sm text-gray-600">Sair</button>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-mono text-blue-900 mb-6">Dashboard</h1>

        {/* Indicadores */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="border p-4 text-center font-mono">Ações concluídas<br />0</div>
          <div className="border p-4 text-center font-mono">Ações em andamento<br />0</div>
          <div className="border p-4 text-center font-mono">Ações em atraso<br />0</div>
        </div>

        {/* Progresso e Prazos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 font-mono">
            <p className="mb-2 font-bold">Progresso</p>
            <div className="mb-2">
              Pilar x
              <div className="w-full h-3 bg-gray-200 rounded">
                <div className="h-full w-2/3 bg-blue-600 rounded" />
              </div>
            </div>
            <div>
              Pilar x
              <div className="w-full h-3 bg-gray-200 rounded">
                <div className="h-full w-1/2 bg-blue-600 rounded" />
              </div>
            </div>
          </div>
          <div className="border p-4 font-mono">
            <p className="font-bold mb-2">Prazos</p>
            <p>Nenhum</p>
          </div>
        </div>
      </main>
    </div>
  );
}
