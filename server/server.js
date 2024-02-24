const express = require('express');
const path = require('path');
const db = require('./config/connection');

const PORT = 7075;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Test route and server are responding.')
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log('This server is up and listening on PORT', PORT);
    })
});
