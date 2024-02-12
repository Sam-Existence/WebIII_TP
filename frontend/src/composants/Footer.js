import React from 'react';
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className='container-fluid position-sticky bottom-0 py-2 bg-secondary text-white'>
            <p className='m-0 text-center'>{ t("marque") } &copy; 2024</p>
        </footer>
    );
}