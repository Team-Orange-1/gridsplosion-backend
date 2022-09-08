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
        highScore: 20,
        email: 'test1@gmail.com'
    });
    console.log('Test account 1 created');

    await Account.create({
        highScore: 100,
        email: 'tester2@yahoo.com'
    });
    console.log('Test account 2 created');

    await Account.create({
        highScore: 200,
        email: 'tester3@hello.com'
    });
    console.log('Test account 3 created');

    mongoose.disconnect();
}

// Use 'node seed.js' in terminal to run code
seed();
