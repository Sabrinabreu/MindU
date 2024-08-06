import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/HomeMindU.css'

function CardSobreMindU() {
    return (
        <Container className='container'>
            <Row >
                <Col md="4">
                    <Card className='cardBanner'>

                    </Card></Col>
            </Row>
            <Row >
                <Col md='6'> <Card className='cardProfs' >
                    <Card.Body></Card.Body>
                </Card></Col>
            </Row>
        </Container>

    );
}

export default CardSobreMindU;