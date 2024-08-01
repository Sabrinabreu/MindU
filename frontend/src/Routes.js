import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Cadastroempresa from "./Pages/CadastroEmpresa";
import Cadastro from "./Pages/Cadastro";
import TabelaUsuarios from "./Pages/ListaUsuarios";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cadastroempresa" element={<Cadastroempresa />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listaUsuarios" element={<TabelaUsuarios />} />
      </Routes>
    </>
  );
};

export default Rotas;
