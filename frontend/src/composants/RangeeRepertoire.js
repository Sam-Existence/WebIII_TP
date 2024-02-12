import React from "react";
import { BoutonsSupressionModification } from "./BoutonsSupressionModification";
import { useTranslation } from "react-i18next";

export const RangeeRepertoire = ({ repertoire, buttons = false, handleSupression }) => {
    const { t } = useTranslation();
    const categories = repertoire.categories.reduce((acc, categorie, index) =>
        acc + ((repertoire.categories.length <= index + 1) ? categorie : `${categorie}, `)
        , "");
    return (
        <tr>
            <td>{repertoire.titre}</td>
            <td>{repertoire.artiste}</td>
            <td>{categories}</td>
            {buttons ? <td><BoutonsSupressionModification repertoire={repertoire} handleSupression={handleSupression} /></td> : <></>}
        </tr>
    )
}