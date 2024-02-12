import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export const PanneauFiltrerDemandesSpeciales = ({ demandesSpeciales }) => {
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