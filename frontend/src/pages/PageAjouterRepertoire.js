import React, { useState } from "react";

import { FomulaireRepertoire } from "../composants/FormulaireRepertoire";
import { useTranslation } from "react-i18next";

export const PageAjouterRepertoire = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e, repertoire) => {
        e.preventDefault();

        let reponse = await fetch('/api/repertoire/pieces', {
            method: 'POST',
            body: JSON.stringify(repertoire),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status === 201) {
            const resultat = await reponse.json();

            setStatus(`${t("Le répertoire a été ajoutée avec l'id :")} ${resultat.location.split('/')[3]}`);
        } else {
            setStatus(t("Erreur, le répertoire n'a pas été ajoutée"));
        }
    }

    return (
        <main>
            <h2 className="text-center">{ t("Ajouter un répertoire") }</h2>
            <FomulaireRepertoire handleSubmit={handleSubmit} status={status} />
        </main>
    );
}