import React, { useState, useEffect } from "react";
import { ListeTopPieces } from "../composants/ListeTopPieces";

export const PageConsulterTop5 = () => {
    const [ top5, setTop5 ] = useState();
    useEffect(() => {
        const recupererTop5Pieces = async () => {
            const body = await fetch(`/api/repertoire/pieces/top/5`).then(resultat => resultat.json());
            setTop5(body);
        };
        recupererTop5Pieces();
    }, []);
    
    return (
        <main>
            <h2 className="text-center">Top 5</h2>
            <ListeTopPieces repertoires={top5}/>
        </main>
    );
};