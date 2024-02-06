import { React, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FomulaireRepertoire = ({ handleSubmit, status="", repertoire=null}) => {
    const [titre, setTitre] = useState('');
    const [artiste, setArtiste] = useState('');
    const [categorie, setCategorie] = useState('');

    useEffect( () => {
        setTitre(repertoire === null ? '' : repertoire.titre);
        setArtiste(repertoire === null ? '' : repertoire.artiste);
        setCategorie(repertoire === null ? '' : repertoire.categorie);
    }, [repertoire]);

    return (
        <Form onSubmit={(e) => handleSubmit(e, {
            id: (repertoire === null ? null : repertoire._id),
            titre,
            artiste,
            categorie
        })}>
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="artiste">
                <Form.Label>Artiste</Form.Label>
                <Form.Control type="text" value={artiste} onChange={(e) => setArtiste(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categorie">
                <Form.Label>Catégorie</Form.Label>
                <Form.Control type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Soumettre
            </Button>
            &nbsp;
            <Button className="mb-3" variant="danger" type="button" onClick={() => window.location.href = "/admin"}>
                Annuler
            </Button>
            <p className={status ? "" : "d-none"}>{status}</p>
        </Form>
    );
}