const express = require("express");
const router = express.Router();
const bookController = require('../controllers/books');


router.get('/books', bookController.findAll);

router.post('/book', bookController.create);

router.get('/book/:id', bookController.findOne);

router.put('/book/:id', bookController.update);

router.delete('/book/:id', bookController.delete);

module.exports = router;