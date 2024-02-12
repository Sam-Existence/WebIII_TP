import React, { useState, useEffect } from "react";
import { TableauRepertoire } from "../composants/TableauRepertoire";
import { useTranslation } from "react-i18next";

export const PageRepertoire = () => {
    const { t } = useTranslation();
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
            <h2 className="text-center">{t("repertoire")}</h2>
            <TableauRepertoire repertoires={repertoires} />
        </main>
    );
}