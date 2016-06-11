var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var almineSchema = new Schema({

    uno: String, 
    dos: String, 
    tres: String

})

var AlmineDB = mongoose.model('AlmineDB', almineSchema);

module.exports = AlmineDB;