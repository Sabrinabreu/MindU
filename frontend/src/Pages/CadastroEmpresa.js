//CadastroEmpresa
import React from "react";
import CadastroForm from "../Components/CadastroFormEmpresa";
import "../css/CadastroEmpresa.css"
import bannerEMP from '../img/BannerEMP.png'
import {Row, Col} from "react-bootstrap"


const Cadastro = () => {

  return (
    <>
      <div>

      <div className="fundoInfo">
            <Row className="justify-content-center g-4 p-3">
                <Col md={7} sm={12} className="textoInfo">
                    <h1 className="mb-4">Cuidar da saúde da sua equipe te ajuda a economizar!</h1>
                    <p>Investir na saúde mental dos seus colaboradores não é apenas uma ação de cuidado, mas uma estratégia inteligente para o sucesso da sua empresa. Com nosso plano de psicologia especializado, você proporciona um ambiente mais saudável e produtivo, <b>promovendo maior satisfação e engajamento no trabalho. </b>

                      Nosso time de psicólogos é dedicado a entender as necessidades específicas da sua empresa, oferecendo suporte contínuo para promover o bem-estar emocional e mental dos seus colaboradores.

                        <b> Invista no futuro da sua empresa com um ambiente mais saudável e eficiente.</b></p>
                    <a href="#header"><button className="botaoBanner">INVESTIR NO BEM ESTAR</button></a>
                </Col>
                <Col className="centralizar" md={4} sm={12}>
                    <img className="fotoInfo" src={bannerEMP}/> 
                </Col>
            </Row>            
      </div>


<div className="TESTEFUNDO">

      <div className="fundoForms centralizar">
        <h2 className="m-4 centralizar">Calcule os custos de saúde mental na sua empresa</h2>
        
            <Col md={5} sm={12} className="textoCalc">
                <h1 className="text-start titCalc">Quantos colaboradores você possui?</h1>
                <input placeholder="Digite" type="text" name="text" className='inputgeral'/>

                <h1 className="mt-4 text-start titCalc">Qual o salário médio mensal?</h1>
                <input placeholder="Digite" type="text" name="text" className='inputgeral'/>
                
                <h1 className="my-4 text-start titCalc">Qual a idade média dos colaboradores?</h1>
                
                <div>
                <label class="radio-button">
                  <input type="radio" name="option" value="option1"/>
                  <div class="circulo-radio"></div>
                  <span class="radio-label">Entre 18 e 30 anos</span>
                </label>
                <label class="radio-button">
                  <input type="radio" name="option" value="option2"/>
                  <div class="circulo-radio"></div>
                  <span class="radio-label">Entre 30 e 40</span>
                </label>
                <label class="radio-button">
                  <input type="radio" name="option" value="option3"/>
                  <div class="circulo-radio"></div>
                  <span class="radio-label">Entre 40 e 50</span>
                </label>
              </div>


{/* roi% = receita - custos / custos x 100


receita = salario x funcionarios
custo = opção x numero de funcionarios

opcao 1 = 1250
opcao 2 = 1650
opcao 3 = 2850

      
com a gente vc pode reduzir essse valor em até 80% e economizar --- por ano
                   */}


                <button className="botaoBanner botaoBranco">CALCULAR CUSTO</button>
            </Col>
      </div>

<div id="header" className="fundoForms centralizar">


<Col md={9} sm={12} className="blocoForms">
        <h2 className="m-4 centralizar">Cadastrar sua empresa</h2>



        
               <CadastroForm />     
               
               
</Col>
      </div>
</div>

      </div>
    </>
  );
};

export default Cadastro;
