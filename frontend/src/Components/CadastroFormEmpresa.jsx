// CadastroFormEmpresa.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {Container, Row, Col} from "react-bootstrap"

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    departamento: '',
    qtdfuncionarios: '',
    planosaude: '',
    contato: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/cadastroempresa', formData);
      alert('Cadastro criado com sucesso!');
      // Limpar o formulário após o envio bem-sucedido
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        departamento: '',
        qtdfuncionarios: '',
        planosaude: '',
        contato: ''
      });
    } catch (error) {
      console.error('Erro ao criar cadastro:', error);
      alert('Erro ao criar cadastro. Verifique o console para mais detalhes.');
    }
  };

return (
          
    <form onSubmit={handleSubmit}>

      <Container className="justify-content-center g-4 p-3" >
      <input className='inputgeral' type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
      <input className='inputgeral' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />


      <Row >
        <Col><input className='inputgeral' type="tel"  maxlength="15" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} /></Col>
        <Col><input className='inputgeral' type="text" name="empresa" placeholder="Empresa" value={formData.empresa} onChange={handleChange} /></Col>
      </Row>
      
      <Row >
        <Col><input className='inputgeral' type="text" name="departamento" placeholder="Departamento" value={formData.departamento} onChange={handleChange} /></Col>
        <Col><input className='inputgeral' type="number" name="qtdfuncionarios" placeholder="Qtdfuncionarios" value={formData.qtdfuncionarios} onChange={handleChange} /></Col>
      </Row>


      <Row >
        <Col><input className='inputgeral' type="text" name="planosaude" placeholder="Planosaude" value={formData.planosaude} onChange={handleChange} /></Col>
        <Col><input className='inputgeral' type="text" name="contato" placeholder="Contato" value={formData.contato} onChange={handleChange} /></Col>
      </Row>
      

      <button className='botaoBanner botaoBranco' type="submit">Salvar</button>
      
      </Container>
    </form>
  );
};

export default CadastroForm;
