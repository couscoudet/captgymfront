import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from './../assets//logo.jpg'; 
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';



export default function Header() {

  return (
    <Navbar bg="primary" variant="dark" expand="sm" className="mb-3">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo" width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggle" />
        <Navbar.Collapse className="text-danger" id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="/partners">Partenaires</Nav.Link>
            <Nav.Link href="/sport-rooms">Salles de sports</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="danger" href="/disconnect"><i className="fa-solid fa-right-from-bracket"></i></Button>
      </Container>
    </Navbar>
  )
}
