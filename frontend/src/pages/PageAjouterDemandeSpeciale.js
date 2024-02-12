import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FormulaireDemandeSpeciale } from "../composants/FormulaireDemandeSpeciale";
import { useTranslation } from "react-i18next";

export const PageAjouterDemandeSpeciale = () => {
    let [searchParams] = useSearchParams();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e, demandeSpeciale) => {
        const { t } = useTranslation();
        e.preventDefault();

        let reponse = await fetch('/api/demandes-speciales', {
            method: 'POST',
            body: JSON.stringify(demandeSpeciale),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status === 201) {
            const resultat = await reponse.json();

            setStatus(`${t("La demande spéciale a été ajoutée avec l'id :")} ${resultat.uri.split('/')[3]}`);
        } else {
            setStatus(t("Erreur, la demande spéciale n'a pas été ajoutée"));
        }
    }

    return (
        <main>
            <h2 className="text-center">{ t("Ajouter une demande spéciale") }</h2>
            <FormulaireDemandeSpeciale handleSubmit={handleSubmit} status={status} name={searchParams.get("nom")} />
        </main>
    );
}