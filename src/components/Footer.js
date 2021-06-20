import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){

    return( 
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={4} sm={4} xs={6}>
                        Dylan Javier Ruiz Herrera
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={8} sm={8} xs={6}>
                        This site was made by Dylan Javier Ruiz Herrera.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;