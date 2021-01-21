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

router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/create');
});

router.post('/celebrities', (req, res, next) => {
    const data = req.body;

    Celebrity.create({
        name: data.name,
        occupation: data.occupation,
        catchPhrase: data.catchPhrase
    }).then((celebrities) => {
        res.redirect('/');
    }).catch(error => {
        next('error');
    })
})

router.post('/celebrities/:id/delete', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findByIdAndRemove(id)
    .then((celebrities) => {
        res.redirect('/');
    })
    .catch(error => {
        next('error');
    })
});


router.get('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Celebrity.findbyId(id)
    .then((celebrities) => {
        res.render('celebrities/edit', { celebrities : celebrities } );
    })
    .catch(error => {
        next('error');
    })
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    Celebrity.findByIdAndUpdate({
        name: data.name,
        occupation: data.occupation,
        catchPhrase: data.catchPhrase
    }).then((celebrities) => {
        res.redirect(`/celebrities/${celebrity._id}`);
    }).catch(error => {
        next('error');
    })
})


module.exports = router;
