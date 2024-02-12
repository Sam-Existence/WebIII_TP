import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";

export const PanneauFiltrerDemandesSpeciales = ({ demandesSpeciales }) => {
    const { t } = useTranslation();
    return (
        <Form>
            <Dropdown id="categories">
                {demandesSpeciales.map(demandeSpeciale =>
                    <Form.Check
                        id={demandeSpeciale._id}
                        key={demandeSpeciale._id}
                        type="checkbox"
                        label={demandeSpeciale.nom} />
                )}
            </Dropdown>
        </Form>
    );
};