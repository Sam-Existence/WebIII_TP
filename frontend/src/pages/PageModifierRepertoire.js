import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FomulaireRepertoire } from "../composants/FomulaireRepertoire";

export const PageModifierRepertoire = () => {
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
            <h2 className="text-center">Modifier un répertoire</h2>
            <FomulaireRepertoire type="put" repertoire={repertoire}/>
        </main>
    );
}