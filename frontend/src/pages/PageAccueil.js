import React from "react";
import { useTranslation } from "react-i18next";

export const PageAccueil = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h2 className="text-center">{ t("accueil") }</h2>
            <p>{ t("iciLaMusiqueCestLaVie") }</p>
            <p>
                { t("paragrapheAccueil1") }
            </p>
            <p>
                { t("paragrapheAccueil2") }
            </p>
            <p>
                { t("paragrapheAccueil3") }
            </p>
        </main>
    );
}