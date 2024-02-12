import React from "react";
import Container from "react-bootstrap/Container";
import { TableauRepertoire } from "./TableauRepertoire";
import { useTranslation } from "react-i18next";

export const DemandeSpeciale = ({ demandeSpeciale }) => {
    const { t } = useTranslation();
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