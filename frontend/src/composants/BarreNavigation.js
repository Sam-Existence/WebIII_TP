import React from "react";
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

export const BarreNavigation = () => {
    return (
        <Navbar bg="secondary" data-bs-theme="dark" expand="sm">
            <Container>
                <Navbar.Brand href="/">La musique</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/repertoire">Liste de répertoire</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};