const mongoose = require('mongoose');

const entryScheme = mongoose.Schema({
    owner: String,
    cardNumber:String,
    cvv: String,
    expirationDate: String,
    creationDate: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('account', entryScheme);