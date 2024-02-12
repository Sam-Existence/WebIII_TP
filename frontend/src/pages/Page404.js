import React from "react";
import { useTranslation } from "react-i18next";

export const Page404 = () => {
    const { t } = useTranslation();
    return (
        <main>
            <h2 className="text-center">{ t("erreur404") }</h2>
            <p>{ t("pageNonTrouvee") }</p>
        </main>
    );
}