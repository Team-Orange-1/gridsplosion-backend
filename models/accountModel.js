'use strict';

// Brings in mongoose
const mongoose = require('mongoose');

// Extract the Schema property
const { Schema } = mongoose;

// Creates the user accoutn Schema, object structure
const AccountSchema = new Schema({
    name: { type: 'String', required: true },
    highScore: { type: 'String', required: true },
    secretKey: { type: 'String', required: true },
    email: { type: 'String', required: true}
});

// Define the Model
const AccountModel = mongoose.model('data', AccountSchema);

// Export the new Model
module.exports = AccountModel;
