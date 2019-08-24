const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST

router.post('/', (req, res) => {
    let feedback = req.body
    console.log('post data:', feedback);
    let queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((response) => {
        console.log('in POST:', response);
        res.sendStatus(201);
        
    }).catch((error) => {
        console.log('in POST error:', error);
        res.sendStatus(500);
    })
})


//GET

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM feedback ORDER BY "id" desc`
    
    pool.query(queryText)
    .then((result) => {
        console.log('in GET:', result);
        res.send(result.rows);
        
    }).catch((error) => {
        console.log('in GET error:', error);
        res.sendStatus(500);
        
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    let idToUpdate = req.params.id
    let queryText = `DELETE FROM feedback WHERE id = $1`
    console.log('in Delete id:', idToUpdate);
    
    
    pool.query(queryText, [idToUpdate])
    .then((result) => {
        console.log('in DELETE:', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('in DELETE ERROR:', error);
        res.sendStatus(500);
    })
})




module.exports = router;