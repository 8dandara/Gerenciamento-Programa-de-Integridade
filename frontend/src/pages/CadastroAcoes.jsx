import React, { useState } from 'react';

export default function CadastroAcoes() {
  const [pilar, setPilar] = useState('');
  const [titulo, setTitulo] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prazo, setPrazo] = useState('');
  const [situacao, setSituacao] = useState('Cadastrada');
  const [metodo, setMetodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ pilar, titulo, responsavel, prazo, situacao, metodo });
    // Aqui futuramente vai o POST para o backend
  };

  return (
    <div className="min-h-screen bg-blue-800 p-8 text-white font-mono">
      <div className="max-w-3xl mx-auto bg-blue-900 p-6 rounded shadow">
        <h1 className="text-2xl mb-6">Cadastro de Ações</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            className="w-full p-2 rounded text-black"
            value={pilar}
            onChange={(e) => setPilar(e.target.value)}
            required
          >
            <option value="">Selecione um Pilar</option>
            <option value="1">Transparência</option>
            <option value="2">Ética Corporativa</option>
          </select>

          <input
            type="text"
            placeholder="Título da Ação"
            className="w-full p-2 rounded text-black"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Responsável"
            className="w-full p-2 rounded text-black"
            value={responsavel}
            onChange={(e) => setResponsavel(e.target.value)}
            required
          />

          <input
            type="date"
            className="w-full p-2 rounded text-black"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            required
          />

          <select
            className="w-full p-2 rounded text-black"
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}
          >
            <option value="Cadastrada">Cadastrada</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluída">Concluída</option>
            <option value="Em atraso">Em atraso</option>
          </select>

          <textarea
            placeholder="Método"
            className="w-full p-2 rounded text-black"
            value={metodo}
            onChange={(e) => setMetodo(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
