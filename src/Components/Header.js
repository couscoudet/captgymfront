import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from './../assets//logo.jpg'; 



export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" className="mb-3">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" width={100}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggle" />
        <Navbar.Collapse className="text-danger" id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">Partenaires</Nav.Link>
            <Nav.Link href="#link">Salles de sports</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
