const express = require("express");
const router = express.Router();
//const Books = require('../models/books');
const bookController = require('../controllers/books');

/**
* @swagger
* /library/books:
*   get:
*       summary: use to get all books
*       responses:
*           '200':
*               description: A successful response
*/
router.get('/books', bookController.findAll);
router.post('/book', bookController.create);
router.get('/book/:id', bookController.findOne);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.delete);

module.exports = router;