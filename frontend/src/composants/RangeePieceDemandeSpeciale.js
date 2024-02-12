import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const RangeePieceDemandeSpeciale = ({ piece, typeBouton = "supprimer", handleModification }) => {
    const { t } = useTranslation();
    let bouton;
    const categories = piece.categories.reduce((acc, categorie, index) =>
        acc + ((piece.categories.length <= index + 1) ? categorie : `${categorie}, `)
        , "");
    switch (typeBouton) {
        case "supprimer":
            bouton =
                <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleModification(piece)}
                >
                    { t("supprimer") }
                </Button>
            break;

        case "ajouter":
            bouton =
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => handleModification(piece)}
                >
                    { t("ajouter") }
                </Button>
            break;

        default:
            break;
    }

    return (
        <tr>
            <td>{piece.titre}</td>
            <td>{piece.artiste}</td>
            <td>{categories}</td>
            <td>{bouton}</td>
        </tr>
    )
}