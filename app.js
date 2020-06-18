const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/books");
const swaggerDocs = require('./swagger');
// const db = require('./db');


const port = 3000;
const host = '0.0.0.0';
const url = 'mongodb://jgrt:jgrt@database/admin';
const app = express();

app.use(bodyParser.json());
app.use("/library", bookRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, host , () => {
  console.log(`server listening on port ${port}`);
 });


 mongoose.connect(url).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err) {
  console.log(err);
});



