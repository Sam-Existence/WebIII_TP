import React from "react";
import { useState, useEffect } from "react";
import { TableauRepertoire } from "../composants/TableauRepertoire";

export const PageConsulterTop5 = () => {
    const [ top5, setTop5 ] = useState([]);
    useEffect(() => {
        const recupererTop5Pieces = async () => {
            const body = await fetch(`/api/repertoire/pieces/top/5`).then(resultat => resultat.json());
            console.log(body);
            setTop5(body);
        };
        recupererTop5Pieces();
    }, []);

    return (
        <main>
            <h2 className="text-center">Top 5</h2>
            <TableauRepertoire repertoires={top5} buttons />
        </main>
    );
};