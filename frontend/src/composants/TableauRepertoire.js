import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export const TableauRepertoire = ({ repertoires, buttons=false }) => {
    const [repertoiresTries, setRepertoiresTries] = useState(repertoires);
    if (repertoires && !repertoiresTries) {
        setRepertoiresTries(repertoires.sort((a, b) => a.categorie.localeCompare(b.categorie)));
    }

    const trierParTitreCroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => a.titre.localeCompare(b.titre));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParTitreDecroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => b.titre.localeCompare(a.titre));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParArtisteCroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => a.artiste.localeCompare(b.artiste));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParArtisteDecroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => b.artiste.localeCompare(a.artiste));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParCategorieCroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => a.categorie.localeCompare(b.categorie));
        setRepertoiresTries(nouveauRepertoires);
    }

    const trierParCategorieDecroissant = () => {
        const nouveauRepertoires = repertoiresTries.toSorted((a, b) => b.categorie.localeCompare(a.categorie));
        setRepertoiresTries(nouveauRepertoires);
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
                    {buttons ? <th></th> : <></>}
                </tr>
            </thead>
            <tbody>
                {repertoiresTries?.map(repertoire => 
                    <RangeeRepertoire 
                        key={repertoire._id}
                        repertoire={repertoire}
                        buttons={buttons}
                    />)}
            </tbody>
        </Table>
    );
}