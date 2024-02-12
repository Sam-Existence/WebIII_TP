import React from "react";

export const RangeeTopPiece = ({ numero, repertoire }) => {
    return (
        <tr>
            <td>{numero}</td>
            <td>{repertoire.titre}</td>
            <td>{repertoire.artiste}</td>
            <td>{repertoire.categorie}</td>
            <td>{repertoire.count}</td>
        </tr>
    )
}