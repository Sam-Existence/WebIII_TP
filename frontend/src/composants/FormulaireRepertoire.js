import { React, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const FomulaireRepertoire = ({ handleSubmit, status = "", repertoire = null }) => {
    const [titre, setTitre] = useState('');
    const [artiste, setArtiste] = useState('');
    const [categories, setCategories] = useState(['']);
    const navigate = useNavigate();

    useEffect(() => {
        setTitre(repertoire ? repertoire.titre : '');
        setArtiste(repertoire ? repertoire.artiste : '');
        setCategories(repertoire ? repertoire.categories : ['']);
    }, [repertoire]);

    const handleModificationCatagorie = (categoireModifiee, index) => {
        setCategories(categories.map((c, i) => {
            if (i === index) {
                return categoireModifiee;
            } else {
                return c;
            }
        }));
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e, {
            id: (repertoire === null ? null : repertoire._id),
            titre,
            artiste,
            categories: categories.filter(c => c.trim())
        })}>
            <Form.Group className="mb-3" controlId="titre">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="artiste">
                <Form.Label>Artiste</Form.Label>
                <Form.Control type="text" value={artiste} onChange={(e) => setArtiste(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="categorie">
                <Form.Label>Catégories</Form.Label>
                {categories.map((categorie, index) =>
                    <div key={index} className="d-flex mb-1">
                        <Form.Control type="text" value={categorie} onChange={(e) => handleModificationCatagorie(e.target.value, index)} />
                        <FaMinus className="py-auto" onClick={() => setCategories(categories.filter((c, i) => i !== index))} />
                    </div>
                )}
                <FaPlus className="mb-3" onClick={() => setCategories([...categories, ''])} />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit">
                Soumettre
            </Button>
            &nbsp;
            <Button className="mb-3" variant="danger" type="button" onClick={() => navigate("/admin")}>
                Annuler
            </Button>
            <p className={status ? "" : "d-none"}>{status}</p>
        </Form>
    );
}