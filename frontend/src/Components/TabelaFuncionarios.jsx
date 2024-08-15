import React, { useEffect, useState } from "react";
import axios from "axios";

const TabelaFuncionarios = ({ contasFuncionarios }) => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/contaPrvsFuncionarios");
        setContas(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (contasFuncionarios.length > 0) {
      setContas(prevContas => [...prevContas, ...contasFuncionarios]);
    }
  }, [contasFuncionarios]);

  const handleExcluirUsuario = async (login) => {
    try {
      await axios.delete(`http://localhost:3001/contaPrvsFuncionarios/${login}`);
      setContas(prevContas =>
        prevContas.filter(conta => conta.login !== login)
      );
      console.log("Usuário excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
    }
  };

  return (
    <div>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>Login</th>
            <th>Senha</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((contaFuncionario) => (
            <tr key={contaFuncionario.login}>
              <td>{contaFuncionario.login}</td>
              <td>{contaFuncionario.senha}</td>
              <td>
                <button
                  variant="danger"
                  onClick={() => handleExcluirUsuario(contaFuncionario.login)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaFuncionarios;
