import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ConfirmationSuppression } from "../composants/ConfirmationSuppression";

export const PageConfirmationSuppression = () => {
    const { id } = useParams();

    const [repertoire, setRepertoire] = useState();
    useEffect(() => {
        const chercherRepertoire = async (_id) => {
            const body = await fetch(`/api/pieces/${_id}`).then(resultat => resultat.json());
            setRepertoire(body)
        };
        chercherRepertoire(id);
    }, [id]);

    return (
        <main>
            <h2 className="text-center">Supprimer un répertoire</h2>
            <ConfirmationSuppression repertoire={repertoire}/>
        </main>
    );
}