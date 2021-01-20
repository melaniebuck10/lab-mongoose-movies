const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// Handle GET request for website root

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then((celebrities) => {
        res.render('celebrities/index', { celebrities : celebrities } );
    })
    .catch(error => {
        next('error');
    })
});

router.get('/celebrities/:id', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findById(id)
    .then((celebrities) => {
        res.render('celebrities/show', { celebrities : celebrities });
    })
    .catch(error => {
        next('error');
    })
});



module.exports = router;
