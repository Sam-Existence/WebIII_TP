import express from 'express';
import runMongoQuery from './RunMongoQuery';
import { ObjectId } from 'mongodb';

const app = express();
app.use(express.json());

app.get('/api/pieces', async (requete, reponse) => {
    let musiques = null;
    await runMongoQuery(async (dbo) => {
        musiques = await dbo.collection('musiques').find().toArray();
    });
    reponse.status(200).json(musiques);
});

app.get('/api/pieces/:id', async (requete, reponse) => {
    let musique = null;
    let {id} = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } 
    catch (erreur) {
        reponse.status(400).json({'erreur': 'Id au mauvais format'});
        idEstBonFormat = false;
    }

    if(idEstBonFormat)
    {
        await runMongoQuery(async (dbo) => {
            musique = await dbo.collection('musiques').findOne({_id: new ObjectId(id)});
        });

        if(!musique) {
            reponse.status(404).json({'erreur': 'Musique non trouvée'});
        } else {
            reponse.status(200).json(musique);
        }
    }
});

app.post('/api/pieces', async (requete, reponse) => {
    const {titre, artiste, categorie} = requete.body;
    let id = null;

    if(!titre || !artiste || !categorie) {
        reponse.status(400).json({'erreur': 'Titre, artiste ou catégorie vide'});
    }
    else {
        await runMongoQuery(async (dbo) => {
            id = (await dbo.collection('musiques').insertOne({titre, artiste, categorie})).insertedId;
        });
    
        if(id) {
            reponse.status(201).json({'location': `/api/pieces/${id}`});
        } else {
            reponse.status(500).json({'erreur': 'Ressource non créée'});
        }
    }
});

app.put('/api/pieces/:id', async (requete, reponse) => {
    let musique = null;
    let {id} = requete.params;
    const {titre, artiste, categorie} = requete.body;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } 
    catch (erreur) {
        reponse.status(400).json({'erreur': 'Id au mauvais format'});
        idEstBonFormat = false;
    }

    if(!titre && !artiste && !categorie) {
        reponse.status(400).json({'erreur': 'Titre, artiste et/ou catégorie doit être rempli'});
    } 
    else if(idEstBonFormat)
    {
        let update = {};
        titre ? update['titre'] = titre : null;
        artiste ? update['artiste'] = artiste : null;
        categorie ? update['categorie'] = categorie : null;

        await runMongoQuery(async (dbo) => {
            musique = await dbo.collection('musiques').findOneAndUpdate(
                {_id: new ObjectId(id)}, 
                {$set: update}, 
                {returnDocument: 'after'});
        });

        if(!musique) {
            reponse.status(404).json({'erreur': 'Musique non trouvée'});
        } else {
            reponse.status(200).json(musique);
        }
    }
});

app.delete('/api/pieces/:id', async (requete, reponse) => {
    let {id} = requete.params;
    let idEstBonFormat = true;

    try {
        id = new ObjectId(id);
    } 
    catch (erreur) {
        reponse.status(400).json({'erreur': 'Id au mauvais format'});
        idEstBonFormat = false;
    }

    if(idEstBonFormat)
    {
        let resultat = null;
        await runMongoQuery(async (dbo) => {
            resultat = await dbo.collection('musiques').deleteOne({_id: new ObjectId(id)});
        });

        if(resultat.deletedCount < 1) {
            reponse.status(404).json({'erreur': 'Musique non trouvée'});
        } else {
            reponse.status(200).json({'message': `Musique ${id} supprimée`});
        }
    }
});

app.listen(8000, () => console.log("Port 8000 écouté"));