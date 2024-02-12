import React from "react";
import { useTranslation } from "react-i18next";

export const RangeeTopPiece = ({ numero, repertoire }) => {
    const { t } = useTranslation();
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