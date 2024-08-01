//CadastroEmpresa
import React from "react";
import CadastroForm from "../Components/CadastroFormEmpresa";
import "../css/CadastroEmpresa.css"
import Dengue from '../img/bannerEMP.webp'
import {Container, Row, Col, Stack} from "react-bootstrap"


const Cadastro = () => {
  return (
    <>
      <div>

      <div className="fundoInfo">
            <Row className="justify-content-center g-4 p-3">
                <Col md={5} sm={12} className="textoInfo">
                    <h1 className="mb-4 tituloInfo">O que é a dengue?</h1>
                    <p>A dengue é uma doença viral febril aguda, causada por um arbovírus e transmitida pelos mosquitos Aedes aegypti. Pode se tornar grave, dependendo do vírus envolvido, infecção anterior pelo vírus e doenças crônicas (diabetes, asma brônquica, anemia falciforme).<br/>

                    O doente pode apresentar sintomas como febre, dor de cabeça, dores pelo corpo, manchas vermelhas na pele, sangramentos, vômitos ou até mesmo não apresentar qualquer sintoma. É importante procurar orientação médica logo nos primeiros sintomas.</p>
                </Col>
                <Col className="centralizar" md={5} sm={12}>
                    <img className="fotoInfo" src={Dengue}/> 
                </Col>
            </Row>            
      </div>
        <h2>Opinião dos nossos parceiros</h2>

        <h2>Calcule os custos de saúde mental na sua empresa</h2>

        <h2>Cadastrar sua empresa</h2>

        <CadastroForm />
      </div>
    </>
  );
};

export default Cadastro;
