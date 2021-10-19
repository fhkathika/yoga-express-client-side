
import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './NavBar.css'

import { NavLink } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
const NavBar = () => {
 const {user,logOut}=useAuth()
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
     
      <NavLink className="nav-links" style={{color:"wheat"}} to="/home">Home</NavLink>

      <NavLink className="nav-links" style={{color:"wheat"}} to="/classes">Classes</NavLink>
      <NavLink className="nav-links" style={{color:"wheat"}}  to="/yogashop">Yoga Shop</NavLink>
     { user.email?
 <button onClick={logOut}  className="nav-links" style={{color:"wheat",backgroundColor:"#513125"}}   >Log Out</button>
     :
      <NavLink className="nav-links" style={{color:"wheat"}}  to="/login">Log In</NavLink>}
    </Nav>
    </Navbar.Collapse>
    <Navbar.Text className="nav-routes-font" style={{color:"wheat"}} >
        Signed in as: <a style={{color:"rgb(196, 122, 94)"}}  href="/login">{user.displayName}</a>
      </Navbar.Text>
  
    </Container>
  </Navbar>
      </>
    );
};

export default NavBar;