import React from "react";
import Button from 'react-bootstrap/Button'

export const RangeeDemandeSpeciale = ({ demandeSpeciale, buttons=false }) => {
    let button = <></>;
    if (buttons) {
        button =
            <td>
                <Button 
                    variant="primary"
                    type="button"
                    href={`/admin/demandes-speciales/${demandeSpeciale._id}`}
                >
                    Consulter
                </Button>
            </td>
    }
    return(
        <tr>
            <td>{demandeSpeciale.nom}</td>
            <td>{demandeSpeciale.pieces.length}</td>
            <td>{demandeSpeciale.active ? "Active" : "Inactive"}</td>
            {button}
        </tr>
    )
}