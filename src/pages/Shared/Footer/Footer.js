import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className=" mt-3  w-100" >
           
           <Navbar sticky="bottom"   bg="dark" variant="dark">
          
      
           <Navbar.Brand href="/home" className="m-5 p-5"><h1>Yoga Express</h1><p>It's not about being good at something.</p></Navbar.Brand>
      

           <br />
  
   
    <Nav className="me-auto d-flex">
      <Nav.Link  href="#home"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
      <Nav.Link   href="#features"><FontAwesomeIcon icon={faFacebook}/></Nav.Link>
      <Nav.Link  href="#pricing"><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
      <Nav.Link  href="#pricing"><FontAwesomeIcon icon={faTwitter}/></Nav.Link>
      <br />
      <sm>copyright @ prospect-All Rights Reserved</sm>
    </Nav>
    <br />
    
  </Navbar>
  
 
        </div>
    );
};

export default Footer;