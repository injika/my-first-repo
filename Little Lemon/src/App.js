import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container } from 'react-bootstrap'
import Landing from './Landing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import inji from './inji.png';
import FeaturedProjects from './FeaturedProjects'
import project1 from './project1.png'
import Contact from './Contact'
import React, { useRef } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function App() {

  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'project1.png',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'project2.jpg',
    
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'project2.jpg',
    },
  ];
  return (
   <div className="App">
    
      <div className='singleCol social-media-icons-black a d-flex justify-content-evenly'>

      <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }}/></a>
    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} /></a>
    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} /></a>
    <a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} style={{ color: 'black' }}/></a>
    <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} style={{ color: 'black' }}/></a>

      </div>
      <div>

        <nav><ul className="nav">
          <li><a  href="#projects">My projects</a></li>
          <li><span className="divider"></span></li>
          <li><a  href="#Contact">Contact Me</a></li>
          </ul></nav></div>
          
          <Container className='container'>
            <Landing> </Landing>
            </Container>         
            <div className="spacer"></div> 

            <FeaturedProjects projects={projects} />
            <div className="spacer"></div> 

            <Contact />
            <div>
        <nav>
          <ul>
          <a href="#projects" onClick={() => scrollToSection(projectsRef)}>
              </a>
            
              <a href="#contact" onClick={() => scrollToSection(contactRef)}>
                
              </a>
          </ul>
        </nav>

        <section id="projects" ref={projectsRef}>
        </section>
        <section id="contact" ref={contactRef}>
        </section>
      </div>
            
    </div>
    
    
  );
}


export default App;

