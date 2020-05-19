const express = require("express");
const router = express.Router();

/**
* @swagger
* /library/books:
*   get:
*       description: use to get all books
*       responses:
*           '200':
*               description: A successful response
*/
router.get('/books', function (req, res) {
  res.send('Get Books');
});

module.exports = router;