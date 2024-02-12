import React from "react";
import Container from "react-bootstrap/Container";
import { TableauRepertoire } from "./TableauRepertoire";

export const DemandeSpeciale = ({ demandeSpeciale }) => {
    if (demandeSpeciale === undefined) {
        return;
    }

    return (
        <Container>
            <h3>{demandeSpeciale.nom}</h3>
            <TableauRepertoire repertoires={demandeSpeciale.pieces} />
        </Container>
    );
}