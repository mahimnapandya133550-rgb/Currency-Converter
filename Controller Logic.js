const axios = require('axios');
const Conversion = require('../models/Conversion');

exports.convertCurrency = async (req, res) => {
    try {
        const { from, to, amount } = req.body;

        const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const rate = response.data.rates[to];
        const convertedAmount = amount * rate;

        // Save to DB
        const conversion = new Conversion({
            fromCurrency: from,
            toCurrency: to,
            amount,
            convertedAmount,
            rate
        });

        await conversion.save();

        res.json({
            from,
            to,
            amount,
            rate,
            convertedAmount
        });

    } catch (error) {
        res.status(500).json({ error: "Conversion failed" });
    }
};


// Get conversion history
exports.getHistory = async (req, res) => {
    try {
        const history = await Conversion.find().sort({ date: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch history" });
    }
};