import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeDemandeSpeciale } from "./RangeeDemandeSpeciale";

export const ListeDemandesSpeciales = ({ demandesSpeciales, buttons=false }) => {
    let tbody = <></>;
    if (demandesSpeciales?.length) {
        tbody = 
            <tbody>
                {
                    demandesSpeciales.map(demandeSpeciale => 
                        <RangeeDemandeSpeciale 
                            demandeSpeciale={demandeSpeciale}
                            key={demandeSpeciale._id}
                            buttons={buttons}
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
                    {buttons ? <th></th> : <></>}
                </tr>
            </thead>
            {tbody}
        </Table>
    );
}