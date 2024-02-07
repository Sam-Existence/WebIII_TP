import React from "react";

export const RangeeDemandeSpeciale = ({ demandeSpeciale }) => {
    return(
        <tr>
            <td>{demandeSpeciale.nom}</td>
            <td>{demandeSpeciale.pieces.length}</td>
            <td>{demandeSpeciale.active ? "Active" : "Inactive"}</td>
        </tr>
    )
}