import React from "react";
import { BarreNavigation } from "./BarreNavigation";

export const Header = ({ type="client" }) => {
    return (
        <header className="container-fluid bg-secondary text-white pt-2">
            <h1 className="text-center">Musique{type === "admin" ? " Admin" : ""}</h1>
            <BarreNavigation type={type} />
        </header>
    );
}