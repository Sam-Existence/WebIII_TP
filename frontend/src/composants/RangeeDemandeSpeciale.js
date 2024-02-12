import React from "react";
import { useTranslation } from "react-i18next";

export const RangeeDemandeSpeciale = ({ demandeSpeciale, Button }) => {
    const { t } = useTranslation();
    return (
        <tr>
            <td>{demandeSpeciale.nom}</td>
            <td>{demandeSpeciale.pieces.length}</td>
            <td>{demandeSpeciale.active ? t("active") : t("inactive")}</td>
            <td>{<Button />}</td>
        </tr>
    )
}