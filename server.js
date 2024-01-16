const express = require('express');
const db = require('./config/connection');

const { User, Thought } = require('./models');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', async (req, res) => {

});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

