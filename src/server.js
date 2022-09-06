
'use strict';

// Required constraints
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const Data = require('./data');

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose
const mongoose = required('mongoose');
mongoose.connect(process.env.DB_URL);

// Routes
app.get('/account', Data.getOneAccount);
app.get('/account', Data.getAllAccounts);
app.post('/account', Data.createOneAccount);
app.put('/account/:id', Data.updateOneAccount);
app.delete('/account/:id', Data.deleteOneAccount);


// Testing callbacks
app.get('/', (req, res) => {
    res.status(200).send('Welcome :)');
});

app.get('/test', (req, res) => {
    res.status(200).send('Test request received!');
});

// Error callbacks
app.get('*', (req, res) => {
    res.status(404).send('Seems like you have found the wrong thing :(');
});

app.get((req, res) => {
    res.status(500).send(`There seems to be a problem... ${error.message}`);
});


// Server listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));

