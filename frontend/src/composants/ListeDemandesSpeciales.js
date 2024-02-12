import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeDemandeSpeciale } from "./RangeeDemandeSpeciale";
import Button from "react-bootstrap/Button";

export const ListeDemandesSpeciales = ({ demandesSpeciales, typeButton = "client" }) => {
    const BouttonConsulter = ({ id }) => {
        let lien;

        switch (typeButton) {
            case "admin":
                lien = `/admin/demandes-speciales/${id}`;
                break;

            case "client":
                lien = `/demandes-speciales/${id}`;
                break;

            default:
                lien = `/demandes-speciales/${id}`;
                break;
        }

        return (
            <Button
                variant="primary"
                type="button"
                href={lien}
            >
                Consulter
            </Button>
        );
    }

    let tbody = <></>;
    if (demandesSpeciales?.length) {
        tbody =
            <tbody>
                {
                    demandesSpeciales.map(demandeSpeciale =>
                        <RangeeDemandeSpeciale
                            demandeSpeciale={demandeSpeciale}
                            key={demandeSpeciale._id}
                            Button={() => <BouttonConsulter id={demandeSpeciale._id} />}
                        />
                    )
                }
            </tbody>;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Nombre de pièces</th>
                    <th>Statut</th>
                    {<th></th>}
                </tr>
            </thead>
            {tbody}
        </Table>
    );
}