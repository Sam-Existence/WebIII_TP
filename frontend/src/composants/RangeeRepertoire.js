import React from "react";

export const RangeeRepertoire = ({ repertoire }) => {
    return(
        <tr>
            <td>{repertoire.titre}</td>
            <td>{repertoire.artiste}</td>
            <td>{repertoire.categorie}</td>
        </tr>
    )
}