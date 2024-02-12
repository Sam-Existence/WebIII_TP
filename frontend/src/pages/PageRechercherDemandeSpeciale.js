import React, { useState, useEffect } from "react";
import { ListeDemandesSpeciales } from "../composants/ListeDemandesSpeciales";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const PageRechercherDemandeSpeciales = () => {
    let [demandesSpeciales, setDemandesSpeciales] = useState([]);
    const [nom, setNom] = useState("");
    const [demandesSpecialesFiltrees, setDemandesSpecialesFiltrees] = useState([]);

    useEffect(() => {
        const recupererDemandesSpeciales = async () => {
            let fetchUri = '/api/demandes-speciales';
            const body = await fetch(fetchUri).then(resultat => resultat.json());
            setDemandesSpeciales(body);
            setDemandesSpecialesFiltrees(body);
        };

        recupererDemandesSpeciales();
    }, []);

    const handleRecherche = (e) => {
        setDemandesSpecialesFiltrees(demandesSpeciales.filter((demandeSpeciale) =>
            demandeSpeciale.nom.toLowerCase().includes(e.target.value.toLowerCase())
        ));
        setNom(e.target.value.trim());
    }

    return (
        <main>
            <h2 className="text-center">Demandes Spéciales</h2>
            <Container className="d-flex align-items-end px-0">
                <Form.Group className="mb-2 flex-grow-1" controlId="rechercheDemandeSpeciale.Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Jean Peuplu" onKeyUp={handleRecherche} />
                </Form.Group>
                <Button className="mb-2" href={`/demandes-speciales/ajouter?nom=${nom}`} disabled={!nom} type="submit">Créer</Button>
            </Container>

            <ListeDemandesSpeciales demandesSpeciales={demandesSpecialesFiltrees} />
        </main>
    );
}