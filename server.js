const express = require('express');
const { MongoClient} = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;
const client = new MongoClient(connectionStringURI);

// Create variable to hold db connection
let db;

const dbName = 'socialNetworkDB';

// Connecting to MongoDB server
client.connect()
// on success...
.then(() => {
    console.log('Connected successfully to MongoDB');
    // Connect to socialNetworkDB
    db = client.db(dbName);

    // ...start up Express server
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})
.catch((err) => {
    console.error('Mongo connection error: ', err.message);
});

// Route handlers
app.use(express.json());

// Post route
app.post

// Get route
app.get