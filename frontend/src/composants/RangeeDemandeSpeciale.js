import React from "react";
import Button from 'react-bootstrap/Button'

export const RangeeDemandeSpeciale = ({ demandeSpeciale, Button }) => {
    return(
        <tr>
            <td>{demandeSpeciale.nom}</td>
            <td>{demandeSpeciale.pieces.length}</td>
            <td>{demandeSpeciale.active ? "Active" : "Inactive"}</td>
            <td>{<Button/>}</td>
        </tr>
    )
}