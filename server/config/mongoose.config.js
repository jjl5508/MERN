const mongoose = require("mongoose");

module.exports = (pets) => {
    mongoose
        .connect('mongodb://localhost/pet')
        .then(() => {
            console.log('Successfully connected to pets')
        })
        .catch((err) => {
            console.log('mongoose connection to pets failed:', err);
        })
};