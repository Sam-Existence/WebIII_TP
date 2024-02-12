import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FomulaireRepertoire } from "../composants/FormulaireRepertoire";
import { useTranslation } from "react-i18next";

export const PageModifierRepertoire = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const [status, setStatus] = useState('');
    const [repertoire, setRepertoire] = useState();
    useEffect(() => {
        const chercherRepertoire = async (_id) => {
            const body = await fetch(`/api/repertoire/pieces/${_id}`).then(resultat => resultat.json());
            setRepertoire(body)
        };
        chercherRepertoire(id);
    }, [id]);

    const handleSubmit = async (e, body) => {
        e.preventDefault();

        let reponse = await fetch(`/api/repertoire/pieces/${repertoire._id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status === 200) {
            setStatus(t("Le répertoire {{id}} a été mis à jour", { id: repertoire._id}));
        } else {
            setStatus(t("Erreur, le répertoire n'a pas été mis à jour") );
        }
    }

    return (
        <main>
            <h2 className="text-center">{t("Modifier un répertoire")}</h2>
            <FomulaireRepertoire handleSubmit={handleSubmit} status={status} repertoire={repertoire} />
        </main>
    );
}