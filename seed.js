'use strict';

// Required constraints
require('dotenv').config();
const Account = require('./models/accountModel.js');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

// Function to create test files in database
async function seed() {
    await Account.create({
        name: 'player 1',
        highscore: '0:30',
        secretKey: '123'
    });
    console.log('Test account 1 created');

    await Account.create({
        name: 'player 2',
        highscore: '1:00',
        secretKey: '456'
    });
    console.log('Test account 2 created');

    await Account.create({
        name: 'player 3',
        highscore: '1:30',
        secretKey: '789'
    });
    console.log('Test account 3 created');

    mongoose.disconnect();
}

// Use 'node seed.js' in terminal to run code
seed();