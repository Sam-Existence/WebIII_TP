import React from "react";
import { BoutonsSupressionModification } from "./BoutonsSupressionModification";
import { Button } from "react-bootstrap";

export const RangeePieceDemandeSpeciale = ({ piece, typeBouton = "supprimer", handleModification }) => {
    let bouton;
    switch (typeBouton) {
        case "supprimer":
            bouton =
                <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleModification(piece)}
                >
                    Supprimer
                </Button>
            break;

        case "ajouter":
            bouton =
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => handleModification(piece)}
                >
                    Ajouter
                </Button>
            break;

        default:
            break;
    }

    return (
        <tr>
            <td>{piece.titre}</td>
            <td>{piece.artiste}</td>
            <td>{piece.categorie}</td>
            <td>{bouton}</td>
        </tr>
    )
}