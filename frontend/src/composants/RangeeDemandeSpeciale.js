import React from "react";

export const RangeeDemandeSpeciale = ({ demandeSpeciale, Button }) => {
    return (
        <tr>
            <td>{demandeSpeciale.nom}</td>
            <td>{demandeSpeciale.pieces.length}</td>
            <td>{demandeSpeciale.active ? "Active" : "Inactive"}</td>
            <td>{<Button />}</td>
        </tr>
    )
}