import { React, useState } from "react";

import { FomulaireRepertoire } from "../composants/FomulaireRepertoire";

export const PageAjouterRepertoire = () => {
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

            setStatus(`Le répertoire a été ajouté avec l'id : ${resultat.location.split('/')[3]}`);
        } else {
            setStatus("Erreur, le répertoire n'a pas été ajouté");
        }
    }

    return (
        <main>
            <h2 className="text-center">Ajouter un répertoire</h2>
            <FomulaireRepertoire handleSubmit={handleSubmit} status={status}/>
        </main>
    );
}