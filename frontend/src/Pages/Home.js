// Home
import React from "react";
import TxtSobreMindU from "../Components/TxtApresentMindU";
import CardSobreMindU from "../Components/CardSobreMindU";
import QualidadesMindU from "../Components/QualidadesEmpresa";
import Avaliacoes from "../Components/SliderAvaliacoes";
import { useEffect } from "react";


function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica visibilidade ao carregar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="d-flex">
        <div className="scroll-section">
          <TxtSobreMindU />
        </div>
        <div className="scroll-section">
          <CardSobreMindU />
        </div>
      </div>
      <div className="scroll-section">
        <QualidadesMindU />
      </div>
      <div className="scroll-section">
        <Avaliacoes />
      </div>
    </>


  );
};

export default Home;
