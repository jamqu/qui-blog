import { MongoClient } from 'mongodb'
// /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST'){
        const data = req.body;

        const {title, image, address, description} = data;
        const client = await MongoClient.connect('mongodb+srv://jaredmarkquinn:BbhTnhpOm6dZ4h3d@cluster0.utj1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const db = client.db()

        const meetUpsCollection = db.collection('meetups')

        const result = await meetUpsCollection.insertOne(data)

        console.log(result)

        client.close();

        res.status(201).json({message: 'Meetup inserted'});
    }
}

export default handler;