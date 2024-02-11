import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeDemandeSpeciale } from "./RangeeDemandeSpeciale";

export const ListeDemandesSpeciales = ({ demandesSpeciales }) => {
    let tbody = <></>;
    if (demandesSpeciales?.length) {
        tbody = 
            <tbody>
                {
                    demandesSpeciales.map(demandeSpeciale => 
                        <RangeeDemandeSpeciale 
                            demandeSpeciale={demandeSpeciale}
                            key={demandeSpeciale._id}
                        />
                    )
                }
            </tbody>;
    } 
    
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Nombre de pièces</th>
                    <th>Statut</th>
                </tr>
            </thead>
            {tbody}
        </Table>
    );
}