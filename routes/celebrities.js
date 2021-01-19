const express = require('express');
const router = express.Router();
const CelebrityModel = require('../models/celebrity');

// Handle GET request for website root

router.get('/celebrities', (req, res, next) => {
    CelebrityModel.find()
    .then((celebrities) => {
        res.render('celebrities/index', { celebrities : celebrities } );
    })
    .catch(error => {
        res.render('error');
    })
});


module.exports = router;
