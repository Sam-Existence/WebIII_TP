import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeTopPiece } from "./RangeeTopPiece";

export const ListeTopPieces = ({ repertoires }) => {
    let numero = 1;
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Catégorie</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {repertoires?.map(repertoire => 
                    <RangeeTopPiece
                        key={repertoire._id}
                        numero={numero++}
                        repertoire={repertoire}
                    />)}
            </tbody>
        </Table>
    );
}