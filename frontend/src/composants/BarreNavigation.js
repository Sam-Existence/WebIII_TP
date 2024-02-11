import React from "react";
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const BarreNavigation = ({ type="client" }) => {
    let navbarElements;

    switch (type) {
        case "client":
            navbarElements = 
            <>
                <LinkContainer to="/"><Nav.Link>Accueil</Nav.Link></LinkContainer>
                <LinkContainer to="/repertoire"><Nav.Link>Répertoire</Nav.Link></LinkContainer>
                <LinkContainer to="/demandes-speciales"><Nav.Link>Demandes spéciales</Nav.Link></LinkContainer>
            </>
            break;
        
        case "admin":
            navbarElements = 
            <>
                <Nav.Link href="/admin">Accueil</Nav.Link>
                <LinkContainer to="/admin/repertoire"><Nav.Link>Répertoire</Nav.Link></LinkContainer>
                <LinkContainer to="/admin/demandes-speciales"><Nav.Link>Demandes spéciales</Nav.Link></LinkContainer>
            </>
            break;
            
        default:
            navbarElements = <></>
            break;
    }
    return (
        <Navbar bg="secondary" data-bs-theme="dark" expand="sm">
            <Container>
                <Navbar.Brand href="/">La musique</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navbarElements}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};