if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    let apiKey = process.env.dvla_api_key;
    let api = http.createClient(80, 'api.example.org');
    let vrm = req.params.vrm;
    let url = `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${vrm}`;



    
});

module.exports = dvla;