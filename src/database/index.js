const mongoose = require('mongoose');

const {MONGO_URI} = require('../config');

const dbConnection = ()=>{
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {dbConnection};