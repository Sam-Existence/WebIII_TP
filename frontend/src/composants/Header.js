import React from "react";
import { BarreNavigation } from "./BarreNavigation";
import { useTranslation } from "react-i18next";

export const Header = ({ type = "client" }) => {
    const { t } = useTranslation();
    return (
        <header className="container-fluid bg-secondary text-white pt-2">
            <h1 className="text-center">{ t("marque") }{type === "admin" ? ` ${t("admin")}` : ""}</h1>
            <BarreNavigation type={type} />
        </header>
    );
}