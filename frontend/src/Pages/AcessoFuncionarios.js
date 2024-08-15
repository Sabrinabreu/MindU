import React, { useState } from "react";
import axios from 'axios';

import TabelaFuncionarios from "../Components/TabelaFuncionarios";

const AcessoFuncionarios = () => {
  const [nContas, setNContas] = useState(1);
  const [resultados, setResultados] = useState([]);

  const handleChange = (e) => {
    setNContas(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contasCriadas = [];
  
    try {
      for (let i = 0; i < nContas; i++) {
        const login = `funcionario${i}`;
        const senha = `senha${i}`;
        const response = await axios.post('http://localhost:3001/contaPrvsFuncionarios', { login, senha });
        
        if (response.data.login && response.data.senha) {
          contasCriadas.push(response.data);
        }
      }

      setResultados(prevResultados => [...prevResultados, ...contasCriadas]);
      alert('Contas criadas com sucesso!');
    } catch (error) {
      console.error('Erro ao criar contas:', error);
      alert('Erro ao criar contas. Verifique o console para mais detalhes.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Página Acesso Funcionários</h2>
        <label>Quantas contas deseja criar?</label>
        <input type="number" placeholder="Digite um número de contas" value={nContas} onChange={handleChange} />
        <button type="submit">Criar</button>
      </form>
      <div>
        <TabelaFuncionarios contasFuncionarios={resultados} /> {/* Passa os resultados para a tabela */}
      </div>
    </>
  );
};

export default AcessoFuncionarios;
