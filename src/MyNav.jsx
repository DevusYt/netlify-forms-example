import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNav() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Forms-Test</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Static Forms</Nav.Link>
                    <Nav.Link href="stateful">Stateful Forms</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
