import React from "react";
import Button from "react-bootstrap/Button";

export const RangeeRepertoire = ({ repertoire, buttons = false }) => {
    let button = <></>;

    if (buttons) {
        button = 
        <td>
            <Button
                variant="primary"
                type="button"
                href={`/modifier/${repertoire._id}`}
            >
                Modifier
            </Button>
            &nbsp;
            <Button
                variant="danger"
                type="button"
                href={`/supprimer/${repertoire._id}`}
            >
                Supprimer
            </Button>
        </td>;
    }

    return(
        <tr>
            <td>{repertoire.titre}</td>
            <td>{repertoire.artiste}</td>
            <td>{repertoire.categorie}</td>
            {button}
        </tr>
    )
}