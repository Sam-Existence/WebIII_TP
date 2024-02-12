import React, { useState, useEffect } from "react";
import { FormulaireDemandeSpeciale } from "../composants/FormulaireDemandeSpeciale";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PageModifierDemandeSpeciale = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const [status, setStatus] = useState('');
    const [demandeSpeciale, setDemandeSpeciale] = useState();
    useEffect(() => {
        const chercherDemandeSpeciale = async (_id) => {
            const body = await fetch(`/api/demandes-speciales/${_id}`).then(resultat => resultat.json());
            setDemandeSpeciale(body)
        };
        chercherDemandeSpeciale(id);
    }, [id]);

    const handleSubmit = async (e, demandeSpeciale) => {
        e.preventDefault();

        let reponse = await fetch(`/api/demandes-speciales/${demandeSpeciale.id}`, {
            method: 'PUT',
            body: JSON.stringify(demandeSpeciale),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status === 200) {
            setStatus(t("La demande spéciale {{id}} a été mise à jour", { id: demandeSpeciale.id }));
        } else {
            setStatus("Erreur, la demande spéciale n'a pas été mise à jour");
        }
    }

    return (
        <main>
            <h2 className="text-center">{t("Modifier une demande spéciale")}</h2>
            <FormulaireDemandeSpeciale handleSubmit={handleSubmit} status={status} demandeSpeciale={demandeSpeciale} />
        </main>
    );
}