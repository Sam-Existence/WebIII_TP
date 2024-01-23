import React from "react";
import { BarreNavigation } from "./BarreNavigation";

export const Header = () => {
    return (
        <header className="container-fluid bg-secondary text-white pt-2">
            <h1 className="text-center">Liste de répertoire</h1>
            <BarreNavigation />
        </header>
    );
}