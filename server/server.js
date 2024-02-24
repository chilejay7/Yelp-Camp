const express = require('express');
const path = require('path');
const db = require('./connection/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));