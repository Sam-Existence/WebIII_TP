import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DemandeSpeciale } from '../composants/DemandeSpeciale';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";

export const PageConsulterDemandeSpeciale = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const [active, setActive] = useState(false);
    const [demandeSpeciale, setDemandeSpeciale] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const chercherDemandeSpeciale = async (_id) => {
            const body = await fetch(`/api/demandes-speciales/${_id}`).then(resultat => resultat.json());
            setDemandeSpeciale(body);
            setActive(body.active);
        };
        chercherDemandeSpeciale(id);
    }, [id]);

    const desactiver = async () => {
        let reponse = await fetch(`/api/demandes-speciales/${id}/desactiver`, { method: 'PUT' });

        if (reponse.status === 200) {
            setActive(false);
        }
    }

    return (
        <main>
            <h2 className="text-center">{t("Consulter demande spéciale")}</h2>
            <DemandeSpeciale demandeSpeciale={demandeSpeciale} />
            <p>Status : {active ? "Active" : "Inactive"} <Button hidden={!active} onClick={desactiver} >{t("Désactiver")}</Button></p>
            <Button variant="danger" onClick={() => navigate(-1)}>{t("retourner")}</Button>
        </main>
    );
}