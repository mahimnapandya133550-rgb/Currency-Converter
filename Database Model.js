const mongoose = require('mongoose');

const conversionSchema = new mongoose.Schema({
    fromCurrency: String,
    toCurrency: String,
    amount: Number,
    convertedAmount: Number,
    rate: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Conversion', conversionSchema);