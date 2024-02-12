import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { Button } from "react-bootstrap";
import { RangeePieceDemandeSpeciale } from "./RangeePieceDemandeSpeciale";

export const ListePiecesDemandeSpeciale = ({ pieces, typeBouton="supprimer", handleModification }) => {
    const [piecesTries, setPiecesTries] = useState(pieces);

    useEffect(() => {
        setPiecesTries(pieces?.sort((a, b) => a.categorie.localeCompare(b.categorie)));
    }, [pieces]);

    const handleSupression = repertoireASupprimer => {
        const nouveauRepertoires = piecesTries.filter(repertoire => repertoire._id !== repertoireASupprimer._id);
        setPiecesTries(nouveauRepertoires);
    }

    const trierParTitreCroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => a.titre.localeCompare(b.titre));
        setPiecesTries(nouveauRepertoires);
    }

    const trierParTitreDecroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => b.titre.localeCompare(a.titre));
        setPiecesTries(nouveauRepertoires);
    }

    const trierParArtisteCroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => a.artiste.localeCompare(b.artiste));
        setPiecesTries(nouveauRepertoires);
    }

    const trierParArtisteDecroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => b.artiste.localeCompare(a.artiste));
        setPiecesTries(nouveauRepertoires);
    }

    const trierParCategorieCroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => a.categorie.localeCompare(b.categorie));
        setPiecesTries(nouveauRepertoires);
    }

    const trierParCategorieDecroissant = () => {
        const nouveauRepertoires = piecesTries.toSorted((a, b) => b.categorie.localeCompare(a.categorie));
        setPiecesTries(nouveauRepertoires);
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
                {piecesTries?.map(repertoire => 
                    <RangeePieceDemandeSpeciale 
                        key={repertoire._id}
                        piece={repertoire}
                        typeBouton={typeBouton}
                        handleModification={handleModification}
                    />)}
            </tbody>
        </Table>
    );
}