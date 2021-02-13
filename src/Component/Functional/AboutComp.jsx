import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';

const AboutComp = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Ini halaman About</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <CardComp
                            id="1"
                            title="Belajar React"
                            post_date="22/06/2020"
                        />
                    </Col>
                    <Col>
                        <CardComp
                            id="2"
                            title="Belajar Node"
                            post_date="12/08/2020"
                        />
                    </Col>
                    <Col>
                        <CardComp
                            id="3"
                            title="Belajar PWA"
                            post_date="19/11/2020"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComp;