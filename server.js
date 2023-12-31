const express = require('express');
const { MongoClient} = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'socialNetworkDB';

client.connect()
.then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})
.catch((err) => {
    console.error('Mongo connection error: ', err.message);
});

app.use(express.json());

// app.post()

// app.get()