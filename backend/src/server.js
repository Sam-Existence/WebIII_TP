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
            console.log(musique);
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

app.listen(8000, () => console.log("Port 8000 écouté"));