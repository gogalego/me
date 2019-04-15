import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Education extends Component {
    render() {
        return (
            <section>

                <h1>Education</h1>
                <hr />
                <Container style={{ marginTop: '5%' }}>


                    <Row className="eductionRow">
                        <Col xs={12} md={4}>
                            <h3>D. Sancho II</h3>
                            <h6>2011-2014</h6>
                        </Col>
                        <Col xs={12} md={8}>
                            <h4>Highschool - Scientific-Humanistic</h4>
                            <h6>I choose Scientific-Humanistic,
                                 because I always enjoyed math and physics but knowing that my future
                                 would be the computers.   </h6>
                                 <h6><i className="fas fa-location-arrow"></i>Alijó</h6>
                            
                              
                        </Col>
                    </Row>

                    <Row className="eductionRow">
                        <Col xs={12} md={4}>
                            <h3>ISEP University</h3>
                            <h6>2015-2018</h6>
                        </Col>
                        <Col xs={12} md={8}>
                            <h4>Bachelor - Computer Science </h4>
                            <h6>In genrally the course was Java-based programming.
                                I also learned C/C++/C#, Assembly, UML, SQL, Javascript, MVC and more.
                                During all 3 years, I specialized in Software Development.
                            </h6>
                            <h6><i className="fas fa-location-arrow"></i>Porto</h6>
                        </Col>
                    </Row>

                </Container>

            </section>
        )
    }
}
