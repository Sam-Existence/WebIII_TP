import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const ConfirmationSuppression = ({ repertoire }) => {
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    if (repertoire === undefined) {
        return;
    }

    const rederigerAdmin = () => {
            navigate('/admin');
    }

    const handleConfirmation = async () => {
        const reponse = await fetch(`/api/pieces/${repertoire._id}`, { method: 'DELETE' });

        if (reponse.status !== 200) {
            setStatus("Une erreur s'est produite");
        } else {
            rederigerAdmin();
        }
    }

    return (
        <>
            <p className="text-center">Voulez-vous vraiment supprimer ce répertoire ?</p>
            <p className="text-center">{repertoire.titre}</p>
            <p className="text-center">{repertoire.artiste}</p>
            <p className="text-center">{repertoire.categorie}</p>
            
            <div className="text-center">
                <Button className="mb-3" type="button" variant="success" onClick={handleConfirmation}>Oui</Button>
                &nbsp;
                <Button className="mb-3" type="button" variant="danger" onClick={rederigerAdmin}>Non</Button>
                <p className={status ? "" : "d-none"}>{status}</p>
            </div>
        </>
    )
}