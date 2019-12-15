const express = require('express');
const router = express.Router();
const makeOptions = require('../controller/crawler.controller');
const model = require('../model/crawler.model');

router.get('/', function(req, res, next) {
    makeOptions().then(result => {
        const searchRTModel = model({
            hostname: result.hostname,
            body: result.body,
            date: result.date,
        });

        searchRTModel.save(function(err) {
            if (err) {
                res.json({ err: err });
                return;
            }
            res.render('crawl', {
                host: result.hostname,
                body: result.body,
                date: result.date,
            });
        });
    });
});

router.get('/find', function(req, res, next) {
    model.find({ hostname: 'naver' }, function(err, serachs) {
        if (err) return res.status(500).json({ error: err });
        if (serachs.length === 0)
            return res.status(404).json({ error: 'book not found' });
        res.json(serachs);
    });
});

router.get('/delete', function(req, res, next) {
    model.remove({ hostname: 'naver' }, function(err, output) {
        if (err) return res.status(500).json({ error: 'database failure' });
        if (!output.result.n)
            return res.status(404).json({ error: 'book not found' });
        res.json({ message: 'serachs deleted' });

        // res.status(204).end();
    });
});

// app.delete('/api/books/:book_id', function(req, res){
//     Book.remove({ _id: req.params.book_id }, function(err, output){
//         if(err) return res.status(500).json({ error: "database failure" });

//         /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
//         if(!output.result.n) return res.status(404).json({ error: "book not found" });
//         res.json({ message: "book deleted" });
//         */

//         res.status(204).end();
//     })
// });
module.exports = router;
