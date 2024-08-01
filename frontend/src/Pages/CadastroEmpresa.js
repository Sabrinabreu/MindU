//CadastroEmpresa
import React from "react";
import CadastroForm from "../Components/CadastroFormEmpresa";
import "../css/CadastroEmpresa.css"
import bannerEMP from '../img/bannerEMP.webp'
import {Container, Row, Col, Dropdown, DropdownButton} from "react-bootstrap"


const Cadastro = () => {

// const dropDownButton = document.querySelector('#i-greitis-dropdown');
// const buttons = document.querySelectorAll('.dropdown-button');

// for (const button of buttons) {
//   button.addEventListener('click', event => {
//     dropDownButton.textContent = event.target.value;
//   });
// }


// function getOption() {
//   selectElement = 
//         document.querySelector('#select1');
//   output = selectElement.value;
//   document.querySelector('.output').textContent = output;
// }

  return (
    <>
      <div>

      <div className="fundoInfo">
            <Row className="justify-content-center g-4 p-3">
                <Col md={7} sm={12} className="textoInfo">
                    <h1 className="mb-4">Cuidar da saúde da sua equipe te ajuda a economizar!</h1>
                    <p>A dengue é uma doença viral febril aguda, causada por um arbovírus e transmitida pelos mosquitos Aedes aegypti. Pode se tornar grave, dependendo do vírus envolvido, infecção anterior pelo vírus e doenças crônicas (diabetes, asma brônquica, anemia falciforme).<br/>

                    O doente pode apresentar sintomas como febre, dor de cabeça, dores pelo corpo, manchas vermelhas na pele, sangramentos, vômitos ou até mesmo não apresentar qualquer sintoma. É importante procurar orientação médica logo nos primeiros sintomas.</p>
                    <button className="botaoBanner">INVESTIR NO BEM ESTAR</button>
                </Col>
                <Col className="centralizar" md={4} sm={12}>
                    <img className="fotoInfo" src={bannerEMP}/> 
                </Col>
            </Row>            
      </div>

        <h2 className="centralizar">Calcule os custos de saúde mental na sua empresa</h2>

        <div className="fundoCalculo centralizar">
                <Col md={5} sm={12} className="textoInfo">
                    <h1 className="mb-4 text-start">Quantos colaboradores você possui?</h1>
                    <input placeholder="Digite" type="text" name="text" class="input"/>

                    <h1 className="mb-4 text-start">Qual o salário médio mensal?</h1>
                    <input placeholder="Digite" type="text" name="text" class="input"/>
                    
                    <h1 className="mb-4 text-start">Qual a idade média dos colaboradores?</h1>
                    
                    <div>
                    <label class="radio-button">
                      <input type="radio" name="option" value="option1"/>
                      <div class="circulo-radio"></div>
                      <span class="radio-label">Entre 18 e 24 anos</span>
                    </label>
                    <label class="radio-button">
                      <input type="radio" name="option" value="option2"/>
                      <div class="circulo-radio"></div>
                      <span class="radio-label">Entre 25 e 34</span>
                    </label>
                    <label class="radio-button">
                      <input type="radio" name="option" value="option3"/>
                      <div class="circulo-radio"></div>
                      <span class="radio-label">Entre 34 e 50</span>
                    </label>
                    <label class="radio-button">
                      <input type="radio" name="option" value="option3"/>
                      <div class="circulo-radio"></div>
                      <span class="radio-label">Mais de 50 anos</span>
                    </label>
                  </div>


                      


                    <button className="botaoBanner">CALCULAR CUSTO</button>
                </Col>
      </div>


        <h2 className="centralizar">Cadastrar sua empresa</h2>



        <div className="fundoInfo">
               <CadastroForm />     
      </div>


      </div>
    </>
  );
};

export default Cadastro;
