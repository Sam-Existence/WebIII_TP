import express from "express";
import runMongoQuery from "./RunMongoQuery";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json());

app.get("/api/repertoire/pieces", async (requete, reponse) => {
    let musiques = null;
    await runMongoQuery(async (dbo) => {
        musiques = await dbo.collection("repertoire").find().toArray();
    });
    reponse.status(200).json(musiques);
});

app.get("/api/repertoire/pieces/:id", async (requete, reponse) => {
    let musique = null;
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (idEstBonFormat) {
        await runMongoQuery(async (dbo) => {
            musique = await dbo
                .collection("repertoire")
                .findOne({ _id: new ObjectId(id) });
        });

        if (!musique) {
            reponse.status(404).json({ erreur: "Musique non trouvée" });
        } else {
            reponse.status(200).json(musique);
        }
    }
});

app.post("/api/repertoire/pieces", async (requete, reponse) => {
    const { titre, artiste, categories } = requete.body;
    let id = null;

    if (!titre || !artiste || !categories?.length) {
        reponse.status(400).json({ erreur: "Titre, artiste ou catégorie vide" });
    } else {
        await runMongoQuery(async (dbo) => {
            id = (
                await dbo
                    .collection("repertoire")
                    .insertOne({ titre, artiste, categories })
            ).insertedId;
        });

        if (id) {
            reponse.status(201).json({ location: `/api/pieces/${id}` });
        } else {
            reponse.status(500).json({ erreur: "Ressource non créée" });
        }
    }
});

app.put("/api/repertoire/pieces/:id", async (requete, reponse) => {
    let musique = null;
    let { id } = requete.params;
    const { titre, artiste, categories } = requete.body;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (!titre && !artiste && !categories?.length) {
        reponse
            .status(400)
            .json({ erreur: "Titre, artiste et/ou catégorie doit être rempli" });
    } else if (idEstBonFormat) {
        let update = {};
        titre ? (update["titre"] = titre) : null;
        artiste ? (update["artiste"] = artiste) : null;
        categories?.length ? (update["categories"] = categories) : null;

        await runMongoQuery(async (dbo) => {
            musique = await dbo
                .collection("repertoire")
                .findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    { $set: update },
                    { returnDocument: "after" }
                );
        });

        if (!musique) {
            reponse.status(404).json({ repertoire: "Musique non trouvée" });
        } else {
            reponse.status(200).json(musique);
        }
    }
});

app.delete("/api/repertoire/pieces/:id", async (requete, reponse) => {
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (idEstBonFormat) {
        let resultat = null;
        await runMongoQuery(async (dbo) => {
            resultat = await dbo
                .collection("repertoire")
                .deleteOne({ _id: new ObjectId(id) });
        });

        if (resultat.deletedCount < 1) {
            reponse.status(404).json({ erreur: "Musique non trouvée" });
        } else {
            reponse.status(200).json({ message: `Musique ${id} supprimée` });
        }
    }
});

app.get("/api/repertoire/pieces/top/:quantite", async (requete, reponse) => {
    let { quantite } = requete.params;
    quantite = parseInt(quantite);
    let pieces = [];
    if (!Number.isNaN(quantite)) {
        await runMongoQuery(async (dbo) => {
            pieces = await dbo.collection('demandesSpeciales').aggregate([
                {
                    $unwind: "$pieces",
                },
                {
                    $lookup: {
                        from: "repertoire",
                        localField: "pieces",
                        foreignField: "_id",
                        as: "piece",
                    },
                },
                {
                    $group: {
                        _id: { $first: "$piece._id" },
                        titre: { $first: { $first: "$piece.titre" } },
                        artiste: { $first: { $first: "$piece.artiste" } },
                        categorie: { $first: { $first: "$piece.categorie" } },
                        count: { $sum: 1 },
                    },
                },
                {
                    $match: {
                        _id: {
                            $ne: null
                        }
                    }
                },
                {
                    $sort: {
                        count: -1,
                        titre: 1
                    },
                },
                {
                    $limit: quantite
                }
            ]).toArray();
        });
        reponse.status(200).json(pieces);
    } else {
        reponse.status(400).json({ erreur: "La quantité doit être un entier" });
    }
});

app.get("/api/demandes-speciales", async (requete, reponse) => {
    let demandesSpeciales = null;
    await runMongoQuery(async (dbo) => {
        demandesSpeciales = await dbo
            .collection("demandesSpeciales")
            .find()
            .toArray();
    });
    reponse.status(200).json(demandesSpeciales);
});

app.post('/api/demandes-speciales', async (requete, reponse) => {
    let { nom, pieces } = requete.body;
    let id = null;
    if (!nom || !pieces?.length) {
        reponse.status(400).json({ 'erreur': 'La demande spéciale n\'a pas un format correct' });
    } else {
        let idPiecesEstBonFormat = true;
        try {
            pieces = pieces.map(piece => new ObjectId(piece));
        }
        catch (erreur) {
            reponse.status(400).json({ 'erreur': 'L\'id des pièces n\'est pas au bon format.' });
            idPiecesEstBonFormat = false;
        }
        if (idPiecesEstBonFormat) {
            await runMongoQuery(async dbo => {
                id = (await dbo.collection('demandesSpeciales')
                    .insertOne(
                        {
                            nom,
                            pieces,
                            active: true
                        }
                    ))
                    .insertedId;
            });
            reponse.status(201).json({ 'uri': `/api/demandes-speciales/${id}` });
        }
    }
});

app.put('/api/demandes-speciales/:id', async (requete, reponse) => {
    let demandeSpeciale = null;
    let { nom, pieces } = requete.body;
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (!nom || !pieces?.length) {
        reponse
            .status(400)
            .json({ erreur: 'La demande spéciale n\'a pas un format correct' });
    } else if (idEstBonFormat) {
        let idPiecesEstBonFormat = true;
        try {
            pieces = pieces.map(piece => new ObjectId(piece));
        }
        catch (erreur) {
            reponse.status(400).json({ 'erreur': 'L\'id des pièces n\'est pas au bon format.' });
            idPiecesEstBonFormat = false;
        }

        if (idPiecesEstBonFormat) {
            let update = {};
            nom ? (update["nom"] = nom) : null;
            pieces ? (update["pieces"] = pieces) : null;

            await runMongoQuery(async (dbo) => {
                demandeSpeciale = await dbo
                    .collection("demandesSpeciales")
                    .findOneAndUpdate(
                        { _id: new ObjectId(id) },
                        { $set: update },
                        { returnDocument: "after" }
                    );
            });

            if (!demandeSpeciale) {
                reponse.status(404).json({ erreur: "Demande spéciale non trouvée" });
            } else {
                reponse.status(200).json(demandeSpeciale);
            }
        }
    }
});

app.get('/api/demandes-speciales/active', async (requete, reponse) => {
    let demandesSpeciales = null;
    await runMongoQuery(async (dbo) => {
        demandesSpeciales = await dbo
            .collection("demandesSpeciales")
            .find({ active: true })
            .toArray();
    });
    reponse.status(200).json(demandesSpeciales);
});

app.get('/api/demandes-speciales/:id', async (requete, reponse) => {
    let demandeSpeciale = null;
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    }
    catch (erreur) {
        reponse.status(400).json({ 'erreur': 'Id au mauvais format' });
        idEstBonFormat = false;
    }

    if (idEstBonFormat) {
        await runMongoQuery(async (dbo) => {
            demandeSpeciale = await dbo.collection('demandesSpeciales').aggregate([
                {
                    $match: { _id: id },
                },
                {
                    $lookup: {
                        from: "repertoire",
                        localField: "pieces",
                        foreignField: "_id",
                        as: "pieces",
                    },
                },
            ]).toArray();
        });

        if (!demandeSpeciale) {
            reponse.status(404).json({ 'erreur': 'Demande spéciale non trouvée' });
        } else {
            reponse.status(200).json(demandeSpeciale[0]);
        }
    }
});

app.put('/api/demandes-speciales/:id/desactiver', async (requete, reponse) => {
    let demandeSpeciale = null;
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (idEstBonFormat) {
        let update = { active: false };

        await runMongoQuery(async (dbo) => {
            demandeSpeciale = await dbo
                .collection("demandesSpeciales")
                .findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    { $set: update },
                    { returnDocument: "after" }
                );
        });

        if (!demandeSpeciale) {
            reponse.status(404).json({ repertoire: "Demande spéciale non trouvée" });
        } else {
            reponse.status(200).json(demandeSpeciale);
        }
    }
});

app.post('/api/demandes-speciales/:id/pieces', async (requete, reponse) => {
    let demandeSpeciale = null;
    let { id } = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "Id au mauvais format" });
        idEstBonFormat = false;
    }

    if (idEstBonFormat) {
        let idPiecesEstBonFormat = true;
        let { piece } = requete.body;
        try {
            idPiecesEstBonFormat = !!piece;
            piece = new ObjectId(piece);
        }
        catch (erreur) {
            idPiecesEstBonFormat = false;
        }
        if (idPiecesEstBonFormat) {
            let update = { active: false };

            await runMongoQuery(async (dbo) => {
                demandeSpeciale = await dbo
                    .collection("demandesSpeciales")
                    .findOneAndUpdate(
                        { _id: new ObjectId(id) },
                        { $push: { 'pieces': piece } },
                        { returnDocument: "after" }
                    );
            });
            if (!demandeSpeciale) {
                reponse.status(404).json({ repertoire: "Demande spéciale non trouvée" });
            } else {
                reponse.status(200).json(demandeSpeciale);
            }
        } else {
            reponse.status(400).json({ 'erreur': 'L\'id de la pièce est au mauvais format' });
        }
    }
});

app.delete('/api/demandes-speciales/:id/pieces/:idpiece', async (requete, reponse) => {
    let demandeSpeciale = null;
    let { id, idpiece } = requete.params;
    let idEstBonFormat = true;
    let idPiecesEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "L'id au mauvais format" });
        idEstBonFormat = false;
    }

    try {
        idpiece = new ObjectId(idpiece);
    } catch (erreur) {
        reponse.status(400).json({ erreur: "L'id de la pièce au mauvais format" });
        idPiecesEstBonFormat = false;
    }

    if (idEstBonFormat && idPiecesEstBonFormat) {
        let update = { $pull: { 'pieces': idpiece } };

        await runMongoQuery(async (dbo) => {
            demandeSpeciale = await dbo
                .collection("demandesSpeciales")
                .findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    update,
                    { returnDocument: "after" }
                );
        });
        if (!demandeSpeciale) {
            reponse.status(404).json({ repertoire: "Demande spéciale non trouvée" });
        } else {
            reponse.status(200).json(demandeSpeciale);
        }
    }
});

app.listen(8000, () => console.log("Port 8000 écouté"));
