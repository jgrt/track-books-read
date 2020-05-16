const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Get all Books')
});

module.exports = router;