import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeRepertoire } from "./RangeeRepertoire";

export const TableauRepertoire = ({ repertoires, buttons=false }) => {
    if (!repertoires?.length) {
        return;
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Artiste</th>
                    <th>Catégorie</th>
                    {buttons ? <th></th> : <></>}
                </tr>
            </thead>
            <tbody>
                {repertoires.map(repertoire => 
                    <RangeeRepertoire 
                        key={repertoire._id}
                        repertoire={repertoire}
                        buttons={buttons}
                    />)}
            </tbody>
        </Table>
    );
}