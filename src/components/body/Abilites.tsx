import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Abilites extends Component {
  render() {
    return (
      <section>

        <h1>Abilites</h1>
        <hr />

        <Container style={{ marginTop: '5%' }}>

          <Row >
            <Col xs={12}>
              <h2 style={{ float: 'left' }}>Skills</h2>
            </Col>
            <Col xs={12} md={6}>
              <h6>2011-2014</h6>
              *****
            </Col>
            <Col xs={12} md={6}>
            <h6>2011-2014</h6>
              *****
            </Col>
            <Col xs={12} md={6}>
            <h6>2011-2014</h6>
              *****
            </Col>





          </Row>


        </Container>

      </section>
    )
  }
}
