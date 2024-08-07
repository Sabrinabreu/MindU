// Home
import React from "react";
import TxtSobreMindU from "../Components/TxtApresentMindU";
import CardSobreMindU from "../Components/CardSobreMindU";
import QualidadesMindU from "../Components/QualidadesEmpresa";
import Avaliacoes from "../Components/SliderAvaliacoes";


function Home() {
  return (
    <>
      <div>
        <h2>Página Home</h2>
        <div className="d-flex">
          <TxtSobreMindU />
          <CardSobreMindU />
        </div>
        <QualidadesMindU />
        <Avaliacoes />
      </div>
    </>
  );
};

export default Home;
