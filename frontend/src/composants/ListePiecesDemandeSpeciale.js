import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Button } from "react-bootstrap";
import { RangeePieceDemandeSpeciale } from "./RangeePieceDemandeSpeciale";

export const ListePiecesDemandeSpeciale = ({ pieces, typeBouton="supprimer", handleModification }) => {
    const [repertoiresTries, setRepertoiresTries] = useState();
    const [repertoireNonAplati, setRepertoireNonAplati] = useState();
    const [repertoiresAvecCategoriesAplaties, setRepertoiresAvecCategoriesAplaties ] = useState();
    
    

    const handleSupression = repertoireASupprimer => {
        const nouveauRepertoires = repertoiresTries.filter(repertoire => repertoire._id !== repertoireASupprimer._id);
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParTitreCroissant = () => {
        const nouveauRepertoires = repertoireNonAplati.toSorted((a, b) => a.titre.localeCompare(b.titre));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParTitreDecroissant = () => {
        const nouveauRepertoires = repertoireNonAplati.toSorted((a, b) => b.titre.localeCompare(a.titre));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParArtisteCroissant = () => {
        const nouveauRepertoires = repertoireNonAplati.toSorted((a, b) => a.artiste.localeCompare(b.artiste));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParArtisteDecroissant = () => {
        const nouveauRepertoires = repertoireNonAplati.toSorted((a, b) => b.artiste.localeCompare(a.artiste));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParCategorieCroissant = () => {
        const nouveauRepertoires = repertoiresAvecCategoriesAplaties.toSorted((a, b) => a.categories[0].localeCompare(b.categories[0]));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParCategorieDecroissant = () => {
        const nouveauRepertoires = repertoiresAvecCategoriesAplaties.toSorted((a, b) => b.categories[0].localeCompare(a.categories[0]));
        setRepertoiresTries(nouveauRepertoires);
    }

    if (pieces && !repertoireNonAplati) {
        setRepertoireNonAplati(pieces.sort((a, b) => a.categories[0].localeCompare(b.categories[0])));
    }

    if (pieces && !repertoiresTries) {
        let nouveauRepertoiresAvecCategoriesAplaties = pieces.flatMap((repertoire) => {
            let repertoireEtendu = [];
            repertoire.categories.forEach((categorie, index) => {
                repertoireEtendu.push(
                    {
                        _id: repertoire._id, 
                        titre: repertoire.titre, 
                        artiste: repertoire.artiste, 
                        categories: [repertoire.categories[index]]
                    }
                );
            });
            return repertoireEtendu;
        });
        setRepertoiresAvecCategoriesAplaties(nouveauRepertoiresAvecCategoriesAplaties);
        
    }
    if (repertoiresAvecCategoriesAplaties && !repertoiresTries) {
        trierParCategorieCroissant();
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>
                        <div className="d-flex justify-content-between">
                            <div className="p-2">Titre</div>
                            <div className="p-2">
                                <SlArrowUp onClick={trierParTitreCroissant}/>
                                <SlArrowDown onClick={trierParTitreDecroissant}/>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="d-flex justify-content-between">
                            <div className="p-2">Artiste</div>
                            <div className="p-2">
                                <SlArrowUp onClick={trierParArtisteCroissant}/>
                                <SlArrowDown onClick={trierParArtisteDecroissant}/>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="d-flex justify-content-between">
                            <div className="p-2">Catégorie</div>
                            <div className="p-2">
                                <SlArrowUp onClick={trierParCategorieCroissant}/>
                                <SlArrowDown onClick={trierParCategorieDecroissant}/>
                            </div>
                        </div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {repertoiresTries?.map(repertoire => 
                    <RangeePieceDemandeSpeciale 
                        key={repertoire._id + repertoire.categories[0]}
                        piece={repertoire}
                        typeBouton={typeBouton}
                        handleModification={handleModification}
                    />)}
            </tbody>
        </Table>
    );
}