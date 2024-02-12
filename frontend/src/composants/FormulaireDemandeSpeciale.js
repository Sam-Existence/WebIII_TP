import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ListePiecesDemandeSpeciale } from "./ListePiecesDemandeSpeciale";

export const FormulaireDemandeSpeciale = ({ handleSubmit, status, demandeSpeciale, name='' }) => {
    const [nom, setNom] = useState(name);
    const [pieces, setPieces] = useState([]);
    const [repertoires, setRepertoires] = useState();
    const [repertoiresTries, setRepertoiresTries] = useState()
    const navigate = useNavigate();
    useEffect(() => {
        const chercherRepertoires = async () => {
            const body = await fetch('/api/repertoire/pieces').then(resultat => resultat.json());
            setRepertoires(body);
        };
        chercherRepertoires();
    }, []);

    useEffect( () => {
        setNom(demandeSpeciale ? demandeSpeciale.nom : name);
        setPieces(demandeSpeciale ? demandeSpeciale.pieces : []);
    }, [demandeSpeciale, name]);

    useEffect(() => {
        let nouveauRepertoires = repertoires?.filter(piece => !pieces.map(p => p._id).includes(piece._id));
        setRepertoiresTries(nouveauRepertoires);
    },[repertoires, pieces]);

    const handleAjout = (piece) => setPieces([ ...pieces, piece]);
    const handleSupression = (piece) => setPieces(pieces.filter(p => p._id !== piece._id));

    return (
        <Form onSubmit={(e) => handleSubmit(e, {
            id: (demandeSpeciale ? demandeSpeciale._id : null),
            nom,
            pieces: pieces.map(piece => piece._id)
        })}>
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            </Form.Group>
            <ListePiecesDemandeSpeciale pieces={pieces} typeBouton="supprimer" handleModification={handleSupression} />
            <Button className="mb-3" variant="primary" type="submit">
                Soumettre
            </Button>
            &nbsp;
            <Button className="mb-3" variant="danger" type="button" onClick={() => navigate("/demandes-speciales")}>
                Annuler
            </Button>
            <p className={status ? "" : "d-none"}>{status}</p>

            <ListePiecesDemandeSpeciale pieces={repertoiresTries} typeBouton="ajouter" handleModification={handleAjout} />
        </Form>
    );
}