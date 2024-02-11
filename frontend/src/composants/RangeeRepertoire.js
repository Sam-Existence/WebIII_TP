import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import { ModalSupression } from './ModalSupression'
import { BoutonsSupressionModification } from "./BoutonsSupressionModification";

export const RangeeRepertoire = ({ repertoire, buttons = false, handleSupression }) => {
    return(
        <tr>
            <td>{repertoire.titre}</td>
            <td>{repertoire.artiste}</td>
            <td>{repertoire.categorie}</td>
            {buttons ? <td><BoutonsSupressionModification repertoire={repertoire} handleSupression={handleSupression} /></td> : <></>}
        </tr>
    )
}