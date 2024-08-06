import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/HomeMindU.css'

function TxtSobreMindU() {
    return (
        <Container>
            <Row >
                <Col md="10">
                    <div className='txtSobre'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <br />
                        <button className='botaoSobre'>Investir no bem estar </button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
}

export default TxtSobreMindU;