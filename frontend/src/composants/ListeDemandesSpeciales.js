import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeDemandeSpeciale } from "./RangeeDemandeSpeciale";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

export const ListeDemandesSpeciales = ({ demandesSpeciales, typeButton = "client" }) => {
    const { t } = useTranslation();
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
                { t("consulter" )}
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
                    <th>{ t("nom") }</th>
                    <th>{ t("nombreDePieces") }</th>
                    <th>{ t("statut") }</th>
                    {<th></th>}
                </tr>
            </thead>
            {tbody}
        </Table>
    );
}