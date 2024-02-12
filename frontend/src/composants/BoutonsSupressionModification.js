import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ModalSupression } from './ModalSupression'
import { useTranslation } from "react-i18next";

export const BoutonsSupressionModification = ({ repertoire, handleSupression }) => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation();
    return (
        <>
            <Button
                variant="primary"
                type="button"
                href={`/admin/repertoire/modifier/${repertoire._id}`}
            >
                { t("modifier") }
            </Button>
            &nbsp;
            <Button
                variant="danger"
                type="button"
                onClick={() => setShow(true)}
            >
                { t("supprimer") }
            </Button>
            <ModalSupression
                show={show}
                repertoire={repertoire}
                handleClose={() => setShow(false)}
                handleSupression={handleSupression} />
        </>
    );
}