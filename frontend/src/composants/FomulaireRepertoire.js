import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FomulaireRepertoire = () => {
    const [titre, setTitre] = useState('');
    const [artiste, setArtiste] = useState('');
    const [categorie, setCategorie] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const repertoire = 
            {
                titre,
                artiste,
                categorie
            };
        const reponse = await fetch('/api/pieces', {
            method: 'POST',
            body: JSON.stringify(repertoire),
            headers: { 'Content-Type': 'application/json' }
        });

        if (reponse.status !== 201) {
            setStatus("Erreur, le répertoire n'a pas été ajouté");
        } else {
            const resultat = await reponse.json();
            setStatus(`Le répertoire a été ajouté avec l'id : ${resultat.location.split('/')[3]}`)
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
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