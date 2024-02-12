import React from "react";
import {
    Navbar,
    Nav,
    Container,
    NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Langages } from "./Langages";

export const BarreNavigation = ({ type = "client" }) => {
    let navbarElements;
    const { t } = useTranslation();

    switch (type) {
        case "client":
            navbarElements =
                <>
                    <LinkContainer to="/"><Nav.Link>{ t("accueil") }</Nav.Link></LinkContainer>
                    <LinkContainer to="/repertoire"><Nav.Link>{t("repertoire")}</Nav.Link></LinkContainer>
                    <LinkContainer to="/demandes-speciales"><Nav.Link>{t("demandesSpeciales")}</Nav.Link></LinkContainer>
                </>
            break;

        case "admin":
            navbarElements =
                <>
                    <Nav.Link href="/admin">{ t("accueil") }</Nav.Link>
                    <NavDropdown title="Répertoire">
                        <LinkContainer to="/admin/repertoire"><NavDropdown.Item>{ t("lister") }</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/admin/repertoire/ajouter"><NavDropdown.Item>{ t("ajouter") }</NavDropdown.Item></LinkContainer>
                        <LinkContainer to="/admin/repertoire/top-5"><NavDropdown.Item>{ t("top5") }</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="Demandes spéciales">
                        <NavDropdown.Item as={Link} to="/admin/demandes-speciales">{ t("listerToutes") }</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={{ pathname: "/admin/demandes-speciales", search: "?actives=true" }}>{ t("listerActives") }</NavDropdown.Item>
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
                <Navbar.Brand href="/">{ t("marque") }</Navbar.Brand>
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