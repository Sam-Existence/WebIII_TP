import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListeDemandesSpeciales } from "../composants/ListeDemandesSpeciales";

export const PageDemandeSpeciales = () => {
    let [ searchParams ] = useSearchParams();
    let [ demandesSpeciales, setDemandesSpeciales ] = useState([]);
    let actives = searchParams.get("actives") === "true";
    useEffect(() => {
        const recupererDemandesSpeciales = async () => {
            let fetchUri = '/api/demandes-speciales';
            fetchUri += actives ? '/active' : '';
            const body = await fetch(fetchUri).then(resultat => resultat.json());
            setDemandesSpeciales(body);
        }
        recupererDemandesSpeciales();
    }, [actives]);

    return (
        <main>
            <h2 className="text-center">Demandes spéciales{ actives ? " actives" : null }</h2>
            <ListeDemandesSpeciales demandesSpeciales={demandesSpeciales} typeButton="admin" />
        </main>
    );
};