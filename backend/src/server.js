import express from 'express';
import runMongoQuery from './RunMongoQuery';

const app = express();
app.use(express.json());

app.get('/api/pieces', async (requete, reponse) => {
    let musiques = [];
    await runMongoQuery(async (dbo) => {
        musiques = await dbo.collection('musiques').find().toArray();
    });
    reponse.status(200).json(musiques);
});

app.listen(8000, () => console.log("Port 8000 écouté"));