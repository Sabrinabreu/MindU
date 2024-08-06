
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/HomeMindU.css'

function QualidadesMindU() {
    return (
        <Container>
            <Row >
                <Col md="12">
                    <div className='qualidadesMindU'>
                        <h1>Porque escolher a MindU?</h1>
                        <div className='d-flex cards'>
                            <Col md='8'>
                                <Card className="text-center">

                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>

                                    </Card.Body>

                                </Card></Col>

                            <Col md='8'>
                                <Card className="text-center">

                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>

                                    </Card.Body>

                                </Card></Col>
                            <Col md='8'>
                                <Card className="text-center">

                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>

                                    </Card.Body>

                                </Card></Col>

                        </div>

                    </div>

                </Col>
            </Row>
        </Container>

    );
}

export default QualidadesMindU;