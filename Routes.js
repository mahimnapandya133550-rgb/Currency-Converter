const express = require('express');
const router = express.Router();
const {
    convertCurrency,
    getHistory
} = require('../controllers/converterController');

router.post('/convert', convertCurrency);
router.get('/history', getHistory);

module.exports = router;