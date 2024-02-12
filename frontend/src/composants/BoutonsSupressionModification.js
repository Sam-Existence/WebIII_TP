import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ModalSupression } from './ModalSupression'

export const BoutonsSupressionModification = ({ repertoire, handleSupression }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button
                variant="primary"
                type="button"
                href={`/admin/repertoire/modifier/${repertoire._id}`}
            >
                Modifier
            </Button>
            &nbsp;
            <Button
                variant="danger"
                type="button"
                onClick={() => setShow(true)}
            >
                Supprimer
            </Button>
            <ModalSupression
                show={show}
                repertoire={repertoire}
                handleClose={() => setShow(false)}
                handleSupression={handleSupression} />
        </>
    );
}