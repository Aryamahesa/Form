const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
    
});

router.post('/add-form', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
