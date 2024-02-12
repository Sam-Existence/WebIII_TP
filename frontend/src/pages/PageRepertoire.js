import React, { useState, useEffect } from "react";
import { TableauRepertoire } from "../composants/TableauRepertoire";

export const PageRepertoire = () => {
    const [repertoires, setRepertoires] = useState();
    useEffect(() => {
        const chercherRepertoires = async () => {
            const body = await fetch('/api/repertoire/pieces').then(resultat => resultat.json());
            setRepertoires(body);
        };
        chercherRepertoires();
    }, []);

    return (
        <main>
            <h2 className="text-center">Répertoire</h2>
            <TableauRepertoire repertoires={repertoires} />
        </main>
    );
}