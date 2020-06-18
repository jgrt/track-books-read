const express = require("express");
const router = express.Router();
const Books = require('../models/books');


/**
* @swagger
* /library/books:
*   get:
*       summary: use to get all books
*       responses:
*           '200':
*               description: A successful response
*/
router.get('/books', (req, res) => {
  Books.find({}).exec(function(err, books){
    if(err) {
        res.json({message: err});
    } else {
        res.json(books);
    }
  });
});



router.post('/book', (req, res) =>{
  const book = new Books({
    name : req.body.name,
    author: req.body.author
  });

  book.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({message: err});
    });
});


module.exports = router;