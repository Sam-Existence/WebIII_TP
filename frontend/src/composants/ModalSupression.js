import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";

export const ModalSupression = ({ show, repertoire, handleClose, handleSupression }) => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('');

    const handleConfirmation = async () => {
        const reponse = await fetch(`/api/repertoire/pieces/${repertoire._id}`, { method: 'DELETE' });

        if (reponse.status !== 200) {
            setStatus("Une erreur s'est produite");
        } else {
            handleSupression(repertoire);
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{ t("confirmationSuppressionRepertoire") }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center">{repertoire.titre}</p>
                <p className="text-center">{repertoire.artiste}</p>
                <p className="text-center">{repertoire.categorie}</p>
                {status ? <Alert variant='danger'>{status}</Alert> : <></>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleConfirmation}>
                    { t("oui") }
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    { t("non") }
                </Button>
            </Modal.Footer>
        </Modal>
    );
}