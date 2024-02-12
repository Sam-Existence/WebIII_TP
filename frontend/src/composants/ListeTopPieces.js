import React from "react";
import Table from 'react-bootstrap/Table';
import { RangeeTopPiece } from "./RangeeTopPiece";
import { useTranslation } from "react-i18next";

export const ListeTopPieces = ({ repertoires }) => {
    const { t } = useTranslation();
    let numero = 1;
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{ t("#") }</th>
                    <th>{ t("titre") }</th>
                    <th>{ t("artiste") }</th>
                    <th>{ t("categories") }</th>
                    <th>{ t("nombre") }</th>
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