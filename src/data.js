'use strict';

const { response } = require('express');
const AccountSchema = require('./../models/accountModel.js');
const Data = {};

// Sends back the data of one account
Data.getOneAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const accountData = await AccountSchema.find({ _id: id });
        res.status(200).send(accountData);
    } catch (err) {
        next(err);
    }
}

// Sends back the data of all accounts
Data.getAllAccounts = async (req, res, next) => {
    try {
        const allAccountsData = await AccountSchema.find({});
        res.status(200).send(allAccountsData);
    } catch (err) {
        next(err);
    }
}

// Updates any data in the user account
Data.updateOneAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedAccountData = await AccountSchema.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
        res.status(200).send(updatedAccountData);
    } catch (err) {
        next(err);
    }
}

// Create a user account
Data.createOneAccount = async (req, res, next) => {
    try {
        const createdAccount = await AccountSchema.create(req.body);
        res.status(200).send(createdAccount);
    } catch (err) {
        next(err);
    }
}

// Delete all data and account
Data.deleteOneAccount = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedAccount = await AccountSchema.findByIdAndDelete({ _id: id });
        res.status(200).send(deletedAccount);
    } catch (err) {
        next(err);
    }
}


module.exports = Data;
