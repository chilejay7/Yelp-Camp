const express = require('express');
const path = require('path');
const db = require('./config/connection');
const morgan = require('morgan');
const { MAP_KEY } = require('dotenv').config();

const routes = require('./routes');

const PORT = 7075;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.get('/', async (req, res) => {
    try{
    const response = await fetch(`https://www.google.com/maps/embed/v1/place?key=${MAP_KEY}&q=Estes+Park+CO`);
    res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log('The server is up and listening on PORT', PORT);
    })
});
