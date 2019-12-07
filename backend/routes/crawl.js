const express = require('express');
const router = express.Router();
const makeOptions = require('../controller/crawler');

router.get('/', function(req, res, next) {
    makeOptions().then(result => {
        // res.send(result);
        // res.render -> ejs 형식으로 보내기위해서 사용

        res.render('crawl', {
            host: result.hostname,
            body: result.body,
            date: result.date,
        });
    });
});

module.exports = router;
