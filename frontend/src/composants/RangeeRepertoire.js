import React from "react";
import { BoutonsSupressionModification } from "./BoutonsSupressionModification";

export const RangeeRepertoire = ({ repertoire, buttons = false, handleSupression }) => {
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