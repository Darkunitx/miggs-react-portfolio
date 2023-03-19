import React from 'react';
import './index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#Home">Miguel's React Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">About Me</Nav.Link>
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;