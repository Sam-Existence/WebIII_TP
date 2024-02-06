import React from "react";
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

export const BarreNavigation = ({ type="client" }) => {
    let navbarElements;

    switch (type) {
        case "client":
            navbarElements = 
            <>
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/repertoire">Liste de répertoire</Nav.Link>
            </>
            break;
        
        case "admin":
            navbarElements = 
            <>
                <Nav.Link href="/admin">Accueil</Nav.Link>
                <Nav.Link href="/admin/repertoire">Liste de répertoire</Nav.Link>
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