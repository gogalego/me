import React, { Component } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

export default class Profile extends Component {
  render() {
    return (
      <section>

        <div id="profileTitle">
          <h1>Profile</h1>
          <h2>Software Developer</h2>
          <hr />
        </div>

        <Container style={{ marginTop: '5%' }}>
          <Row>
            <Col xs={12} md={4}>
              <Image style={{ marginTop: '40px' }} className="imageProfile" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg" rounded />
            </Col>

            <Col xs={12} md={8}>
              <h2 style={{ width: '100%' }}>Who am I?</h2>
              <h6 style={{ marginTop: '10px', textAlign: 'initial' }}>
                I’m a motivated person, always with eager to learn more and
                more. Also, an organized person in everything I do, a good team
                spirit, a strategic thinker and good critical sense.
                I love listening music, go to concerts and going out at night. Also
                enjoy watch football and a good movie.
              </h6>

              <div style={{ textAlign: 'justify', marginTop: '20px' }}>
                <ul>
                  <li>Name: Gonçalo Galego</li>
                  <li>Age: 23 years</li>
                  <li>Location: Porto, Portugal</li>
                </ul>
              </div>

            </Col>

          </Row>
        </Container>




      </section>
    )
  }
}


