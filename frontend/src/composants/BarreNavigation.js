import React from "react";
import {
    Navbar,
    Nav,
    Container,
    NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Langages } from "./Langages";

export const BarreNavigation = ({ type = "client" }) => {
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
                    <NavDropdown title="Répertoire">
                        <LinkContainer to="/admin/repertoire"><NavDropdown.Item>Lister</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/admin/repertoire/ajouter"><NavDropdown.Item>Ajouter</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/admin/repertoire/top-5"><NavDropdown.Item>Top 5</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="Demandes spéciales">
                        <NavDropdown.Item as={Link} to="/admin/demandes-speciales">Lister toutes</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={{ pathname: "/admin/demandes-speciales", search: "?actives=true" }}>Lister actives</NavDropdown.Item>
                    </NavDropdown>
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
                <Langages />
            </Container>
        </Navbar>
    );
};