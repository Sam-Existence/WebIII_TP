import {MongoClient} from 'mongodb';

const runMongoQuery = async (operations) => {
    try {
        const client = await MongoClient.connect('mongodb://a.0.0:27017');
        const db = client.db('jeuMainDes');

        await operations(db).catch(console.error);

        client.close();
    }
    catch (erreur) {
        throw erreur;
    }
}

export default runMongoQuery;