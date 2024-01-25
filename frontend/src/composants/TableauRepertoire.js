import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";

export const TableauRepertoire = ({ repertoires }) => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Catégorie</th>
                </tr>
            </thead>
            <tbody>
                {repertoires.map(repertoire => 
                    <RangeeRepertoire 
                        key={`${repertoire.titre}_${repertoire.artiste}`}
                        repertoire={repertoire}
                    />)}
            </tbody>
        </Table>
    );
}