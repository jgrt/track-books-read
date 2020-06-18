const express = require('express');
const swaggerUi = require('swagger-ui-express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRouter = require("./src/routes/books");

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
const url = 'mongodb://jgrt:jgrt@database/admin';
const app = express();

app.use(bodyParser.json());
app.use("/library", bookRouter);

app.listen(port, host , () => {
  console.log(`server listening on port ${port}`);
 });

 mongoose.connect(url).then( ()=> {
  console.log('MongoDB is connected');
})
  .catch( err => {
  console.log(err);
});



