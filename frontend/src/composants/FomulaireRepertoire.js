import { React, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FomulaireRepertoire = ({ type="post", repertoire=null}) => {
    const [titre, setTitre] = useState('');
    const [artiste, setArtiste] = useState('');
    const [categorie, setCategorie] = useState('');
    const [status, setStatus] = useState('');

    useEffect( () => {
        setTitre(repertoire === null ? '' : repertoire.titre);
        setArtiste(repertoire === null ? '' : repertoire.artiste);
        setCategorie(repertoire === null ? '' : repertoire.categorie);
    }, [repertoire]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = 
            {
                id: (repertoire === null ? null : repertoire._id),
                titre,
                artiste,
                categorie
            };
        let reponse;
        switch (type) {
            case "post":
                reponse = await fetch('/api/repertoire/pieces', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                });
                break;
            case "put": 
                reponse = await fetch(`/api/repertoire/pieces/${repertoire._id}`, {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' }
                });
                break;
            
            default:
                break;
        }

        if (reponse.status === 201 || reponse.status === 200) {
            const resultat = await reponse.json();
            
            switch (type) {
                case "post":
                    setStatus(`Le répertoire a été ajouté avec l'id : ${resultat.location.split('/')[3]}`)
                    break;
                
                case "put":
                    setStatus(`Le répertoire ${repertoire._id} a été mis à jour`);
                    break;
                
                default:
                    break;
            }
        } else {
            setStatus("Erreur, le répertoire n'a pas été ajouté");
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