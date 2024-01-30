import { React, useState, useEffect } from "react";
import { TableauRepertoire } from "../composants/TableauRepertoire";

export const PageRepertoire = () => {
    const [repertoires, setRepertoires] = useState();
    useEffect(() => {
        const chercherRepertoires = async () => {
            const body = await fetch('/api/pieces').then(resultat => resultat.json());
            setRepertoires(body.sort((a, b) => a.categorie.localeCompare(b.categorie)))
        };
        chercherRepertoires();
    }, []);

    return (
        <main>
            <h2 className="text-center">Liste de répertoire</h2>
            <TableauRepertoire repertoires={repertoires} />
        </main>
    );
}