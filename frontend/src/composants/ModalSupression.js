import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalSupression = ({ show, repertoire, handleClose, handleSupression }) => {
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
                <Modal.Title>Voulez-vous vraiment supprimer ce répertoire ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center">{repertoire.titre}</p>
                <p className="text-center">{repertoire.artiste}</p>
                <p className="text-center">{repertoire.categorie}</p>
                {status ? <Alert variant='danger'>{status}</Alert> : <></>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleConfirmation}>
                    Oui
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Non
                </Button>
            </Modal.Footer>
        </Modal>
    );
}