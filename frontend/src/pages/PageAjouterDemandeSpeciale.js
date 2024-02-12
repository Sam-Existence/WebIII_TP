import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FormulaireDemandeSpeciale } from "../composants/FormulaireDemandeSpeciale";

export const PageAjouterDemandeSpeciale = () => {
    let [ searchParams ] = useSearchParams();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e, demandeSpeciale) => {
        e.preventDefault();
        console.log(demandeSpeciale);
        let reponse = await fetch('/api/demandes-speciales', {
            method: 'POST',
            body: JSON.stringify(demandeSpeciale),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status === 201) {
            const resultat = await reponse.json();

            setStatus(`La demande spéciale a été ajoutée avec l'id : ${resultat.uri.split('/')[3]}`);
        } else {
            setStatus("Erreur, la demande spéciale n'a pas été ajoutée");
        }
    }

    return (
        <main>
            <h2 className="text-center">Ajouter une demande spéciale</h2>
            <FormulaireDemandeSpeciale handleSubmit={handleSubmit} status={status} name={searchParams.get("nom")}/>
        </main>
    );
}