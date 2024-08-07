
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Col from 'react-bootstrap/Col'


function Avaliacoes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Habilita o modo de centralização
        centerPadding: '20px', // Ajusta a quantidade de espaço ao redor do slide central
        focusOnSelect: true, // Permite seleção ao clicar nos slides
        arrows: true, // Habilita os botões de navegação
    };

    return (
        <Col md='12'>
            <h1 className='text-center'>O que os colaboradores falam de nós: </h1>

            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="slide">
                        <h3>Slide 1</h3>
                    </div>
                    <div className="slide">
                        <h3>Slide 2</h3>
                    </div>
                    <div className="slide">
                        <h3>Slide 3</h3>
                    </div>
                    <div className="slide">
                        <h3>Slide 4</h3>
                    </div>
                    <div className="slide">
                        <h3>Slide 5</h3>
                    </div>
                    {/* Adicione mais slides conforme necessário */}
                </Slider>
            </div>
        </Col>

    );
};
export default Avaliacoes