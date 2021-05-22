const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// POST new Feedback
router.post('/', (req, res) => {
    const newReview = req.body;
    console.log(newReview);
    const queryText = `INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4) RETURNING *;`;

    //pass review info
    console.log(queryText);

    pool.query(queryText, [newReview.feeling, newReview.understanding, newReview.support, newReview.comments])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err => {
            console.log(`Error adding entry: ${queryText}`, err);
            res.sendStatus(500);
        }));
}); // END POST Route

module.exports = router;