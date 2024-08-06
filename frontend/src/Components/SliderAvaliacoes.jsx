import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';


function Avaliacoes() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='slide' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Col md="4">
                    <Card className="cardslider">

                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Col>


            </Carousel.Item>
            <Carousel.Item>

                <Col md="4">
                    <Card className="cardslider">

                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Col>
            </Carousel.Item>
            <Carousel.Item>
                <Col md="4">
                    <Card className="cardslider">

                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Col>

            </Carousel.Item>
        </Carousel>
    );
}

export default Avaliacoes;