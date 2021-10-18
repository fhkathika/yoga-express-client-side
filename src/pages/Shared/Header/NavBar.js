
import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {

    return (
        //NavBar
        <>
      <Navbar className='nav-background' bg="dark" variant="dark" collapseOnSelect expand="lg"  >
    <Container>
      <Navbar.Brand style={{color:"wheat"}} className="branName-font" href="#home">
        {' '}
      Yoga Express
    
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  >
      <Nav  className="me-auto nav-routes-font"  expand="lg" >
     
      <Nav.Link className="nav-links" style={{color:"wheat"}} href="#home">Home</Nav.Link>

      <Nav.Link className="nav-links" style={{color:"wheat"}} HashLink to="#classes">Classes</Nav.Link>
      <Nav.Link className="nav-links" style={{color:"wheat"}} HashLink to="#yogashop">Yoga Shop</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    <Navbar.Text className="nav-routes-font" style={{color:"wheat"}} >
        Signed in as: <a style={{color:"rgb(196, 122, 94)"}}  href="#login"> Mark Otto</a>
      </Navbar.Text>
  
    </Container>
  </Navbar>
      </>
    );
};

export default NavBar;