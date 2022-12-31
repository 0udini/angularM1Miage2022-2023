let mongoose = require('mongoose');

let UserSchema = Schema({
    _id: Number,
    nom: String,
    password: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('User', UserSchema);
