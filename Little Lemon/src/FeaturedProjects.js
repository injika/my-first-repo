import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; 
import project1 from './project1.png'; 
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const FeaturedProjects = ({ projects }) => {
  return (
    <section id="featured-projects">
      <Container className='cards'>
        <h2 className='h2'>Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index}>
              <Card>
              <div className="d-flex justify-content-center align-items-center">
                  <Card.Img variant="top" src={require('./project1.png')} className="centered-image" />
                </div>              <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href="#learn" className="learn-more">
                    Learn more <FontAwesomeIcon icon={faArrowRight} size="1x" />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;

